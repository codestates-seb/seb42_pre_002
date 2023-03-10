import styled from 'styled-components/macro';
import worldicon from '../esset/worldicon.svg';
import staricon from '../esset/start.svg';
import worrieicon from '../esset/worried.svg';
import navImg from '../esset/navimg.png';

import { useLocation, useNavigate } from 'react-router-dom';

const NavContainer = styled.nav`
  /* height: 160px; */
  /* position: sticky; */
  /* top: 50px; */
  width: 100%;
  /* z-index: 10; */
  margin-top: 20px;
`;

const MenuContainer = styled.ul`
  all: unset;
  flex-direction: column;
  /* width: 164px; */
`;

const NavMenu = styled.li`
  all: unset;
  align-items: center;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  color: rgb(81, 81, 81);
  display: flex;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 34px;
  /* width: 164px; */
  > span {
    cursor: pointer;
  }
  > :hover {
    color: rgb(0, 0, 0);
  }
  &.choosePage {
    background-color: rgb(241, 242, 243);
    border-right: 3px solid rgb(244, 130, 36);
    font-weight: bold;
  }
`;

const MenuPublic = styled.li`
  all: unset;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  color: rgb(81, 81, 81);
  display: flex;
  font-size: 11px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 34px;
  padding-left: 10px;
  /* width: 164px; */
`;

const PUBLIC = styled.span`
  /* font-weight: bold; */
`;

const NavImg = styled.img`
  margin-right: 4px;
`;

const Nimg = styled.img`
  width: ${(props) => (props.page.navi ? '164px' : '100%')};
  border: ${(props) =>
    props.page.navi ? '1px solid hsl(210, 8%, 85%)' : 'none'};
  border-right: none;
  padding: ${(props) => (props.page.navi ? '10px' : '16px 32px 0')};
`;

export default function Nav({ page }) {
  const navigate = useNavigate();
  const curruntPath = useLocation().pathname;

  return (
    <NavContainer>
      <MenuContainer>
        <MenuPublic>
          <PUBLIC>PUBLIC</PUBLIC>
        </MenuPublic>
        <NavMenu
          className={curruntPath === '/' ? 'choosePage' : null}
          css={`
            padding-left: 7px;
          `}
          onClick={() => navigate('/')}
        >
          <NavImg src={worldicon} alt="?????????" />
          <span>Questions</span>
        </NavMenu>
        <NavMenu
          className={curruntPath === '/tags' ? 'choosePage' : null}
          css={`
            padding-left: 30px;
          `}
          onClick={() => navigate('/tags')}
        >
          <span>Tags</span>
        </NavMenu>
        <NavMenu
          className={curruntPath === '/mypage' ? 'choosePage' : null}
          css={`
            padding-left: 30px;
          `}
          onClick={() => navigate('/userList')}
        >
          <span>Users</span>
        </NavMenu>
        <NavMenu
          className={curruntPath === '/companies' ? 'choosePage' : null}
          css={`
            padding-left: 30px;
            margin-bottom: 15px;
          `}
          onClick={() => navigate('/companies')}
        >
          <span>Companies</span>
        </NavMenu>
        <MenuPublic
          css={`
            justify-content: space-between;
          `}
        >
          <span>COLLECTIVES</span>
          <NavImg
            src={worrieicon}
            alt="?????????"
            css={`
              padding-right: 12px;
            `}
          />
        </MenuPublic>
        <NavMenu
          className={curruntPath === '/none' ? 'choosePage' : null}
          css={`
            padding-left: 7px;
          `}
          onClick={() => navigate('/none')}
        >
          <NavImg src={staricon} alt="???" />
          <span>Explore Collectives</span>
        </NavMenu>
        <MenuPublic>
          <span>TEAMS</span>
        </MenuPublic>
        <Nimg src={navImg} alt="?????????" page={page} />
      </MenuContainer>
    </NavContainer>
  );
}
