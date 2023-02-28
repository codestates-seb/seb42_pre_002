// import { useState } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import ValidationInput from '../ValidationInput';
import StyledBtn from '../content/StyledBtn';
import { useSelector, useDispatch } from 'react-redux';
import { onRerender } from '../../redux/action/contentAction';

import axios from 'axios';

const Wrapper = styled.div`
  > div {
    width: 100%;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #d6d9dc;
    > h1 {
      color: #0c0d0e;
      font-size: 27px;
    }
  }
`;

const StyledH3 = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 6px;
`;

const FormDiv = styled.div`
  border: 1px solid #e3e6e8;
  padding: 24px;
  > img {
    border-radius: 3px;
  }
`;

const CancleBtn = styled.button`
  background-color: inherit;
  border: none;
  color: #0074cc;
  padding: 10px;
  margin: 0 4px;

  & :hover {
    color: #0063bf;
    background-color: #f0f8ff;
  }
`;

const EditProfile = ({ setSelected }) => {
  const userInfo = useSelector((state) => state.userInfoReducer);
  const dispatch = useDispatch();

  const [nick, setNick] = useState(userInfo.nickname);
  const [nickValid, setnickValid] = useState(true);
  const [email, setEmail] = useState(userInfo.email);
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState(userInfo.password);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleSubmit = () => {
    if (nickValid && emailValid && passwordValid) {
      const data = {
        email,
        nickname: nick,
        password,
      };

      axios
        .patch(`http://localhost:3001/members/${userInfo.memberId}`, data)
        .then(() => {
          dispatch(onRerender({}));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Wrapper>
      <div>
        <h1>Edit your profile</h1>
      </div>
      <FormDiv>
        <StyledH3>Profile image</StyledH3>
        <img src="https://picsum.photos/164/164/?random" alt="userImg" />
        <StyledH3>Diaplay name</StyledH3>
        <ValidationInput
          valid={nickValid}
          setValid={setnickValid}
          value={nick}
          setValue={setNick}
          validFn={() => false}
          errMsg="Not Valid Nickname"
        ></ValidationInput>
        <StyledH3>Email</StyledH3>
        <ValidationInput
          valid={emailValid}
          setValid={setEmailValid}
          value={email}
          setValue={setEmail}
          validFn={() => false}
          errMsg="Not Valid Email"
        ></ValidationInput>
        <StyledH3>Password</StyledH3>
        <ValidationInput
          valid={passwordValid}
          setValid={setPasswordValid}
          value={password}
          setValue={setPassword}
          validFn={() => false}
          errMsg="Not Valid Password"
          type="password"
        ></ValidationInput>
      </FormDiv>
      <StyledBtn
        title="Save profile"
        width="94px"
        height="38px"
        onClick={handleSubmit}
      ></StyledBtn>
      <CancleBtn onClick={() => setSelected('Profile')}>Cancel</CancleBtn>
    </Wrapper>
  );
};

export default EditProfile;
