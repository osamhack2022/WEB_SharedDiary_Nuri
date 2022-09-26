import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './account';
import { RandingPage } from './randingpage';
import { Header, Footer, NotFound } from './_components';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<RandingPage/>}/>
            <Route path="/accounts/signup" element={<Signup/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
