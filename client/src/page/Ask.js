import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  > div {
    min-height: 750px;
    overflow: visible;
    width: 100%;
    max-width: 1264px;
    padding: 0 24px;
  }
`;

const EContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  height: 130px;
  width: 100%;
  background-image: url('../esset/background.svg');
  background-repeat: no-repeat;
  background-position: right bottom;
  display: flex;
  align-items: center;
  > h1 {
    font-weight: 550;
    font-size: 2.07692308rem;
  }
`;

const Etitle = styled.div`
  width: 70%;
  padding: 24px;
  background-color: hsl(205, 46%, 92%);
  border-radius: 3px;
  border: 1px solid hsl(205, 57%, 81%);
  > h2 {
    font-weight: 400;
    font-size: 1.61538462rem;
    margin-bottom: 8px;
    line-height: 1.3;
    margin: 0 0 1em;
  }
  > p {
    font-size: 1.15384615rem;
  }
  > div {
    font-weight: 600;
    margin-top: 1em;
    margin-bottom: 8px;
  }
  > ul {
    list-style-type: disc;
    margin-left: 30px;
  }
`;

const TConstainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

const RTDiv = styled.div`
  width: 70%;
  padding: 24px;
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(210, 8%, 90%);
  border-radius: 3px;
  > div {
    display: flex;
    flex-direction: column;
    margin: 1px 0;
  }
`;

const TDiv = styled.div`
  margin: 2px 0;
  display: flex;
  flex-direction: column;
  > div {
    > label {
      cursor: pointer;
      font-size: 1.15384615rem;
      font-weight: 600;
      padding: 0 2px;
    }
    > div {
      margin: 2px 0;
      flex-basis: 75%;
      padding: 0 2px;

      > label {
        gap: 16px;
        font-size: 12px;
      }
    }
  }
`;

const IDiv = styled.div`
  margin: 5px 0;
  position: relative;
  display: flex;
  gap: 16px;
  > input {
    width: 100%;
    padding: 0.6em 0.7em;
    margin: 0;
    font-size: 13px;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    &::placeholder {
      color: hsl(210, 8%, 80%);
    }
  }
`;

export default function Ask({ setPage }) {
  useEffect(() => {
    setPage({ navi: false, foot: true });
  }, []);
  return (
    <Container>
      <div>
        <EContainer>
          <Title>
            <h1>Ask a public question</h1>
          </Title>
          <Etitle>
            <h2>Writing a good question</h2>
            <p>
              You’re ready to ask a programming-related question and this form
              will help guide you through the process.
            </p>
            <p>
              Looking to ask a non-programming question? See the topics here to
              find a relevant site.
            </p>
            <div>Steps</div>
            <ul>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>
                Add “tags” which help surface your question to members of the
                community.
              </li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </Etitle>
        </EContainer>
        <TConstainer>
          <RTDiv>
            <div>
              <div>
                <TDiv>
                  <div>
                    <label htmlFor="title">Title</label>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="title">
                        Be specific and imagine you’re asking a question to
                        another person.
                      </label>
                    </div>
                  </div>
                </TDiv>
                <IDiv>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    maxLength="300"
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  ></input>
                </IDiv>
              </div>
            </div>
            <button>Next</button>
          </RTDiv>
          <div>Writing a good title</div>
        </TConstainer>
        <div>What are the details of your problem</div>
        <div>Tags</div>
        <div>
          Review questions already on Stack Overflow to see if your question is
          a duplicate
        </div>
      </div>
    </Container>
  );
}
