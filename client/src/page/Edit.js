import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MDEditor from '@uiw/react-md-editor';

import Advert from '../components/Advert';
import { useSelector } from 'react-redux';

const PageWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  > :nth-child(1) {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  > :last-child {
    width: 300px;
  }
`;

const Suggest = styled.div`
  margin-right: 16px;
  padding: 24px;
  border-radius: 3px;
  background-color: hsl(47, 87%, 94%);
  border: 1px solid hsl(47, 65%, 84%);
`;

const Edit = ({ setPage }) => {
  const { edittype } = useParams();

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
  const state = useSelector((state) => state.curQuestReducer);
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setPage({ navi: true, foot: true });
    if (edittype === 'question') {
      setTitle(state.title);
      setQuestion(state.contents);
      setContent(state.contents);
    } else {
      setQuestion(state.content);
      setContent(state.reply[0].contents);
    }
    console.log(edittype);
  }, []);

  return (
    <PageWrap>
      <div>
        <Suggest>
          <p>Your edit will be placed in a queue until it is peer reviewed.</p>
          <p>{title}</p>
          <p>{content}</p>
          <p>
            We welcome edits that make the post easier to understand and more
            valuable for readers. Because community members review edits, please
            try to make the post substantially better than now you round it. for
            example. by fixing arammar or addina additional resources and
            hyperlinks.
          </p>
        </Suggest>
        <MDEditor.Markdown
          source={question}
          style={{ whiteSpace: 'pre-wrap' }}
        />
        {/* {edittype === 'question' && (
          
        )} */}
      </div>

      <div>
        <Advert title={sidebar[0].title} list={sidebar[0].content}></Advert>
        <Advert title={sidebar[1].title} list={sidebar[0].content}></Advert>
      </div>
    </PageWrap>
  );
};

export default Edit;
