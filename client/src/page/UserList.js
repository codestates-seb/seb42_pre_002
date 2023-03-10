import axios from 'axios';
import { useEffect, useState } from 'react';
import UserInfo from '../components/userList/UserInfo';
import styled from 'styled-components';
import search from '../esset/search.svg';

const UserListContainer = styled.div`
  width: 100%;
  > h1 {
    margin-bottom: 24px;
    line-height: 1.3;
    margin: 0 0 1em;
    font-size: 2.07692308rem;
    font-weight: 500;
  }
`;
const Input = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid hsl(210, 8%, 75%);
  background-color: white;
  margin-bottom: 12px;
  position: relative;

  &.focus {
    border: 1px solid hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 4px rgba(0, 116, 204, 0.15);
  }

  > input {
    width: 90%;
    height: 100%;
    /* margin: 0 10px; */
    border: none;
    outline: none;
    &::placeholder {
      color: hsl(210, 8%, 80%);
    }
  }
  > img {
    width: 18px;
    height: 18px;
    margin: 7px;
  }
`;

const FManu = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-left: auto;
`;

const Button = styled.button`
  padding: 12px;
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
  padding: 12px;
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
  padding: 12px;
  font-size: 12px;
  background-color: ${(props) =>
    props.color === 'true' ? 'hsl(210, 8%, 90%)' : 'hsl(210, 8%, 97.5%)'};
  color: hsl(210, 8%, 35%);
  border: 1px solid hsl(210, 8%, 55%);
  margin: -1px;
  cursor: pointer;
`;

const UserInfoHeader = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`;

const UserInfoFilter = styled.div`
  margin-bottom: 12px;
  margin-top: 8px;
  > div {
    display: flex;
    justify-content: space-between;
    > div {
      margin-left: auto;
      > div {
        float: right;
        display: flex;
      }
    }
  }
`;

const Filter = styled.div`
  margin-left: 2px;
  padding: 8px;
  border: 1px solid transparent;
  font-size: 12px;
  line-height: calc((13 + 12) / 13);
  cursor: pointer;
  border-bottom-color: ${(props) =>
    props.filter === 'true' ? 'hsl(27, 90%, 55%)' : 'transparent'};
`;

const UserListBodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Page = styled.div`
  margin: 40px 0;
  display: flex;
  gap: 4px;
`;

const PageButton = styled.span`
  padding: 0 8px;
  border: 1px solid rgb(214, 217, 220);
  font-size: 13px;
  border-radius: 3px;
  line-height: calc((13 + 12) / 13);
  cursor: pointer;
  background-color: ${(props) =>
    props.pick === 'true' ? 'rgb(244, 130, 37)' : 'transparent'};
  color: ${(props) => (props.pick === 'true' ? 'white' : 'black')};
`;

const UserList = () => {
  const [user, setUser] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);
  const [isButton, setButton] = useState('Reputation');
  const [isFilter, setFilter] = useState('week');
  const [isPage, setIsPage] = useState(1);
  const [manyPage, setManyPage] = useState(true);
  const [nowPage, setNowPage] = useState('1');

  const inputFocusHandler = () => setInputFocus(!inputFocus);

  const buttonClick = (e) => {
    setButton(e.target.textContent);
  };

  const filterButtonClick = (e) => {
    setFilter(e.target.textContent);
  };

  useEffect(() => {
    axios
      .get(
        // eslint-disable-next-line
        `${process.env.REACT_APP_URL}/members?page=${isPage}&size=5`
      )
      .then((res) => {
        console.log(res.data);
        setUser(res.data.data);
        setIsPage(res.data.pageInfo.totalPages);
        if (res.data.pageInfo.totalPages <= 5) {
          setManyPage(true);
        } else {
          setManyPage(false);
        }
      })
      .catch((err) => console.log(Error, err));
  }, []);

  const pageButtonClick = (e) => {
    setNowPage(e.target.textContent);
    setIsPage(e.target.textContent);
    axios
      .get(
        // eslint-disable-next-line
        `${process.env.REACT_APP_URL}/questions/latest/?page=${isPage}&size=5`
      )
      .then((res) => {
        setUser(res.data.data);
        setIsPage(res.data.pageInfo.totalPages);
        if (res.data.pageInfo.totalPages <= 5) {
          setManyPage(true);
        } else {
          setManyPage(false);
        }
      })
      .catch((err) => console.log(Error, err));
  };

  const pages = [];
  if (isPage <= 5) {
    for (let i = 0; i < isPage; i++) {
      pages.push(i + 1);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      pages.push(i + 1);
    }
  }

  return (
    <UserListContainer>
      <h1>Users</h1>
      <UserInfoHeader>
        <Input className={inputFocus ? 'focus' : ''}>
          <img src={search} alt="?????????"></img>
          <input
            placeholder="Filter by user"
            onFocus={inputFocusHandler}
            onBlur={inputFocusHandler}
          ></input>
        </Input>
        <FManu>
          <Lbutton color={`${isButton === 'Reputation'}`} onClick={buttonClick}>
            Reputation
          </Lbutton>
          <Button color={`${isButton === 'New users'}`} onClick={buttonClick}>
            New users
          </Button>
          <Button color={`${isButton === 'Vorers'}`} onClick={buttonClick}>
            Vorers
          </Button>
          <Button color={`${isButton === 'Editors'}`} onClick={buttonClick}>
            Editors
          </Button>
          <Rbutton color={`${isButton === 'Moderators'}`} onClick={buttonClick}>
            Moderators
          </Rbutton>
        </FManu>
      </UserInfoHeader>
      <UserInfoFilter>
        <div>
          <div>
            <div>
              <Filter
                filter={`${isFilter === 'week'}`}
                role="presentation"
                onClick={filterButtonClick}
              >
                week
              </Filter>
              <Filter
                filter={`${isFilter === 'month'}`}
                role="presentation"
                onClick={filterButtonClick}
              >
                month
              </Filter>
              <Filter
                filter={`${isFilter === 'quarter'}`}
                role="presentation"
                onClick={filterButtonClick}
              >
                quarter
              </Filter>
              <Filter
                filter={`${isFilter === 'year'}`}
                role="presentation"
                onClick={filterButtonClick}
              >
                year
              </Filter>
              <Filter
                filter={`${isFilter === 'all'}`}
                role="presentation"
                onClick={filterButtonClick}
              >
                all
              </Filter>
            </div>
          </div>
        </div>
      </UserInfoFilter>
      <UserListBodyContainer>
        {user.map((el, idx) => {
          return <UserInfo el={el} key={idx} />;
        })}
      </UserListBodyContainer>
      <Page>
        {pages.map((el, idx) => {
          return (
            <PageButton
              role="presentation"
              pick={`${nowPage === `${el}`}`}
              onClick={pageButtonClick}
              key={idx}
            >
              {el}
            </PageButton>
          );
        })}
        {manyPage ? (
          ''
        ) : (
          <>
            <span>{`... `}</span>
            <PageButton>next</PageButton>
          </>
        )}
      </Page>
    </UserListContainer>
  );
};

export default UserList;
