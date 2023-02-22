import { useEffect } from 'react';
import styled from 'styled-components';

import notFound from '../esset/notFound.svg';

const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 710px;
  height: 243px;

  display: flex;

  color: #232629;

  > img {
    width: 196px;
    height: 196px;
    margin: -32px 16px 0;
  }

  > div {
    margin: 16px;
    > h1 {
      font-size: 27px;
      margin-bottom: 4px;
    }

    > p {
      font-size: 15px;
      margin-bottom: 15px;
    }

    > :nth-child(2) {
      font-size: 19px;
      margin-bottom: 19px;
    }
  }
`;

const NotFound = ({ setPage }) => {
  useEffect(() => {
    setPage({ navi: false, foot: false });
  }, []);
  return (
    <Wrap>
      <ContentWrap>
        <img src={notFound} alt="404" />
        <div>
          <h1>Page not found</h1>
          <p>
            We&#39;re sorry&#44; we couldn&#39;t find the page you
            requested&#46;
          </p>
          <p>Try searching for similar questions</p>
          <p>Browse our recent questions</p>
          <p>Browse our popular tags</p>
          <p>
            If you feel something is missing that should be here&#44; contact
            us&#46;
          </p>
        </div>
      </ContentWrap>
    </Wrap>
  );
};

export default NotFound;
