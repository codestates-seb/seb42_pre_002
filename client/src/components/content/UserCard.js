import styled, { css } from 'styled-components';

const UserCardWrap = styled.div`
  width: 200px;
  height: 67px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px 6px 7px 7px;
  border-radius: 3px;
  background-color: ${(props) =>
    props.types === 'asked' ? 'rgb(217,234,247)' : 'none'};
`;

const StyledSpan = styled.span`
  font-size: 13px;
  ${(props) =>
    props.types === 'hover'
      ? css`
          color: #0074cc;
          &:hover {
            color: #0a95ff;
          }
        `
      : css`
          color: #6a737c;
        `};
`;

const UserName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 3px;
  }
`;

const UserCard = ({ types, user, time }) => {
  return (
    <UserCardWrap types={types}>
      <StyledSpan>
        {types +
          ' ' +
          (time
            ? `${time.toDateString().slice(4)} at ${time
                .toTimeString()
                .slice(0, 5)}`
            : '')}
      </StyledSpan>
      <UserName>
        <img src="https://picsum.photos/32/32/?random" alt="userImg" />
        <StyledSpan types="hover">{user}</StyledSpan>
      </UserName>
    </UserCardWrap>
  );
};

export default UserCard;
