import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleDiv = styled.div`
  font-size: 21px;
  margin-bottom: 8px;
  color: #232629;
`;

const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #d6d9dc;
  border-radius: 5px;

  > div {
    flex-basis: 50%;
    padding: 8px;
    color: #6a737c;
    display: flex;
    flex-direction: column;

    > :nth-child(1) {
      color: #0c0d0e;
      font-size: 17px;
    }
  }
`;

const Status = () => {
  const list = ['reputation', 'reached', 'answers', 'questions'];
  return (
    <Wrapper>
      <TitleDiv>Stats</TitleDiv>
      <GridWrap>
        {list.map((x, idx) => {
          return (
            <div key={idx}>
              <span>0</span>
              <span>{x}</span>
            </div>
          );
        })}
      </GridWrap>
    </Wrapper>
  );
};

export default Status;
