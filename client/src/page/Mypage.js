import { useEffect, useState } from 'react';
import styled from 'styled-components';

import UserInfo from '../components/mypage/UserInfo';
import UserDetails from '../components/mypage/UserDetails';

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

  useEffect(() => {
    setPage((prev) =>
      prev.navi !== true || prev.foot !== true
        ? { navi: true, foot: true }
        : prev
    );
  });

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
