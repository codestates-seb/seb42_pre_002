import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Details from './Details';
import AnswerCreate from './AnswerCreate';

const AnswerSort = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 10px;

  > :nth-child(1) {
    flex: 1 0 auto;
    font-size: 19px;
    font-weight: 600;
    color: #232629;
  }

  > :nth-child(2) {
    > select {
      width: 260px;
      height: 32.5px;
      padding: 0 32px 0 9px;
      border-radius: 3px;
      color: #0c0d0e;
      border: 1px solid #babfc4;
    }
  }
`;

const AnswerPart = () => {
  const cur = useSelector((state) => state.curQuestReducer);

  return (
    <>
      <AnswerSort>
        <div>{cur.answer.length} Answer</div>
        <div>
          <span>Sorted by: </span>
          <select>
            <option value="score">Highest score</option>
            <option value="modified">Date modified</option>
            <option value="created">Date created</option>
          </select>
        </div>
      </AnswerSort>
      {cur.answer.map((x) => {
        return <Details key={x.rid} curData={x}></Details>;
      })}
      <AnswerCreate></AnswerCreate>
    </>
  );
};

export default AnswerPart;
