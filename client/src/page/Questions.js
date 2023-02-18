import { useEffect } from 'react';
import styled from 'styled-components';
import filter from '../esset/filter.svg';

const Main = styled.div`
  display: flex;
  height: 100%;
  padding: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-right: 24px;
`;

const Ad = styled.div`
  width: 298px;
`;

const QHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  > div {
    flex: 1 auto;
    font-size: 2.07692308rem;
    margin-bottom: 12px;
    margin-right: 12px;
  }
  > button {
    border: 1px solid transparent;
    background-color: hsl(206, 100%, 52%);
    border: 1px solid hsl(206, 100%, 52%);
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
    color: hsl(0, 0%, 100%);
    padding: 10.4px;
    border-radius: 3px;
    font-weight: 100;
    margin-bottom: 12px;
    &:hover {
      background-color: hsl(206, 100%, 40%);
      cursor: pointer;
    }
  }
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    padding: 9.6px;
    font-size: 12px;
    color: #39739d;
    background-color: hsl(205, 46%, 92%);
    border: 1px solid hsl(205, 41%, 63%);
    color: hsl(205, 47%, 42%);
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
    border-radius: 3px;
    &:hover {
      background-color: hsl(205, 57%, 81%);
      cursor: pointer;
    }
  }
`;

const FTotal = styled.div`
  flex: 1 auto;
  margin-right: 12px;
  font-size: 1.30769231rem;
`;

const FManu = styled.div`
  display: flex;
  margin-right: 16px;
  > button {
    padding: 9.6px;
    font-size: 12px;
    background-color: hsl(210, 8%, 97.5%);
    color: hsl(210, 8%, 35%);
    border: 1px solid hsl(210, 8%, 55%);
    margin: -1px;
    cursor: pointer;
    > span {
      padding: 0 4px;
      margin-left: 4px;
      font-size: 11px;
      background-color: #0074cc;
      color: white;
      border-radius: 3px;
    }
  }
`;

const Lbutton = styled.div`
  border-radius: 3px 0 0 3px;
  padding: 9.6px;
  font-size: 12px;
  background-color: hsl(210, 8%, 97.5%);
  color: hsl(210, 8%, 35%);
  border: 1px solid hsl(210, 8%, 55%);
  margin: -1px;
  cursor: pointer;
`;

const Rbutton = styled.div`
  border-radius: 0 3px 3px 0;
  padding: 9.6px;
  font-size: 12px;
  background-color: hsl(210, 8%, 97.5%);
  color: hsl(210, 8%, 35%);
  border: 1px solid hsl(210, 8%, 55%);
  margin: -1px;
  cursor: pointer;
`;

export default function Questions({ setPage }) {
  useEffect(() => {
    setPage({ navi: true, foot: true });
  }, []);

  return (
    <Main>
      <Content>
        <QHeader>
          <div>All Questions</div>
          <button>Ask Question</button>
        </QHeader>
        <Filter>
          <FTotal>
            {/*data ? `${data.length} questions` :*/ '0 questions'}
          </FTotal>
          <FFilter>
            <FManu>
              <Lbutton>Newest</Lbutton>
              <button>Active</button>
              <button>
                Bountied<span>{`281`}</span>
              </button>
              <button>Unanswered</button>
              <Rbutton>{`More ▼`}</Rbutton>
            </FManu>
            <button>
              <img src={filter} alt="filter" />
              {` Filter`}
            </button>
          </FFilter>
        </Filter>
        <div>{/*data.map(el=>)*/}</div>
      </Content>
      <Ad>
        <div>The Overflow Blog</div>
        <div>Collectives</div>
      </Ad>
    </Main>
  );
}
