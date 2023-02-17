import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import logo from '../esset/logo.svg';

const Background = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  width: 300px;
  height: max-content;
  background-color: white;
  box-shadow: 0 0 1px 1px #e4e4e4;
  padding: 30px 0 30px 0;
  margin-bottom: 40px;
`;

const EPBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0px;
  width: 260px;
`;

const Input = styled.input`
  height: 35px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 1.15384615rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border-radius: 3px;
  height: 38px;
  width: 260px;
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

const TSignup = styled.div`
  color: hsl(206, 100%, 40%);
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const FText = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 13px;
`;

// const Logo = styled.div`
//   background-image: url(${logo});
//   height: 37px;
//   width: 32px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

const Wlog = styled.div`
  height: 50px;
  width: 40px;
`;
export default function Login({ setPage }) {
  const navigate = useNavigate();
  useEffect(() => {
    setPage({ navi: false, foot: false });
  }, []);

  return (
    <>
      <Background>
        <Container>
          <Wlog
            onClick={() => {
              navigate('/');
            }}
          >
            <a href="https://stackoverflow.com">
              <svg
                aria-hidden="true"
                width="32"
                height="37"
                viewBox="0 0 32 37"
              >
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                ></path>
              </svg>
            </a>
          </Wlog>
          <SocialLoginContainer>구글인증</SocialLoginContainer>
          <SocialLoginContainer>깃허브인증</SocialLoginContainer>
          <SocialLoginContainer>페이스북인증</SocialLoginContainer>
          <LoginContainer>
            <LoginBox>
              <EPBox>
                <Label>Email</Label>
                <Input></Input>
                <div>Email cannot be empty.</div>
              </EPBox>
              <EPBox>
                <Label>Password</Label>
                <Input></Input>
                <div>Password cannot be empty.</div>
              </EPBox>
              <Button>Log in</Button>
            </LoginBox>
          </LoginContainer>

          <FText>
            Don’t have an account?
            <TSignup
              onClick={() => {
                navigate('/signup');
              }}
            >
              &nbsp;Sign up
            </TSignup>
          </FText>
          <FText>
            Are you an employer?{' '}
            <TSignup
              onClick={() => {
                navigate('/');
              }}
            >
              &nbsp;Sign up on Talent
            </TSignup>
          </FText>
        </Container>
      </Background>
    </>
  );
}
