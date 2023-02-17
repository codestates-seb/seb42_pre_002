import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Questions from './page/Questions';
import Ask from './page/Ask';
import Content from './page/Content';
import Login from './page/Login';
import Signup from './page/Signup';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import styled from 'styled-components';

const Body = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Head = styled.div`
  height: 50px;
`;

const Main = styled.div`
  display: flex;
  flex: 1 0 auto;
`;

const Foot = styled.div`
  display: ${(props) => (props.page.foot ? 'block' : 'none')};
  height: 322px;
`;

const Nv = styled.div`
  display: ${(props) => (props.page.navi ? 'block' : 'none')};
  width: 164px;
  height: 100%;
`;

const Page = styled.div`
  flex: 1 0 auto;
`;

function App() {
  const [page, setPage] = useState({ navi: true, foot: true });
  return (
    <BrowserRouter>
      <Body>
        <Head>
          <Header />
        </Head>
        <Main>
          <Nv page={page}>
            <Nav />
          </Nv>
          <Page>
            <Routes>
              <Route path="/" element={<Questions />} />
              <Route path="/ask" element={<Ask setPage={setPage} />} />
              <Route path="/content" element={<Content />} />
              <Route path="/login" element={<Login setPage={setPage} />} />
              <Route path="/signup" element={<Signup setPage={setPage} />} />
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
