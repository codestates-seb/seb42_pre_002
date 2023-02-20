import { useEffect, useState } from 'react';
import styled from 'styled-components';
import spotPencil from '../esset/spotPencil.svg';
import MDEditor from '@uiw/react-md-editor';

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
  background-image: url(../esset/background.svg);
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
  > button {
    border: 1px solid transparent;
    background-color: hsl(206, 100%, 52%);
    border: 1px solid hsl(206, 100%, 52%);
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
    color: hsl(0, 0%, 100%);
    padding: 0.8em;
    &:hover {
      background-color: hsl(206, 100%, 40%);
      cursor: pointer;
    }
    margin: 0 10px 0 4px;
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
    outline: none;
    &::placeholder {
      color: hsl(210, 8%, 80%);
    }
    &.focus {
      border: 1px solid hsl(206, 90%, 69.5%);
      box-shadow: 0px 0px 0px 4px rgba(0, 116, 204, 0.15);
    }
  }
`;

const TitleHelp = styled.div`
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 3px;
  width: 28.5%;
  height: 151px;
`;

const HelpTitle = styled.div`
  font-size: 1.15384615rem;
  padding: 12px;
  background-color: hsl(210, 8%, 97.5%);
  border-bottom: 1px solid hsl(210, 8%, 85%);
  gap: 16px;
`;

const HelpBody = styled.div`
  display: flex;
  margin: 16px;
  gap: 16px;
`;

const HelpImg = styled.div`
  margin: 8px;
  gap: 16px;
  > img {
    vertical-align: bottom;
    overflow-clip-margin: content-box;
    overflow: hidden;
    box-sizing: inherit;
  }
`;

const BodyContent = styled.div`
  margin: 0 16px;
  font-size: 12px;
  > p {
    clear: both;
    margin-bottom: 1em;
    margin-top: 0;
    font-size: 10.5px;
  }
`;

const SContent = styled.p`
  margin-bottom: 0;
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;
  gap: 16px;
  align-self: start;
`;

const WriteBodyContainer = styled.div`
  width: 70%;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid hsl(210, 8%, 90%);
  > div {
    padding: 24px;
    gap: 16px;
    > div {
      display: flex;
      flex-direction: column;
      margin: -2px 0;
    }
    > button {
      border: 1px solid transparent;
      background-color: hsl(206, 100%, 52%);
      border: 1px solid hsl(206, 100%, 52%);
      border-radius: 3px;
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
      color: hsl(0, 0%, 100%);
      padding: 0.8em;
      &:hover {
        background-color: hsl(206, 100%, 40%);
        cursor: pointer;
      }
      margin: 0 10px 0 4px;
    }
  }
`;

const LabelDiv = styled.div`
  margin: 2px 0;
  height: 40px;
  > label {
    cursor: pointer;
    font-size: 1.15384615rem;
    font-weight: 600;
    padding: 0 2px;
    > p {
      font-weight: normal;
      padding: 0;
      /* margin-bottom: px; */
      margin-top: 2px;
      font-size: 12px;
    }
  }
`;

const EditorDiv = styled.div`
  margin-bottom: 5px;
`;

export default function Ask({ setPage }) {
  const [inputFocus, setInputFocus] = useState(false);
  const inputFocusHandler = () => setInputFocus(!inputFocus);
  const [value, setValue] = useState('');

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
                    className={inputFocus ? 'focus' : ''}
                    name="title"
                    type="text"
                    maxLength="300"
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    onFocus={inputFocusHandler}
                    onBlur={inputFocusHandler}
                  ></input>
                </IDiv>
              </div>
            </div>
            <button>Next</button>
          </RTDiv>
          <TitleHelp>
            <HelpTitle>Writing a good title</HelpTitle>
            <HelpBody>
              <HelpImg>
                <img src={spotPencil} alt="spotPencil" />
              </HelpImg>
              <BodyContent>
                <p>Your title should summarize the problem.</p>
                <SContent>
                  You might find that you have a better idea of your title after
                  writing out the rest of the question.
                </SContent>
              </BodyContent>
            </HelpBody>
          </TitleHelp>
        </TConstainer>
        <BodyContainer>
          <WriteBodyContainer>
            <div>
              <div>
                <LabelDiv>
                  <label htmlFor="problem-details">
                    What are the details of your problem
                    <p>
                      Introduce the problem and expand on what you put in the
                      title. Minimum 20 characters.
                    </p>
                  </label>
                </LabelDiv>
                <EditorDiv id="problem-details" data-color-mode="light">
                  <MDEditor value={value} onChange={setValue} preview="edit" />
                </EditorDiv>
              </div>
              <button>Next</button>
            </div>
          </WriteBodyContainer>
          <TitleHelp>
            <HelpTitle>Introduce the problem</HelpTitle>
            <HelpBody>
              <HelpImg>
                <img src={spotPencil} alt="spotPencil" />
              </HelpImg>
              <BodyContent>
                <p>
                  Explain how you encountered the problem you’re trying to
                  solve, and any difficulties that have prevented you from
                  solving it yourself.
                </p>
              </BodyContent>
            </HelpBody>
          </TitleHelp>
        </BodyContainer>
        <div>Tags</div>
        <div>
          Review questions already on Stack Overflow to see if your question is
          a duplicate
        </div>
      </div>
    </Container>
  );
}
