import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleCopyClipBoard = async (x) => {
    try {
      await navigator.clipboard.writeText(x);
      console.log('copied');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div>
        <span
          role="presentation"
          onClick={() => handleCopyClipBoard(window.location.href)}
        >
          Share
        </span>
        <span
          role="presentation"
          onClick={() =>
            curQuestion.reply
              ? navigate('/edit/question')
              : navigate('/edit/answer')
          }
        >
          Edit
        </span>
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
