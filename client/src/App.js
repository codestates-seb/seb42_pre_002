import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Questions from './page/Questions';
import Ask from './page/Ask';
import Content from './page/Content';
import Login from './page/Login';
import Signup from './page/Signup';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <div>
            <Nav />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Questions />} />
              <Route path="/ask" element={<Ask />} />
              <Route path="/content" element={<Content />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
