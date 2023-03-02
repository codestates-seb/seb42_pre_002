import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Glogo from '../esset/googleLog.svg';
import GitLog from '../esset/githubLogo.svg';
import FBLog from '../esset/facebook.svg';
import StyledBtn from '../components/content/StyledBtn';
import H2icon1 from '../esset/H2Icon1.svg';
import H2icon2 from '../esset/H2Icon2.svg';
import H2icon3 from '../esset/H2Icon3.svg';
import H2icon4 from '../esset/H2Icon4.svg';
import SignFicture from '../esset/Signup.png';

const Background = styled.div`
  width: 100%;
  /* height: calc(100vh - 50px); */
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.div`
  margin-bottom: 20px;
  margin-right: 50px;
  font-size: 30px;
`;

const H2 = styled.div`
  margin-bottom: 20px;
  font-size: 17px;
  display: flex;
  align-items: center;
`;

const H2Icon1 = styled.div`
  background-image: url(${H2icon1});
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const H2Icon2 = styled.div`
  background-image: url(${H2icon2});
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
const H2Icon3 = styled.div`
  background-image: url(${H2icon3});
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
const H2Icon4 = styled.div`
  background-image: url(${H2icon4});
  width: 25px;
  height: 25px;
  margin-right: 10px;
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
  margin-top: 10 px;
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

const Label = styled.div`
  font-weight: 700;
  font-size: 1.15384615rem;
  margin-bottom: 1px;
  margin-top: 15px;
`;

const Input = styled.input`
  height: 32px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 5px;
  margin-bottom: 1px;
  padding-left: 5px;
  padding-right: 5px;
`;

const ErrorMessageWrap = styled.div`
  margin-top: 8px;
  color: red;
  font-size: 12px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  width: 300px;
  height: max-content;
  background-color: white;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 10px 20px 30px 20px;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const FootText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btext = styled.div`
  color: hsl(206, 100%, 40%);
`;

const Text = styled.div`
  margin-top: 30px;
  color: hsl(210, 8%, 45%);
`;

const ReText = styled.div`
  margin-bottom: 10px;
  color: hsl(210, 8%, 45%);
`;

const Mtext = styled.div`
  margin-bottom: 10px;
`;

const Signficture = styled.img`
  height: 150px;
  width: 260px;
  margin-bottom: 5px;
`;

export default function Signup({ setPage }) {
  const navigate = useNavigate();

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

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('가입을 축하드립니다. 다시 로그인주세요.');
      navigate('/');
    } else {
      alert('잘못된 회원 정보입니다.');
    }
  };

  useEffect(() => {
    setPage({ navi: false, foot: false });
  }, []);

  return (
    <>
      <Background>
        <Container>
          <LeftContainer>
            <H1>Join the Stack Overflow community</H1>
            <H2>
              <H2Icon1
                src={H2Icon1}
                alt="로그인구글로고"
                role="presentation"
              ></H2Icon1>
              Get unstuck — ask a question
            </H2>
            <H2>
              <H2Icon2
                src={H2icon2}
                alt="질문로고"
                role="presentation"
              ></H2Icon2>
              Unlock new privileges like voting and commenting
            </H2>
            <H2>
              <H2Icon3
                src={H2icon3}
                alt="질문로고"
                role="presentation"
              ></H2Icon3>
              Save your favorite tags, filters, and jobs
            </H2>
            <H2>
              <H2Icon4
                src={H2icon4}
                alt="질문로고"
                role="presentation"
              ></H2Icon4>
              Earn reputation and badges
            </H2>

            <div>
              <div>
                Collaborate and share knowledge with a private group for FREE.
              </div>
              <Btext>
                Get Stack Overflow for Teams free for up to 50 users.
              </Btext>
            </div>
          </LeftContainer>
          <div>
            <SocialLoginContainer>
              <GoogleLoginContainer>
                <GoogleLog
                  src={Glogo}
                  alt="로그인구글로고"
                  role="presentation"
                ></GoogleLog>
                <SocialLoginGoogleText>
                  Log in with Google
                </SocialLoginGoogleText>
              </GoogleLoginContainer>
              <GithubLoginContainer>
                <GithubLog
                  src={GithubLog}
                  alt="로그인깃허브로고"
                  role="presentation"
                ></GithubLog>
                <SocialLoginGithubText>
                  Log in with Github
                </SocialLoginGithubText>
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
            <LoginBox>
              <Label>Display name</Label>
              <Input></Input>
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
              <Label>Password</Label>
              <Input type="password" onChange={handlePw}></Input>
              <ErrorMessageWrap>
                {!pwValid && pw.length > 0 && (
                  <div>
                    Please add one of the following things to make your password
                    stronger:
                  </div>
                )}
              </ErrorMessageWrap>
              <ReText>
                <div>Passwords must contain at least eight</div>
                <div>characters, including at least 1 letter and 1</div>
                <div>number.</div>
              </ReText>
              <div></div>
              <Mtext>
                <div>
                  <Signficture src={SignFicture} alt="로봇검사"></Signficture>
                  <div>Opt-in to receive occasional product</div>
                </div>
                <div>updates, user research invitations,</div>
                <div>company announcements, and digests.</div>
              </Mtext>
              <StyledBtn
                title={'Log in'}
                width={'260px'}
                height={'38px;'}
                onClick={onClickConfirmButton}
              ></StyledBtn>
              <Text>By clicking “Sign up”, you agree to our terms of</Text>
              <Btext>service, privacy policy and cookie policy</Btext>
            </LoginBox>
            <FootText>
              <FText>
                Already have an account?
                <TSignup
                  onClick={() => {
                    navigate('/login');
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
            </FootText>
          </div>
        </Container>
      </Background>
    </>
  );
}
