import styled from 'styled-components';
import Tag from './Tag';

const ListBox = styled.div`
  padding: 16px;
  height: 158px;
  background-color: unset;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  display: flex;
`;

const SubBox = styled.div`
  margin: 0 16px 4px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-shrink: 0;
  font-size: 13px;
  align-items: flex-end;
  width: 96px;
  gap: 6px;
  > div {
    align-items: center;
    justify-content: center;
    gap: 0.3em;
    display: inline-flex;
    white-space: normal;
  }
`;

const MainBox = styled.div`
  flex: 1;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;

  > h3 {
    font-weight: 400;
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin-bottom: 0.3846rem;
    margin-top: -0.15rem;
    padding-right: 24px;
    line-height: 17/13;
    > a {
      color: hsl(209, 100%, 37.5%);
      cursor: pointer;
      user-select: auto;
      font-size: 1.30769231rem;
      hyphens: auto;
      text-decoration-line: none;
    }
  }
`;

const MainBody = styled.div`
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  margin-top: -2px;
  margin-bottom: 8px;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  > ul {
    list-style: none;
    margin-bottom: 1em;
    display: flex;
  }
  > div {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export default function Footer() {
  return (
    <ListBox>
      <SubBox>
        <div>
          <span>0</span>
          <span>votes</span>
        </div>
        <div>
          <span>0</span>
          <span>answers</span>
        </div>
        <div>
          <span>0</span>
          <span>views</span>
        </div>
      </SubBox>
      <MainBox>
        <h3>
          <a href="https://stackoverflow.com/questions/75497611/rust-macro-how-to-concat-two-variables-like-string">
            Rust macro: how to concat two variables like string?
          </a>
        </h3>
        <MainBody>
          {`I want to write a macro to support parameterized tests, and got the following code from AI, but got errors on one line: #[macro_export] macro_rules! parameterize { ($name:ident, $params:pat, {$($...`}
        </MainBody>
        <UserBox>
          <ul>
            <Tag text={'javaScript'} />
            <Tag text={'google-play'} />
          </ul>
          <div>nick name + asked time</div>
        </UserBox>
      </MainBox>
    </ListBox>
  );
}
