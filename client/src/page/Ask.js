import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import spotPencil from '../esset/spotPencil.svg';
import MDEditor from '@uiw/react-md-editor';
import spotBell from '../esset/spotBell.svg';
import arrowupalt from '../esset/arrowupalt.svg';
import background from '../esset/background.svg';
import Tag from '../components/questions/Tag';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  margin-bottom: 48px;
`;

const ContainerDiv = styled.div`
  min-height: 750px;
  overflow: visible;
  width: 100%;
  max-width: 1264px;
  padding: 0 24px;
`;

const EContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
`;

const Title = styled.div`
  height: 130px;
  width: 100%;
  background-image: url(${background});
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
  margin-top: 16px;
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
    > a {
      text-decoration: none;
      cursor: pointer;
      color: hsl(206, 100%, 40%);
    }
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
  overflow: hidden;
`;

const WriteBodyContent = styled.div`
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
  margin-bottom: 10px;
  margin-top: 3px;
  border: 2px solid hsl(210, 8%, 90%);
  border-radius: 2px;
  &.focus {
    border: 2px solid hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 5px rgba(0, 116, 204, 0.15);
  }
`;

const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  gap: 16px;
  align-items: flex-start;
`;

const TagsBody = styled.div`
  width: 70%;
  border: 1px solid hsl(210, 8%, 90%);
  border-radius: 3px;
  > div {
    padding: 24px 8px;
    > button {
      margin-left: 16px;
      margin-top: 16px;
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
    }
    > div {
      gap: 16px;
      > div {
        margin: 0 16px;
      }
    }
  }
`;

const TagsLabelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > label {
    cursor: pointer;
    margin-bottom: 4px;
    flex: 1 auto;
    font-size: 1.15384615rem;
    font-weight: 600;
    padding: 0 2px;
    > div {
      font-weight: normal;
      margin-top: 2px;
      font-size: 12px;
    }
  }
`;

const InputContainer = styled.div`
  > div {
    padding: 2px 9.1px 2px 2px;
    cursor: text;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    min-height: 37px;
    display: flex;
    &.focus {
      border: 1px solid hsl(206, 90%, 69.5%);
      box-shadow: 0px 0px 0px 4px rgba(0, 116, 204, 0.15);
    }
    > span {
      display: flex;
    }
    > input {
      width: 19px;
      min-width: 100%;
      padding-left: calc(0.7em - 2px);
      height: 29px;
      border: none;
      outline: none;
      &::placeholder {
        color: hsl(210, 8%, 80%);
      }
    }
  }
`;

const TagBodyContent = styled(TitleHelp)`
  height: 215px;
`;

const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  gap: 16px;
  align-items: flex-start;
`;

const ReviewContent = styled.div`
  width: 70%;
  border: 1px solid hsl(210, 8%, 90%);
  > div {
    padding: 24px;
    > div {
      display: flex;
      gap: 16px;
      flex-direction: column;
      > div {
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
        }
      }
    }
  }
`;

const ReviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -2px 0;
  > div {
    margin: 2px 0;
  }
`;

const ReviewTextTitle = styled.p`
  margin-bottom: 2px;
  font-size: 1.15384615rem;
  font-weight: 600;
  padding: 0 2px;
`;

const ReviewTextT = styled.p`
  padding: 0 2px;
  font-size: 12px;
`;

const ReviewBodyContainer = styled.div`
  display: flex;
  margin-bottom: -1px;
  flex-direction: column;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  > button {
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: 12px 16px;
    gap: 4px;
    align-items: center;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid hsl(210, 8%, 85%);
  }
  > div {
    max-height: 210.67px;
    overflow: auto;
    gap: 16px;
    > div {
      > p {
        text-align: center;
        font-size: 13px;
        margin: 16px;
      }
    }
  }
`;

const ReviewBodyTitle = styled.div`
  text-align: left;
  font-size: 1.15384615rem;
`;

const ReviewBodyTitleSvg = styled.div`
  margin-left: auto;
  > div {
    cursor: pointer;
    gap: 4px;
    > img {
      vertical-align: bottom;
    }
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  margin: 12px;
  > button {
    border: 1px solid transparent;
    background-color: hsl(206, 100%, 52%);
    border: 1px solid hsl(206, 100%, 52%);
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
    color: hsl(0, 0%, 100%);
    padding: 0.8em;
    margin: 0 12px;
    &:hover {
      background-color: hsl(206, 100%, 40%);
      cursor: pointer;
    }
  }
  > div {
    margin: 0 8px;
    > button {
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 3px;
      box-shadow: none;
      color: hsl(358, 62%, 47%);
      font-size: 13px;
      padding: 0.8em;
      font-weight: normal;
      cursor: pointer;
      line-height: calc(15 / 13);
      outline: none;
      text-align: center;
      text-decoration: none;
      &:hover {
        background-color: hsl(358, 75%, 97%);
      }
    }
  }
`;

const ReBodyContent = styled(TitleHelp)`
  height: 180px;
`;

export default function Ask({ setPage }) {
  const [inputFocus, setInputFocus] = useState({
    title: false,
    body: false,
    tags: false,
  });
  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState('');
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const titleButton = useRef(null);
  const titleHelp = useRef(null);
  const bodyButton = useRef(null);
  const bodyHelp = useRef(null);
  const tagsButton = useRef(null);
  const tagsHelp = useRef(null);
  const reviewButton = useRef(null);
  const reviewHelp = useRef(null);
  const submitButton = useRef(null);
  const bodyBlock = useRef(null);
  const tagsBlock = useRef(null);
  const reviewBlock = useRef(null);

  const inputFocusHandler = () => {
    const copy = { ...inputFocus };
    copy.title = !copy.title;
    setInputFocus(copy);
  };

  const editorFocusHandler = () => {
    const copy = { ...inputFocus };
    copy.body = !copy.body;
    setInputFocus(copy);
  };

  const tagsFocusHandler = () => {
    const copy = { ...inputFocus };
    copy.tags = !copy.tags;
    setInputFocus(copy);
  };

  const titleButtonHandler = () => {
    titleButton.current.classList.add('hiden');
    titleHelp.current.classList.add('hiden');
    bodyButton.current.classList.remove('hiden');
    bodyHelp.current.classList.remove('hiden');
    bodyBlock.current.classList.remove('block');
  };

  const bodyButtonHandler = () => {
    if (value.length >= 20) {
      bodyButton.current.classList.add('hiden');
      bodyHelp.current.classList.add('hiden');
      tagsButton.current.classList.remove('hiden');
      tagsHelp.current.classList.remove('hiden');
      tagsBlock.current.classList.remove('block');
    }
  };

  const tagsButtonHandler = () => {
    tagsButton.current.classList.add('hiden');
    tagsHelp.current.classList.add('hiden');
    reviewButton.current.classList.remove('hiden');
    reviewHelp.current.classList.remove('hiden');
    reviewBlock.current.classList.remove('block');
  };

  const reviewButtonHandler = () => {
    reviewButton.current.classList.add('hiden');
    reviewHelp.current.classList.add('hiden');
    submitButton.current.classList.remove('hiden');
  };

  const TagsAddHandler = (e) => {
    if (e.key === 'Enter') {
      const copy = [...tags];
      copy.push({ title: inputValue });
      setTags(copy);
      console.log(tags);
      setInputValue('');
    }
  };

  const tagsDeleteHandler = (idx) => {
    const copy = [...tags];
    const filtered = copy.filter((el, indx) => idx !== indx);
    setTags(filtered);
  };

  const discardClickHandler = () => {
    setInputValue('');
    setInputFocus({
      title: false,
      body: false,
      tags: false,
    });
    setTags([]);
    setValue('');
    window.location.reload();
  };

  useEffect(() => {
    setPage({ navi: false, foot: true });
  }, []);

  const handleClick = () => {
    const data = {
      memberId: 1,
      nickname: 'dd',
      title,
      problemContent: value,
      expectContent: '',
      viewCnt: 0,
      questionStatus: 'QUESTION_POSTIONG',
      questionTags: tags,
    };
    console.log(data);
    axios
      .post(
        // eslint-disable-next-line
        `/questions`,
        data,
        { headers: { 'ngrok-skip-browser-warning': '122' } }
      )
      .then((res) => {
        console.log(res.status);
        navigate('/');
      })
      .catch((err) => console.log(Error, err));
  };

  return (
    <Container>
      <ContainerDiv>
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
                    className={inputFocus.title ? 'focus' : ''}
                    name="title"
                    type="text"
                    maxLength="300"
                    value={title}
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    onChange={(e) => setTitle(e.target.value)}
                    onFocus={inputFocusHandler}
                    onBlur={inputFocusHandler}
                  ></input>
                </IDiv>
              </div>
            </div>
            <button ref={titleButton} onClick={titleButtonHandler}>
              Next
            </button>
          </RTDiv>
          <TitleHelp ref={titleHelp}>
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
            <WriteBodyContent className="block" ref={bodyBlock}>
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
                <EditorDiv
                  id="problem-details"
                  data-color-mode="light"
                  className={inputFocus.body ? 'focus' : ''}
                  onFocus={editorFocusHandler}
                  onBlur={editorFocusHandler}
                >
                  <MDEditor value={value} onChange={setValue} preview="edit" />
                </EditorDiv>
              </div>
              <button
                className="hiden"
                ref={bodyButton}
                onClick={bodyButtonHandler}
              >
                Next
              </button>
            </WriteBodyContent>
          </WriteBodyContainer>
          <TitleHelp className="hiden" ref={bodyHelp}>
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
        <TagsContainer>
          <TagsBody>
            <div className="block" ref={tagsBlock}>
              <div>
                <div>
                  <TagsLabelDiv>
                    <label htmlFor="tageditor-replacing-tagnames--input">
                      Tags
                      <div>
                        Add up to 5 tags to describe what your question is
                        about. Start typing to see suggestions.
                      </div>
                    </label>
                  </TagsLabelDiv>
                  <InputContainer>
                    <div
                      className={inputFocus.tags ? 'focus' : ''}
                      onFocus={tagsFocusHandler}
                      onBlur={tagsFocusHandler}
                    >
                      <span>
                        {tags.length === 0
                          ? ''
                          : tags.map((el, idx) => (
                              <Tag
                                key={idx}
                                text={el.title}
                                boolean={true}
                                tagsDeleteHandler={tagsDeleteHandler}
                                idx={idx}
                              />
                            ))}
                      </span>
                      <input
                        id="tageditor-replacing-tagnames--input"
                        placeholder="e.g. (ajax iphone string)"
                        value={inputValue}
                        onKeyUp={TagsAddHandler}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                        }}
                      ></input>
                    </div>
                  </InputContainer>
                </div>
              </div>
              <button
                className="hiden"
                ref={tagsButton}
                onClick={tagsButtonHandler}
              >
                Next
              </button>
            </div>
          </TagsBody>
          <TagBodyContent className="hiden" ref={tagsHelp}>
            <HelpTitle>Adding tags</HelpTitle>
            <HelpBody>
              <HelpImg>
                <img src={spotPencil} alt="spotPencil" />
              </HelpImg>
              <BodyContent>
                <p>
                  Tags help ensure that your question will get attention from
                  the right people.
                </p>
                <p>
                  Tag things in more than one way so people can find them more
                  easily. Add tags for product lines, projects, teams, and the
                  specific technologies or languages used.
                </p>
                <p>
                  <a href="https://stackoverflow.com/help/tagging">
                    Learn more about tagging
                  </a>
                </p>
              </BodyContent>
            </HelpBody>
          </TagBodyContent>
        </TagsContainer>
        <ReviewContainer>
          <ReviewContent>
            <div className="block" ref={reviewBlock}>
              <div>
                <ReviewTextContainer>
                  <div>
                    <ReviewTextTitle>
                      Review questions already on Stack Overflow to see if your
                      question is a duplicate.
                    </ReviewTextTitle>
                    <ReviewTextT>
                      Clicking on these questions will open them in a new tab
                      for you to review. Your progress here will be saved so you
                      can come back and continue.
                    </ReviewTextT>
                  </div>
                </ReviewTextContainer>
                <div>
                  <ReviewBodyContainer>
                    <button>
                      <ReviewBodyTitle>
                        Do any of these posts answer your question?
                      </ReviewBodyTitle>
                      <ReviewBodyTitleSvg>
                        <div>
                          <img src={arrowupalt} alt="arrowupalt" />
                        </div>
                      </ReviewBodyTitleSvg>
                    </button>
                    <div>
                      <div>
                        <p>No duplicate questions found.</p>
                      </div>
                    </div>
                  </ReviewBodyContainer>
                </div>
                <div>
                  <button
                    className="hiden"
                    ref={reviewButton}
                    onClick={reviewButtonHandler}
                  >
                    Review your question
                  </button>
                </div>
              </div>
            </div>
          </ReviewContent>
          <ReBodyContent className="hiden" ref={reviewHelp}>
            <HelpTitle>
              Make sure we don’t already have an answer for your question
            </HelpTitle>
            <HelpBody>
              <HelpImg>
                <img src={spotBell} alt="spotBell" />
              </HelpImg>
              <BodyContent>
                <p>Stack Overflow is a huge database of knowledge.</p>
                <SContent>
                  Please make sure your question isn’t already answered before
                  posting, or your question might be closed as a duplicate.
                </SContent>
              </BodyContent>
            </HelpBody>
          </ReBodyContent>
        </ReviewContainer>
      </ContainerDiv>
      <SubmitContainer>
        <button onClick={handleClick} className="hiden" ref={submitButton}>
          Post your question
        </button>
        <div>
          <button onClick={discardClickHandler}>Discard draft</button>
        </div>
      </SubmitContainer>
    </Container>
  );
}
