// import React from 'react'
import styled from 'styled-components';

import WhiteStyledBtn from '../WhiteStyledBtn';

import cake from '../../esset/cake.svg';
import cal from '../../esset/cal.svg';
import clock from '../../esset/clock.svg';
import loc from '../../esset/location.svg';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > img {
    width: 128px;
    height: 128px;
    margin: 8px;
    border-radius: 5px;
  }
`;

const DetailWrap = styled.div`
  padding: 8px;
  vertical-align: baseline;
  > div {
    color: #6a737c;
  }
  > :nth-child(1) {
    margin: 4px 4px 4px;
    font-size: 34px;
    color: #232629;
    line-height: 34px !important;
  }
  > :nth-child(2) {
    font-size: 21px;
    margin-bottom: 8px;
  }
  > :nth-child(3) {
    display: flex;
    align-items: center;
    margin: 4px 0;

    > div {
      display: flex;
      align-items: center;

      > img {
        width: 18px;
        height: 18px;
        margin-right: 4px;
      }

      > span {
        margin-right: 8px;
      }
    }
  }
  > :nth-child(4) {
    margin: 4px 0;
    > div {
      display: flex;
      align-items: center;

      > img {
        width: 18px;
        height: 18px;
        margin-right: 4px;
      }

      > span {
        margin-right: 8px;
      }
    }
  }
`;

const BtnWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const UserInfo = ({ setSelected }) => {
  const userInfo = useSelector((state) => state.userInfoReducer);

  return (
    <Wrapper>
      <img src="https://picsum.photos/128/128/?random" alt="user-img" />
      <DetailWrap>
        <div>{userInfo.nickname}</div>
        <div>Student of CodeStates</div>
        <div>
          <div>
            <img src={cake} alt="cake" style={{ paddingBottom: '4px' }} />
            <span>Member for 4 years, 1 month</span>
          </div>
          <div>
            <img src={clock} alt="cake" />
            <span>Last seen this week</span>
          </div>
          <div>
            <img src={cal} alt="cake" />
            <span>Visited 14 days, 3 consecutive</span>
          </div>
        </div>
        <div>
          <div>
            <img src={loc} alt="loc" />
            <span>Korea</span>
          </div>
        </div>
      </DetailWrap>
      <BtnWrap>
        <WhiteStyledBtn
          title="Edit profile"
          width="104px"
          height="35px"
          onClick={() => setSelected('Settings')}
        ></WhiteStyledBtn>
      </BtnWrap>
    </Wrapper>
  );
};

export default UserInfo;
