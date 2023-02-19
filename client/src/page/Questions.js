import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import filter from '../esset/filter.svg';
import pencil from '../esset/pencil.svg';
import textbox from '../esset/textbox.svg';
import stack from '../esset/stack.svg';
import List from '../components/Questions/List';

const Main = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 324px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-right: 24px;
  width: 100%;
`;

const Ad = styled.div`
  width: 298px;

  > ul {
    list-style-type: disc;
    list-style: none;
    background-color: hsl(47, 87%, 94%);
    border: 1px solid hsl(47, 65%, 84%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-bottom: 16px;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
  }
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
  margin-bottom: 12px;
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
`;

const Button = styled.button`
  padding: 9.6px;
  font-size: 12px;
  background-color: ${(props) =>
    props.color === 'true' ? 'hsl(210, 8%, 90%)' : 'hsl(210, 8%, 97.5%)'};
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
`;

const Lbutton = styled.button`
  border-radius: 3px 0 0 3px;
  padding: 9.6px;
  font-size: 12px;
  background-color: ${(props) =>
    props.color === 'true' ? 'hsl(210, 8%, 90%)' : 'hsl(210, 8%, 97.5%)'};
  color: hsl(210, 8%, 35%);
  border: 1px solid hsl(210, 8%, 55%);
  margin: -1px;
  cursor: pointer;
`;

const Rbutton = styled.button`
  border-radius: 0 3px 3px 0;
  padding: 9.6px;
  font-size: 12px;
  background-color: ${(props) =>
    props.color === 'true' ? 'hsl(210, 8%, 90%)' : 'hsl(210, 8%, 97.5%)'};
  color: hsl(210, 8%, 35%);
  border: 1px solid hsl(210, 8%, 55%);
  margin: -1px;
  cursor: pointer;
`;

const AllQuestions = styled.div`
  margin-left: -24px;
  border-top: 1px solid hsl(210, 8%, 85%);
  width: 100%;
`;

const TLi = styled.li`
  padding: 12px 15px;
  background-color: hsl(47, 83%, 91%);
  border-bottom: 1px solid hsl(47, 65%, 84%);
  font-size: 12px;
  font-weight: bold;
`;

const CLi = styled.li`
  display: flex;
  margin: 12px 0;
  padding: 0 16px;
  clear: both;
  > div {
    > div {
      color: hsl(210, 8%, 35%);
      width: 244px;
      cursor: pointer;
      overflow-wrap: break-word;
    }
  }
`;

const Img = styled.div`
  width: 22px;
`;

export default function Questions({ setPage }) {
  const [isButton, setButton] = useState('Newest');
  const navigate = useNavigate();

  useEffect(() => {
    setPage({ navi: true, foot: true });
  }, []);

  const buttonClick = (e) => {
    setButton(e.target.textContent);
  };

  return (
    <Main>
      <Content>
        <QHeader>
          <div>All Questions</div>
          <button
            onClick={() => {
              navigate('/ask');
            }}
          >
            Ask Question
          </button>
        </QHeader>
        <Filter>
          <FTotal>
            {/*data ? `${data.length} questions` :*/ '0 questions'}
          </FTotal>
          <FFilter>
            <FManu>
              <Lbutton color={`${isButton === 'Newest'}`} onClick={buttonClick}>
                Newest
              </Lbutton>
              <Button color={`${isButton === 'Active'}`} onClick={buttonClick}>
                Active
              </Button>
              <Button
                color={`${isButton === 'Bountied281'}`}
                onClick={buttonClick}
              >
                Bountied<span>{`281`}</span>
              </Button>
              <Button
                color={`${isButton === 'Unanswered'}`}
                onClick={buttonClick}
              >
                Unanswered
              </Button>
              <Rbutton
                color={`${isButton === 'More ▼'}`}
                onClick={buttonClick}
              >{`More ▼`}</Rbutton>
            </FManu>
            <button>
              <img src={filter} alt="filter" />
              {` Filter`}
            </button>
          </FFilter>
        </Filter>
        <AllQuestions>
          {/*data.map(el=>)*/}
          <List />
        </AllQuestions>
      </Content>
      <Ad>
        <ul>
          <TLi>The Overflow Blog</TLi>
          <CLi>
            <Img>
              <img src={pencil} alt="pencil" />
            </Img>
            <div>
              <div>
                Monitoring debt builds up faster than software teams can pay it
                off
              </div>
            </div>
          </CLi>
          <CLi>
            <Img>
              <img src={pencil} alt="pencil" />
            </Img>
            <div>
              <div>
                Because the only thing worse than building internal tools is
                maintaining them...
              </div>
            </div>
          </CLi>
          <TLi>Featured on Meta</TLi>
          <CLi>
            <Img>
              <img src={textbox} alt="textbox" />
            </Img>
            <div>
              <div>Ticket smash for [status-review] tag: Part Deux</div>
            </div>
          </CLi>
          <CLi>
            <Img>
              <img src={textbox} alt="textbox" />
            </Img>
            <div>
              <div>
                {`We've added a "Necessary cookies only" option to the cookie consent
            popup`}
              </div>
            </div>
          </CLi>
          <CLi>
            <Img>
              <img src={stack} alt="stack" />
            </Img>
            <div>
              <div>
                We’ve made changes to our Privacy Notice for Collectives™
              </div>
            </div>
          </CLi>
          <CLi>
            <Img>
              <img src={stack} alt="stack" />
            </Img>
            <div>
              <div>The [amazon] tag is being burninated</div>
            </div>
          </CLi>
          <CLi>
            <Img>
              <img src={stack} alt="stack" />
            </Img>
            <div>
              <div>
                Microsoft Azure Collective launch and proposed tag changes
              </div>
            </div>
          </CLi>
          <CLi>
            <Img>
              <img src={stack} alt="stack" />
            </Img>
            <div>
              <div>Temporary policy: ChatGPT is banned</div>
            </div>
          </CLi>
        </ul>
      </Ad>
    </Main>
  );
}
