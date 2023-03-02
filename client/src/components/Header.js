import styled from 'styled-components';
import logo from '../esset/icons.svg';
import search from '../esset/search.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Hamburger from './Hamburger';
import LoginedHeader from './header/LoginedHeader';

const WLogo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  &:hover {
    background-color: #e3e6e8;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 30px;
  background-image: url(${logo});
  background-position: 0 -500px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 97rem;
  max-width: 100%;
  margin: 0 auto;
`;

const Menu = styled.div`
  display: flex;
  gap: 4px;

  > div {
    border-radius: 1000px;
    padding: 6px 12px;
    font-size: 14px;
    color: #525960;
    &:hover {
      background-color: #e3e6e8;
      cursor: pointer;
      color: black;
    }
  }
`;

// const SignBtnWrapper = styled.div`
//   width: 140px;
//   margin-left: 8px;
//   > button {
//     border-radius: 3px;
//     height: 33px;
//     padding: 8px 10px;
//   }
// `;

// const BLogin = styled.button`
//   background-color: hsl(206, 96%, 90%);
//   border: 1px solid hsl(205, 41%, 63%);
//   color: hsl(205, 47%, 42%);
//   box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
//   &:hover {
//     background-color: hsl(205, 57%, 81%);
//     cursor: pointer;
//   }
// `;

// const BSignup = styled.button`
//   border: 1px solid transparent;
//   background-color: hsl(206, 100%, 52%);
//   border: 1px solid hsl(206, 100%, 52%);
//   box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
//   color: hsl(0, 0%, 100%);
//   &:hover {
//     background-color: hsl(206, 100%, 40%);
//     cursor: pointer;
//   }
//   margin: 0 10px 0 4px;
// `;

const Input = styled.div`
  display: flex;
  align-items: center;
  /* width: 55%; */
  flex: 1 0 auto;
  height: 32px;
  border-radius: 3px;
  border: 1px solid hsl(210, 8%, 75%);
  background-color: white;
  margin: 0 8px;

  &.focus {
    border: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 4px rgba(0, 116, 204, 0.15);
  }

  > input {
    width: 90%;
    height: 100%;
    /* margin: 0 10px; */
    border: none;
    outline: none;
  }
  > img {
    width: 18px;
    height: 18px;
    margin: 7px;
  }
`;

const Header = ({ page }) => {
  const [inputFocus, setInputFocus] = useState(false);

  const navigate = useNavigate();

  const inputFocusHandler = () => setInputFocus(!inputFocus);

  return (
    <Wrapper>
      {!page.navi && <Hamburger page={page} />}
      <WLogo
        onClick={() => {
          navigate('/');
        }}
      >
        <Logo />
      </WLogo>
      <Menu>
        <div>About</div>
        <div>Product</div>
        <div>For teams</div>
      </Menu>
      <Input className={inputFocus ? 'focus' : ''}>
        <img src={search} alt="돋보기"></img>
        <input
          placeholder="Search..."
          onFocus={inputFocusHandler}
          onBlur={inputFocusHandler}
        ></input>
      </Input>
      {/* <SignBtnWrapper>
        <BLogin
          onClick={() => {
            navigate('/login');
          }}
        >
          Log in
        </BLogin>
        <BSignup
          onClick={() => {
            navigate('/signup');
          }}
        >
          Sign up
        </BSignup>
      </SignBtnWrapper> */}
      <LoginedHeader />
    </Wrapper>
  );
};

export default Header;
