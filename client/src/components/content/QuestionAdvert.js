import styled from 'styled-components';
import pencil from '../../esset/pencil.svg';
import textbox from '../../esset/textbox.svg';
import stack from '../../esset/stack.svg';

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

const QuestionAdvert = () => {
  return (
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
            <div>We’ve made changes to our Privacy Notice for Collectives™</div>
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
  );
};

export default QuestionAdvert;
