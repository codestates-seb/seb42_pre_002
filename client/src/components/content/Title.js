import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import StyledBtn from './StyledBtn';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;

  > h1 {
    display: block;
    width: 450px;
    font-size: 2rem;
    font-weight: normal;
    flex: 1 1 auto;
  }

  > :nth-child(2) {
    margin-left: 12px;
  }
`;

const QuestInfo = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;

  > div {
    margin: 0 16px 8px 0;
  }
`;

const StyledSpan = styled.span`
  color: #6a737c;
`;

const Title = () => {
  const curQuestion = useSelector((state) => state.curQuestReducer);
  const navigate = useNavigate();

  return (
    <>
      <TitleWrapper>
        <h1>{curQuestion.title}</h1>

        <StyledBtn
          title="Ask Question"
          width="103px"
          height="38px"
          onClick={() => navigate('/ask')}
        ></StyledBtn>
      </TitleWrapper>
      <QuestInfo>
        <div>
          <StyledSpan>Asked</StyledSpan> {curQuestion.regDate.slice(0, 10)}
        </div>
        <div>
          <StyledSpan>Modified</StyledSpan> {curQuestion.modDate.slice(0, 10)}
        </div>
        <div>
          <StyledSpan>Viewed</StyledSpan> {curQuestion.viewCnt}
        </div>
      </QuestInfo>
    </>
  );
};

export default Title;
