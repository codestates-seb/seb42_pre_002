import styled from 'styled-components';
import DetailLeftBar from './DetailLeftBar';
import DetailContents from './DetailContents';

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  width: 100%;

  > :nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 680px;
    padding-top: 8px;
    > :nth-child(1) {
      font-size: 15px;
    }
  }
`;

const GridCell = styled.div`
  grid-column: ${(props) => props.column};
`;

const Details = ({ curQuestion, askOrAnswer }) => {
  return (
    <DetailWrapper>
      <GridCell column="1">
        <DetailLeftBar></DetailLeftBar>
      </GridCell>
      <GridCell column="2">
        <div>{curQuestion.contents}</div>
        <DetailContents
          curQuestion={curQuestion}
          askOrAnswer={askOrAnswer}
        ></DetailContents>
      </GridCell>
      <GridCell column="2">Add a comment</GridCell>
    </DetailWrapper>
  );
};

export default Details;
