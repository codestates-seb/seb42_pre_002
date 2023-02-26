// import { useState } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import ValidationInput from '../ValidationInput';
import StyledBtn from '../content/StyledBtn';

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
  const [nick, setNick] = useState('');
  const [nickValid, setnickValid] = useState(true);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
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
          validFn={() => true}
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
        ></ValidationInput>
      </FormDiv>
      <StyledBtn
        title="Save profile"
        width="94px"
        height="38px"
        onClick={() => console.log('submit clicked')}
      ></StyledBtn>
      <CancleBtn onClick={() => setSelected('Profile')}>Cancel</CancleBtn>
    </Wrapper>
  );
};

export default EditProfile;
