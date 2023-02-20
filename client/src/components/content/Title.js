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

  const getDateDiff = (d1) => {
    const date1 = new Date();
    const date2 = new Date(d1);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.floor(diffDate / (1000 * 60 * 60 * 24));
  };

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
          <StyledSpan>Asked</StyledSpan>{' '}
          {getDateDiff(curQuestion.createdAt) + ' ' + 'day ago'}
        </div>
        <div>
          <StyledSpan>Modified</StyledSpan> today
        </div>
        <div>
          <StyledSpan>Viewed</StyledSpan> 4 times
        </div>
      </QuestInfo>
    </>
  );
};

export default Title;
