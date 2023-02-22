import { useDispatch } from 'react-redux';
import { addCurrentAnswer } from '../../redux/action/contentAction';
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
  const dispatch = useDispatch();

  const handleCopyClipBoard = async (x) => {
    try {
      await navigator.clipboard.writeText(x);
      console.log('copied');
    } catch (error) {
      console.log(error);
    }
  };

  const editBtnHandler = () => {
    if (askOrAnswer === 'answered') {
      dispatch(addCurrentAnswer(curQuestion));
      navigate('/edit/answer');
    } else {
      navigate('/edit/question');
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
        <span role="presentation" onClick={editBtnHandler}>
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