import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';

import StyledBtn from './StyledBtn';

import logo from '../../esset/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { onRerender } from '../../redux/action/contentAction';

const Wrapper = styled.div`
  width: 100%;

  > :nth-child(1) {
    padding: 0;
    margin: 10px 0;
  }

  > :nth-child(2) {
    margin: 0 2px;
    padding: 10px 0;
  }
`;

const SignUpBtnWrap = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LogInWrap = styled.div`
  display: flex;
  gap: 5px;

  > :nth-child(1) {
    font-size: 21px;
    font-weight: 400;
  }

  > :nth-child(2) {
    font-size: 21px;
  }
`;

const SignUpBtn = styled.div`
  width: 355.5px;
  height: 38px;
  background-color: #f8f9f9;
  cursor: pointer;
  padding: 10px;
  margin: 4px 0;
  border: 1px solid rgb(159, 166, 173);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #6a737c;

  &:hover {
    color: rgb(82, 89, 96);
    border: 1px solid hsl(210, 8%, 65%);
  }

  > img {
    width: 18px;
    height: 18px;
  }
`;

const PostBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 24px;

  > p {
    font-style: italic;
    color: #232629;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
  }
`;

export default function App() {
  // eslint-disable-next-line
  const curQuest = useSelector((state) => state.curQuestReducer);
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState('');
  //test용
  // eslint-disable-next-line
  const [isLogin, setIsLogin] = useState(false);

  const answerSubmit = () => {
    const answers = {
      content: answer,
      writer: isLogin,
    };
    axios
      .post('http://localhost:3001/question', answers)
      .then((res) => {
        console.log(res.status);
        setAnswer('');
        dispatch(onRerender({}));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <div className="container" data-color-mode="light">
        <MDEditor value={answer} onChange={setAnswer} preview="edit" />
        {/* <MDEditor.Markdown source={some} style={{ whiteSpace: 'pre-wrap' }} /> */}
      </div>

      {!isLogin && (
        <SignUpBtnWrap>
          <LogInWrap>
            <h3>Sign up or </h3>
            <a href="/login">Log in</a>
          </LogInWrap>
          <SignUpBtn>
            <img src={logo} alt="stackLogo" />
            <span>Sign up using Email and Password</span>
          </SignUpBtn>
        </SignUpBtnWrap>
      )}
      <PostBtnWrap>
        <StyledBtn
          title="Post Your Answer"
          width="130px"
          height="45px"
          onClick={answerSubmit}
        ></StyledBtn>
        <p>
          By clicking “Post Your Answer”, you agree to our terms of service,
          privacy policy and cookie policy
        </p>
      </PostBtnWrap>
    </Wrapper>
  );
}
