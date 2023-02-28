import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useOuterClick from '../../hooks/useOuterClick';

import inbox from '../../esset/inbox.svg';
import help from '../../esset/help.svg';
import achivement from '../../esset/achivement.svg';
import site from '../../esset/site-changer.svg';
import favi from '../../esset/favi.png';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  > div {
    width: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    &:hover {
      background-color: #e3e6e8;
    }
    > img {
      padding: 0 10px;
      display: block;
    }
  }

  > :first-child {
    width: 50px;
    > img {
      width: 24px;
      height: 24px;
      padding: 0;
      border-radius: 3px;
    }
  }

  > :nth-child(5) {
    width: 38px;
    > img {
      height: 100%;
      padding: 40% 10px;
    }
  }
`;

const PopupDiv = styled.div`
  display: ${(props) => props.display};
  width: 375px;
  position: absolute;
  z-index: 1005;
  top: 50px;
  right: 0;
  background-color: #ffffff;
  color: #0074cc;
  border: 1px solid #e3e6e8;
  border-top: none;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const TitleDiv = styled.div`
  font-size: 12px;
  padding: 8px 12px;
  font-weight: bold;
`;

const StyledUl = styled.div`
  > li {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;

    &:hover {
      background-color: ${(props) =>
        props.which === 'current' ? '#e1ecf4' : '#e3e6e8'};
      color: #0a95ff;
    }

    > :nth-child(1) {
      display: flex;
      align-items: center;
      > :nth-child(1) {
        width: 16px;
        height: 16px;
        background-position: 0 -6138px;
        background-image: url(${favi});
        margin: 0 4px;
      }
      > :nth-child(2) {
        margin: 0 4px;
        font-weight: ${(props) => (props.which === 'current' ? 'bold' : '')};
      }
    }

    > :nth-child(2) {
      padding: 0 8px;
      > span {
        color: #0074cc;

        &:hover {
          color: #0a95ff;
        }
      }
    }
  }
`;

const LoginedHeader = () => {
  const [trig, setTrig] = useState(false);
  const navigate = useNavigate();

  const innerRef = useOuterClick(() => setTrig(false));
  return (
    <Wrapper>
      <div role="presentation" onClick={() => navigate('/mypage/1')}>
        <img src="https://picsum.photos/18/18/?random" alt="userImg" />
      </div>
      <div>
        <img src={inbox} alt="inbox" />
      </div>
      <div>
        <img src={achivement} alt="achivement" />
      </div>
      <div>
        <img src={help} alt="help" />
      </div>
      <div ref={innerRef}>
        <img
          src={site}
          alt="site-changer"
          role="presentation"
          onClick={() => setTrig(!trig)}
        />
        <PopupDiv display={trig ? 'block' : 'none'}>
          <TitleDiv>CURRENT COMMUNITY</TitleDiv>
          <StyledUl which="current">
            <li role="presentation" onClick={() => navigate('/')}>
              <div role="presentation" onClick={() => navigate('/')}>
                <div></div>
                <div>Stack Overflow</div>
              </div>
              <div>
                <span
                  role="presentation"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('logout');
                  }}
                >
                  Log out
                </span>
              </div>
            </li>
          </StyledUl>
          <TitleDiv>YOUR COMMUNITIES</TitleDiv>
          <StyledUl which="your">
            <li role="presentation" onClick={() => navigate('/')}>
              <div>
                <div></div>
                <div>Stack Overflow</div>
              </div>
            </li>
          </StyledUl>
        </PopupDiv>
      </div>
    </Wrapper>
  );
};

export default LoginedHeader;
