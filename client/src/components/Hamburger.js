import styled from 'styled-components';
import { useState } from 'react';

import useOuterClick from '../hooks/useOuterClick';

const StyledDiv = styled.div`
  position: relative;
  width: 48px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e3e6e8;
  }

  > :nth-child(1) {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;

    > :nth-child(2) {
      transition: all 0s ease;
    }

    > span {
      width: 16px;
      height: 2px;
      background-color: #525960;
      transition: all 0.2s ease;

      &.move1 {
        transform: translateY(5px) rotate(-45deg);
      }
      &.move2 {
        opacity: 0;
      }
      &.move3 {
        transform: translateY(-5px) rotate(45deg);
      }
    }
  }
`;

const NewDiv = styled.div`
  position: absolute;
  top: 46px;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: grey;
  z-index: 1100;
  display: ${(props) => props.display};
`;

const Hamburger = () => {
  const [trig, setTrig] = useState(false);
  const innerRef = useOuterClick(() => setTrig(false));

  return (
    <StyledDiv onClick={() => setTrig(!trig)} ref={innerRef}>
      <div>
        <span className={trig ? 'move1' : ''}></span>
        <span className={trig ? 'move2' : ''}></span>
        <span className={trig ? 'move3' : ''}></span>
      </div>
      <NewDiv display={trig ? 'block' : 'none'}>
        <a href="/content">kjljlkj</a>
      </NewDiv>
    </StyledDiv>
  );
};

export default Hamburger;
