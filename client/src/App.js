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
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border-top: 3px solid #f48255;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 97rem;
  max-width: 100%;
  margin: 0 auto;
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
  height: 100%;
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
              <Route path="/" element={<Questions setPage={setPage} />} />
              <Route path="/ask" element={<Ask setPage={setPage} />} />
              <Route path="/content" element={<Content setPage={setPage} />} />
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
