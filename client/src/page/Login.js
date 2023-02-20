import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../esset/logo.svg';
import StyledBtn from '../components/content/StyledBtn';

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

const Log = styled.img`
  background-image: url(${logo});
  height: 37px;
  width: 32px;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
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
          <Log
            onClick={() => {
              navigate('/');
            }}
            src={logo}
            alt="로그인로고"
            role="presentation"
          ></Log>
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
              <StyledBtn
                title={'Log in'}
                width={'260px'}
                height={'38px;'}
                onClick={() => {
                  console.log('click');
                }}
              ></StyledBtn>
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
