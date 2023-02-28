import styled from 'styled-components';
import Tag from './Tag';

const ListBox = styled.div`
  padding: 16px;
  flex: 1 auto;
  width: 100%;
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
  flex-wrap: wrap;
  align-items: center;
  row-gap: 8px;
  column-gap: 6px;
`;

const TagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  line-height: 18px;
  float: left;

  > ul {
    list-style: none;
    margin-bottom: 1em;
    display: flex;
  }
`;

const UserDiv = styled.div`
  flex-wrap: wrap;
  justify-content: flex-end;
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 4px;
  line-height: 1;
`;

const UserImgDiv = styled.div`
  width: 16px;
  height: 16px;
  overflow: hidden;
  padding: 0;
  > img {
    border-radius: 3px;
    height: 16px;
    width: 16px;
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  > div {
    font-size: 12px;
    white-space: nowrap;
    align-items: center;
    display: flex;
    min-width: 0;
    overflow-wrap: break-word;
    margin: -2px;
    > div {
      margin: 2px;
      color: rgb(0, 116, 204);
      text-decoration: none;
      cursor: pointer;
    }
  }
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    display: flex;
    gap: 6px;
    > li {
      font-size: 12px;
      font-weight: 700;
    }
  }
`;

const UserTime = styled.div`
  white-space: nowrap;
  font-size: 12px;
  > span {
    text-decoration: none;
    white-space: nowrap;
  }
`;

export default function Footer({ el }) {
  return (
    <ListBox>
      <SubBox>
        <div>
          <span>0</span>
          <span>votes</span>
        </div>
        <div>
          <span>{el.answers.length}</span>
          <span>answers</span>
        </div>
        <div>
          <span>{el.viewCnt}</span>
          <span>views</span>
        </div>
      </SubBox>
      <MainBox>
        <h3>
          <a href={`https://localhost:3000/content/${el.questionId}`}>
            {el.title}
          </a>
        </h3>
        <MainBody>{el.problemContent}</MainBody>
        <UserBox>
          <TagDiv>
            <ul>
              {el.questionTags.map((el) => (
                <Tag key={el.tagId} text={el.title} />
              ))}
            </ul>
          </TagDiv>
          <UserDiv>
            <UserImgDiv>
              <img
                src="https://picsum.photos/16/16/?random"
                alt="userImg"
              ></img>
            </UserImgDiv>
            <UserName>
              <div>
                <div>
                  <div>{el.nickname}</div>
                </div>
              </div>
              <ul>
                <li>
                  <span>7,956</span>
                </li>
              </ul>
            </UserName>
            <UserTime>
              asked{' '}
              <span>
                {/*Jun 6, 2017 at 18:54*/}
                {new Date(el.regDate).toLocaleString()}
              </span>
            </UserTime>
          </UserDiv>
        </UserBox>
      </MainBox>
    </ListBox>
  );
}
