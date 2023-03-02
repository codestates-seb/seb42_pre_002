import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../esset/logo.svg';
import Glogo from '../esset/googleLog.svg';
import GitLog from '../esset/githubLogo.svg';
import FBLog from '../esset/facebook.svg';
import StyledBtn from '../components/content/StyledBtn';

const Background = styled.div`
  width: 100%;
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
  flex-direction: column;
`;

const GoogleLoginContainer = styled.button`
  border: 2px solid #e4e4e4;
  border-radius: 5px;
  height: 40px;
  width: 300px;
  margin-top: 10px;
  background-color: white;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const GoogleLog = styled.div`
  background-image: url(${Glogo});
  height: 18px;
  width: 18px;
  margin-top: 10px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
`;

const SocialLoginGoogleText = styled.div`
  height: 18px;
  width: 120px;
  margin-top: 12px;
`;

const GithubLoginContainer = styled.button`
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  height: 40px;
  width: 300px;
  margin-top: 10px;
  background-color: rgb(47, 51, 55);
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const GithubLog = styled.div`
  background-image: url(${GitLog});
  filter: invert(100%);
  height: 18px;
  width: 18px;
  margin-top: 10px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
`;

const SocialLoginGithubText = styled.div`
  color: white;
  height: 18px;
  width: 120px;
  margin-top: 12px;
`;

const FacebookLoginContainer = styled.button`
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  height: 40px;
  width: 300px;
  margin-top: 10px;
  background-color: rgb(56, 84, 153);
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const FacebookLog = styled.div`
  background-image: url(${FBLog});
  background-color: white;
  height: 18px;
  width: 18px;
  margin-top: 10px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
`;

const SocialLoginFacebookText = styled.div`
  color: white;
  height: 18px;
  width: 130px;
  margin-top: 12px;
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
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
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
  margin-bottom: 1px;
  padding-left: 5px;
  padding-right: 5px;
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

const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: red;
  font-size: 12px;
`;

export default function Login({ setPage }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const User = {
    email: 'test@example.com',
    pw: 'test2323@@@',
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    //이메일이 맞는지 안맞는지 판별 (정규식 표현)

    const regex =
      // eslint-disable-next-line
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);

    //비밀번호가 맞는지 안맞는지 판별 (정규식 표현)
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    setPage({ navi: false, foot: false });
  }, []);

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인이 성공했습니다s.');
      navigate('/');
    } else {
      alert('잘못된 회원 정보입니다.');
    }
  };

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
          <SocialLoginContainer>
            <GoogleLoginContainer>
              <GoogleLog
                src={Glogo}
                alt="로그인구글로고"
                role="presentation"
              ></GoogleLog>
              <SocialLoginGoogleText> Log in with Google</SocialLoginGoogleText>
            </GoogleLoginContainer>
            <GithubLoginContainer>
              <GithubLog
                src={GithubLog}
                alt="로그인깃허브로고"
                role="presentation"
              ></GithubLog>
              <SocialLoginGithubText>Log in with Github</SocialLoginGithubText>
            </GithubLoginContainer>
            <FacebookLoginContainer>
              <FacebookLog
                src={FBLog}
                alt="로그인로고"
                role="presentation"
              ></FacebookLog>
              <SocialLoginFacebookText>
                Log in with Facebook
              </SocialLoginFacebookText>
            </FacebookLoginContainer>
          </SocialLoginContainer>

          <LoginContainer>
            <LoginBox>
              <EPBox>
                <Label>Email</Label>
                <Input
                  type="text"
                  placeholder="ex@google.com"
                  onChange={handleEmail}
                ></Input>
                <ErrorMessageWrap>
                  {!emailValid && email.length > 0 && (
                    <div>The email is not a valid email address.</div>
                  )}
                </ErrorMessageWrap>
              </EPBox>
              <EPBox>
                <Label>Password</Label>
                <Input type="password" onChange={handlePw}></Input>
                <ErrorMessageWrap>
                  {!pwValid && pw.length > 0 && (
                    <div>Password cannot be empty.</div>
                  )}
                </ErrorMessageWrap>
              </EPBox>
              <StyledBtn
                title={'Log in'}
                width={'260px'}
                height={'38px;'}
                onClick={onClickConfirmButton}
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
