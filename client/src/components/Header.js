import styled from 'styled-components';
import logo from '../esset/icons.svg';
import { useNavigate } from 'react-router-dom';

const WLogo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
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
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  > input {
    width: 40%;
    height: 30px;
    margin: 0 10px;
  }
`;

const Menu = styled.div`
  display: flex;

  > div {
    border-radius: 1000px;
    padding: 6px 12px;
    font-size: 13px;
    &:hover {
      background-color: #e3e6e8;
      cursor: pointer;
    }
  }
`;

const BLogin = styled.button`
  border-radius: 3px;
  height: 30px;
  padding: 8px 10px;
  background-color: hsl(206, 96%, 90%);
  border: 1px solid hsl(205, 41%, 63%);
  color: hsl(205, 47%, 42%);
  &:hover {
    background-color: hsl(205, 57%, 81%);
    cursor: pointer;
  }
`;

const BSignup = styled.button`
  border-radius: 3px;
  height: 30px;
  padding: 8px 10px;
  border: 1px solid transparent;
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  &:hover {
    background-color: hsl(206, 100%, 40%);
    cursor: pointer;
  }
  margin-left: 5px;
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <WLogo>
        <Logo />
      </WLogo>
      <Menu>
        <div>About</div>
        <div>Product</div>
        <div>For team</div>
      </Menu>
      <input></input>
      <BLogin
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </BLogin>
      <BSignup
        onClick={() => {
          navigate('/signup');
        }}
      >
        Sigin up
      </BSignup>
    </Wrapper>
  );
}
