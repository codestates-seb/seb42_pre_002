import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Questions from './page/Questions';
import Ask from './page/Ask';
import Content from './page/Content';
import Edit from './page/Edit';
import Login from './page/Login';
import Signup from './page/Signup';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import styled from 'styled-components';
import NotFound from './page/NotFound';
import Mypage from './page/Mypage';
// import LoginSuccess from './page/LoginSuccess';
// import UserList from './page/UserList';

const Body = styled.div`
  /* position: fixed; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  /* overflow: auto; */
`;

const Head = styled.div`
  position: sticky;
  top: 0;
  height: 50px;
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-top: 3px solid #f48255;
  z-index: 1000;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  position: relative;
  /* z-index: -11; */
`;

const Foot = styled.div`
  display: ${(props) => (props.page.foot ? 'block' : 'none')};
`;

const Nv = styled.div`
  position: sticky;
  top: 50px;
  display: ${(props) => (props.page.navi ? 'block' : 'none')};
  width: 164px;
  height: 100%;
`;

const Page = styled.div`
  max-width: ${(props) => (props.page.navi ? '1100px' : '100%')};
  background-color: hsl(0, 0%, 100%);
  border: ${(props) =>
    props.page.navi ? '1px solid hsl(210, 8%, 85%)' : 'none'};
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  width: ${(props) => (props.page.navi ? 'calc(100% - 164px)' : '100%')};
  margin: 0 auto;
  padding: ${(props) => (props.page.navi ? '24px' : 'none')};
  /* z-index: -10; */
`;

function App() {
  const [page, setPage] = useState({ navi: true, foot: true });
  return (
    <BrowserRouter>
      <Body>
        <Head>
          <Header page={page} />
        </Head>
        <Main>
          <Nv page={page}>
            <Nav page={page} />
          </Nv>
          <Page page={page}>
            <Routes>
              <Route path="/" element={<Questions setPage={setPage} />} />
              <Route path="/ask" element={<Ask setPage={setPage} />} />
              <Route
                path="/edit/:edittype"
                element={<Edit setPage={setPage} />}
              />
              <Route path="/content" element={<Content setPage={setPage} />} />
              <Route path="/login" element={<Login setPage={setPage} />} />
              <Route path="/signup" element={<Signup setPage={setPage} />} />
              <Route path="/mypage" element={<Mypage setPage={setPage} />} />
              {/* <Route
                path="/loginSuccess"
                element={<LoginSuccess setPage={setPage} />}
              /> */}
              {/* <Route
                path="/userList"
                element={<UserList setPage={setPage} />}
              /> */}
              <Route path="*" element={<NotFound setPage={setPage} />} />
            </Routes>
          </Page>
        </Main>
        <Foot page={page}>
          <Footer />
        </Foot>
      </Body>
    </BrowserRouter>
  );
}

export default App;
