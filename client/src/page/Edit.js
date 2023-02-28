import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import MDEditor from '@uiw/react-md-editor';

import StyledBtn from '../components/content/StyledBtn';
import Advert from '../components/Advert';
import ValidationInput from '../components/ValidationInput';

import { useDispatch, useSelector } from 'react-redux';
import { delCurrentAnswer } from '../redux/action/contentAction';

const PageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  > :nth-child(1) {
    margin-right: 16px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  > :last-child {
    width: 300px;
  }

  h1 {
    font-size: 19px;
    font-weight: 600;
    color: #232629;
    margin: 16px 0;
  }
`;

const Preview = styled.div`
  padding: 24px 10px 10px;
`;

const Suggest = styled.div`
  padding: 24px;
  border-radius: 3px;
  background-color: hsl(47, 87%, 94%);
  border: 1px solid hsl(47, 65%, 84%);
  color: #3b4045;
  > p {
    font-size: 13px;
  }
`;

const EditorWrap = styled.div`
  margin: 10px 0;
`;

const BtnWrapper = styled.div`
  margin-top: 16px;
  button {
    margin: 0 4px;
  }

  > :nth-child(2) {
    color: #0074cc;
    width: 64.5px;
    height: 37.5px;
    border: none;
    background-color: inherit;

    &:hover {
      color: #0063bf;
    }
  }
`;
const StyledH3 = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 6px;
`;

const Edit = ({ setPage }) => {
  const { edittype } = useParams();
  const navigate = useNavigate();

  const sidebar = [
    {
      title: 'How to Edit',
      content: [
        'Correct minor typos or mistakes',
        'Clarity meaning without changing it',
        'Add related resources or links',
        "Always respect the author's intent",
        "Don't use edits to reply to the author",
      ],
    },
    {
      title: 'How to Format',
      content: [
        'create code fences with backticks" or tildes ~',
        'add language identifier to highlight code',
        'put returns between paragraphs',
        'for linebreak add 2 spaces at end',
        '_italic_ or **bold**',
        'indent code by 4 spaces',
        'quote by placing > at start of line',
        'to make links (use https whenever possible)',
      ],
    },
  ];

  const questState = useSelector((state) => state.curQuestReducer);
  const ansState = useSelector((state) => state.curAnsReducer);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setPage((prev) =>
      prev.navi !== true || prev.foot !== true
        ? { navi: true, foot: true }
        : prev
    );
    if (edittype === 'question') {
      setTitle(questState.title);
      setContent(questState.problemContent);
    } else {
      setContent(ansState.content);
    }
    console.log(edittype);
  }, []);

  const editSubmit = () => {
    if (valid === false) return;
    if (edittype === 'question') {
      const data = {
        memberId: 1,
        nickname: 'test',
        title: title,
        problemContent: content,
        expectContent: 'questionTest1134',
        questionTags: [
          {
            title: 'python',
          },
        ],
      };
      axios
<<<<<<< HEAD
        .patch(
          // eslint-disable-next-line
          `${process.env.REACT_APP_URL}/questions/${questState.questionId}`,
          data,
          {
            headers: { 'ngrok-skip-browser-warning': '124' },
          }
        )
=======
        // eslint-disable-next-line
        .patch(`${process.env.REACT_APP_URL}/question`, data)
>>>>>>> fdebb1f1fa683a6ced6b4bc19b0a9bc1365f7367
        .then(() => navigate(-1))
        .catch((err) => console.log(err));
    } else {
      const data = {
        answerId: ansState.answerId,
        memberId: 1,
        nickname: 'test',
        questionId: questState.questionId,
        content: content,
      };
      axios
<<<<<<< HEAD
        .patch(
          // eslint-disable-next-line
          `${process.env.REACT_APP_URL}/answers/${ansState.answerId}`,
          data,
          {
            headers: { 'ngrok-skip-browser-warning': '124' },
          }
        )
=======
        // eslint-disable-next-line
        .patch(`${process.env.REACT_APP_URL}/question`, data)
>>>>>>> fdebb1f1fa683a6ced6b4bc19b0a9bc1365f7367
        .then(() => {
          dispatch(delCurrentAnswer());
          navigate(-1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <PageWrap>
      <div>
        <Suggest>
          <p>Your edit will be placed in a queue until it is peer reviewed.</p>
          <br></br>
          <p>
            We welcome edits that make the post easier to understand and more
            valuable for readers. Because community members review edits, please
            try to make the post substantially better than now you round it. for
            example. by fixing arammar or addina additional resources and
            hyperlinks.
          </p>
        </Suggest>

        {edittype === 'answer' ? (
          <>
            <Preview className="container" data-color-mode="light">
              {/* <MDEditor value={content} onChange={setContent} preview="edit" /> */}
              <MDEditor.Markdown
                source={questState.problemContent}
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </Preview>
            <h1>Answer</h1>
          </>
        ) : (
          <>
            <StyledH3>Title</StyledH3>
            <ValidationInput
              value={title}
              setValue={setTitle}
              valid={valid}
              setValid={setValid}
              validFn={() => title.length < 15}
              errMsg="Title must be at least 15 characters."
            ></ValidationInput>
          </>
        )}
        <EditorWrap>
          {edittype === 'question' && <StyledH3>Body</StyledH3>}
          <div className="container" data-color-mode="light">
            <MDEditor value={content} onChange={setContent} preview="edit" />

            <Preview className="container" data-color-mode="light">
              {/* <MDEditor value={content} onChange={setContent} preview="edit" /> */}
              <MDEditor.Markdown
                source={content}
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </Preview>
          </div>
        </EditorWrap>
        <BtnWrapper>
          <StyledBtn
            title="Save edits"
            width="85px"
            height="37.5px"
            onClick={editSubmit}
          ></StyledBtn>
          <button onClick={() => navigate(-1)}>Cancel</button>
        </BtnWrapper>
      </div>
      {/*side bar */}
      <div>
        <Advert title={sidebar[0].title} list={sidebar[0].content}></Advert>
        <Advert title={sidebar[1].title} list={sidebar[0].content}></Advert>
      </div>
    </PageWrap>
  );
};

export default Edit;
