import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import UserInfo from '../components/mypage/UserInfo';
import UserDetails from '../components/mypage/UserDetails';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { addUserInfo } from '../redux/action/contentAction';

const NavTab = styled.div`
  display: flex;
  padding: 2px 0;
  gap: 4px;
  margin-top: 10px;
  margin-bottom: 16px;

  > span {
    font-size: 13px;
    padding: 6px 12px;
    border-radius: 1000px;
    color: #525960;
    cursor: pointer;

    &:hover {
      background-color: #e3e6e8;
    }

    &.selected {
      color: #ffffff;
      background-color: #f48225;

      &:hover {
        background-color: #da680b;
      }
    }
  }
`;

const Mypage = ({ setPage }) => {
  const [selected, setSelected] = useState('Profile');

  const rerender = useSelector((state) => state.onRerenderReducer);

  const dispatch = useDispatch();

  const { memberId } = useParams();

  useEffect(() => {
    setPage((prev) =>
      prev.navi !== true || prev.foot !== true
        ? { navi: true, foot: true }
        : prev
    );

    axios
      // eslint-disable-next-line
      .get(`${process.env.REACT_APP_URL}/members/${memberId}`, {
        headers: { 'ngrok-skip-browser-warning': '124' },
      })
      .then((res) => {
        console.log(res);
        dispatch(addUserInfo(res.data.data));
      })
      .catch((err) => console.log(err));
  }, [rerender]);

  return (
    <>
      <UserInfo setSelected={setSelected}></UserInfo>
      <NavTab>
        <span
          className={selected === 'Profile' ? 'selected' : ''}
          onClick={(e) => setSelected(e.target.textContent)}
          role="presentation"
        >
          Profile
        </span>
        <span
          className={selected === 'Settings' ? 'selected' : ''}
          onClick={(e) => setSelected(e.target.textContent)}
          role="presentation"
        >
          Settings
        </span>
      </NavTab>
      <UserDetails curMenu={selected} setSelected={setSelected}></UserDetails>
    </>
  );
};

export default Mypage;
