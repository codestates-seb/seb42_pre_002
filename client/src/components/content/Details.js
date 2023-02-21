import styled from 'styled-components';
import DetailLeftBar from './DetailLeftBar';
import DetailContents from './DetailContents';

import MDEditor from '@uiw/react-md-editor';

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid #e3e6e8;

  > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 680px;
    padding-top: 8px;
    > :nth-child(1) {
      font-size: 15px;
    }
  }
  > :last-child {
    > span {
      padding: 0 3px 2px;
      color: #838c95;

      &:hover {
        color: #0a95ff;
      }
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
        <div className="container" data-color-mode="light">
          <MDEditor.Markdown
            source={curQuestion.contents}
            style={{ whiteSpace: 'pre-wrap' }}
          />
        </div>
        <DetailContents
          curQuestion={curQuestion}
          askOrAnswer={askOrAnswer}
        ></DetailContents>
      </GridCell>
      <GridCell column="2">
        <span>Add a comment</span>
      </GridCell>
    </DetailWrapper>
  );
};

export default Details;
