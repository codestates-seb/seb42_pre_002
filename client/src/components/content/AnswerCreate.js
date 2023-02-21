import styled from 'styled-components';
import AnswerCreator from './AnswerCreator';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > :nth-child(1) {
    padding-top: 8px;
    margin-top: 15px;

    > span {
      font-size: 17px;
      font-weight: 400;
    }
  }
  > :nth-child(2) {
    padding-top: 20px;
    margin-bottom: 1em;

    > span {
      font-size: 19px;
      font-weight: 400;
      line-height: 1.3;
    }
  }

  > :nth-child(3) {
  }
`;

const AnswerCreate = () => {
  return (
    <Wrapper>
      <div>
        <span>
          Know someone who can answer? Share a link to this question via email,
          Twitter, or Facebook.
        </span>
      </div>
      <div>
        <span>Your Answer</span>
      </div>
      <AnswerCreator></AnswerCreator>
    </Wrapper>
  );
};

export default AnswerCreate;
