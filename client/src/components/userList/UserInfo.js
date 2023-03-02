import styled from 'styled-components';

const UserInfoContainer = styled.div`
  margin-bottom: 12px;
  display: flex;
  width: 33%;
`;
const UserInfoImgContainer = styled.div`
  padding: 5px 6px 7px 7px;
  > div {
    width: 48px;
    height: 48px;
    > div {
      cursor: pointer;
      > div {
        width: 48px;
        height: 48px;
        border-radius: 2px;
        > img {
          border-radius: 3px;
        }
      }
    }
  }
`;

const UserInfoBodyContainer = styled.div`
  margin-left: 9px;
  width: calc(100% - 64px);
  line-height: 1.3;
  word-wrap: break-word;
  font-size: 1.15384615rem;
  > span {
    margin-bottom: 2px;
  }
`;

const UserInfoNickname = styled.div`
  font-size: 1.15384615rem;
  color: hsl(206, 100%, 40%);
  text-decoration: none;
  cursor: pointer;
`;

const UserInfoScore = styled.div`
  line-height: 1;
  margin-bottom: 4px;
  > span {
    font-weight: bold;
    font-size: 12px;
    margin-right: 2px;
  }
`;

const UserInfoStack = styled.div`
  display: flex;
  margin-left: 5px;
  > div {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    font-size: 11px;
    margin-left: 4px;
  }
`;

const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserInfo = ({ el }) => {
  console.log(el);
  return (
    <UserInfoContainer>
      <UserInfoImgContainer>
        <div>
          <div>
            <div>
              <img src="https://picsum.photos/48/48/?random" alt="userImg" />
            </div>
          </div>
        </div>
      </UserInfoImgContainer>
      <UserInfoDiv>
        <UserInfoBodyContainer>
          <UserInfoNickname>{el.nickname}</UserInfoNickname>
          <span></span>
          <UserInfoScore>
            <span>100</span>
          </UserInfoScore>
        </UserInfoBodyContainer>
        <UserInfoStack>
          <div>kotlin</div>
          <div>android</div>
          <div>list</div>
        </UserInfoStack>
      </UserInfoDiv>
    </UserInfoContainer>
  );
};

export default UserInfo;
