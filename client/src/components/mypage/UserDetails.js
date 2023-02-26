import styled, { css } from 'styled-components';

import Status from './Status';
import EditProfile from './EditProfile';
import EditNav from './EditNav';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  > :nth-child(1) {
    flex-basis: 25%;
    /* padding-right: 32px; */

    ${(props) =>
      props.curMenu === 'Profile'
        ? css`
            padding: 12px;
          `
        : css`
            flex-basis: calc(25% - 25px);
            padding-right: 32px;
          `}
  }
  > :nth-child(2) {
    flex-grow: 1;
  }
`;

const UserDetails = ({ curMenu, setSelected }) => {
  return (
    <Wrapper curMenu={curMenu}>
      <div>{curMenu === 'Profile' ? <Status /> : <EditNav />}</div>
      <div>
        {curMenu === 'Settings' && <EditProfile setSelected={setSelected} />}
      </div>
    </Wrapper>
  );
};

export default UserDetails;
