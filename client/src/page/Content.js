import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentQuest } from '../redux/action/contentAction';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Loading from '../components/content/Loading';
import QuestionAdvert from '../components/QuestionAdvert';

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
  flex: 1 0 auto;
  margin-right: 16px;
`;

export default function Content({ setPage }) {
  const Title = lazy(() => import('../components/content/Title'));
  const Details = lazy(() => import('../components/content/Details'));
  const AnswerPart = lazy(() => import('../components/content/AnswerPart'));

  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line
  const { questionId } = useParams();
  const curQuestion = useSelector((state) => state.curQuestReducer);
  const onRerender = useSelector((state) => state.onRerenderReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage((prev) =>
      prev.navi !== true || prev.foot !== true
        ? { navi: true, foot: true }
        : prev
    );

    axios
      // eslint-disable-next-line
      .get(`${process.env.REACT_APP_URL}/questions/${questionId}`)
      .then((res) => {
        dispatch(addCurrentQuest(res.data.data));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [onRerender]);

  return (
    <Wrapper>
      <Suspense fallback={<Loading></Loading>}>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <>
            <Title />
            <DetailWrapper>
              <DetailAndAnswer>
                <Details curData={curQuestion}></Details>
                <AnswerPart></AnswerPart>
              </DetailAndAnswer>
              <div>
                <QuestionAdvert />
              </div>
            </DetailWrapper>
          </>
        )}
      </Suspense>
    </Wrapper>
  );
}
