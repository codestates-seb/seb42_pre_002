import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentQuest } from '../redux/action/contentAction';
import styled from 'styled-components';
import axios from 'axios';

import Loading from '../components/content/Loading';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > :last-child {
    width: 300px;
  }
`;

const DetailAndAnswer = styled.div`
  width: 450px;
  flex: 1 1 auto;
`;

export default function Content({ setPage }) {
  const Title = lazy(() => import('../components/content/Title'));
  const Details = lazy(() => import('../components/content/Details'));
  const AnswerPart = lazy(() => import('../components/content/AnswerPart'));

  const curQuestion = useSelector((state) => state.curQuestReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage({ navi: true, foot: true });
    axios
      .get('http://localhost:3001/question')
      .then((res) => {
        dispatch(addCurrentQuest(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Suspense fallback={<Loading></Loading>}>
        <Title curQuestion={curQuestion} />
        <DetailWrapper>
          <DetailAndAnswer>
            <Details curQuestion={curQuestion} askOrAnswer="asked"></Details>
            <AnswerPart></AnswerPart>
          </DetailAndAnswer>
          <div></div>
        </DetailWrapper>
      </Suspense>
    </Wrapper>
  );
}
