import styled from 'styled-components';
import logo from '../esset/icons.svg';
import search from '../esset/search.svg';
import { useNavigate } from 'react-router-dom';

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
  gap: 10px;

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

const Input = styled.div`
  display: flex;
  width: 55%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid hsl(210, 8%, 75%);
  background-color: white;
  > input {
    width: 90%;
    height: 100%;
    margin: 0 10px;
    border: none;
    outline: none;
  }
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <Wrapper>
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
        <div>For team</div>
      </Menu>
      <Input>
        <img src={search} alt="돋보기"></img>
        <input placeholder="Search..."></input>
      </Input>
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
