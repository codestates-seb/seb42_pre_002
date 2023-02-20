/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '../../esset/icons.svg';
import saveIcon from '../../esset/saveIcon.svg';
import history from '../../esset/history.svg';

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 16px;

  > div {
    width: 36px;
    height: 36px;
  }

  > :nth-child(1) {
    background-image: url(${backgroundImg});
    background-position: -1px -164px;
  }

  > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6a737c;
    font-size: 21px;
    height: 27.5px;
  }

  > :nth-child(3) {
    background-image: url(${backgroundImg});
    background-position: -1px -220px;
  }

  > :nth-child(4) {
  }

  > :nth-child(5) {
    padding-right: 4px;
    &:hover {
      fill: #0a95ff;
    }
  }
`;

const DetailLeftBar = () => {
  const [voteCount, setVoteCount] = useState(0);

  return (
    <BarWrapper>
      <div
        role={'presentation'}
        onClick={() => setVoteCount(voteCount + 1)}
      ></div>
      <div>{voteCount}</div>
      <div
        role={'presentation'}
        onClick={() => setVoteCount(voteCount - 1)}
      ></div>
      <img src={saveIcon} alt="save" />
      <img src={history} alt="history" />
    </BarWrapper>
  );
};

export default DetailLeftBar;
