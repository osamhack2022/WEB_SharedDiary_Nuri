import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import {Signup} from './account';

function Header() {
  return (
    <div class="container">
      <nav class="navbar">
        <a><Link to="/">Home</Link></a>{" "}
        <a><Link to="/accounts/signup">Sign Up</Link></a>{" "}
        <a><Link to="/accounts/login">Log In</Link></a>
      </nav>
    </div>
  );
}

function RandingPage() {
  return (
    <div className='App'>
      RandingPage
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <p>Page Not Found</p>
    </div>
  );
}

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
