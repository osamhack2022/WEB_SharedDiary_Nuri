import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup, Login } from './account';
import { RandingPage } from './randingpage';
import { Header, Footer, NotFound } from './_components';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact={true} path="/" element={<RandingPage/>}/>
            <Route path="/accounts/signup" element={<Signup/>}/>
            <Route path="/accounts/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
