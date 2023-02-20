import styled from 'styled-components';
import UserCard from './UserCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
  padding: 4px 0 0;

  > :nth-child(1) {
    display: flex;
    gap: 16px;

    > span {
      cursor: pointer;
      color: #6a737c;
      &:hover {
        color: #838c95;
      }
    }
  }

  > :nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export default function DetailContents({ curQuestion, askOrAnswer }) {
  return (
    <Wrapper>
      <div>
        <span>Share</span>
        <span>Edit</span>
        <span>Follow</span>
      </div>
      <div>
        {curQuestion.edit && (
          <UserCard types="edited" user="someone"></UserCard>
        )}
        <UserCard
          types={askOrAnswer}
          user={curQuestion.author}
          time={new Date(curQuestion.createdAt)}
        ></UserCard>
      </div>
    </Wrapper>
  );
}
