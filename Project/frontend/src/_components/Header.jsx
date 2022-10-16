import { NavLink, Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import '../static/css/header.css';
export { Header };

function Header() {
    const authentication = useSelector((state) => state.authenticate.value)
    const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('useremail');
      window.location.reload();
    }
    return (
      <div className="Header">
        <nav className="navbar">
          <div className="logo-area">
            <Link to="/">
            <div className="logo">
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48'>
                <path d="M7.7 29.5c-2.3 0-4.1-.8-5.6-2.4C.7 25.5 0 23 0 20c0-4.5 1.1-8.4 3.4-11.6C5.7 5.2 9.2 2.6 14 .5l3.1 7c-3 .5-5.6 1.5-7.8 3A10 10 0 0 0 5 15.9c.7-.3 1.7-.5 2.8-.5 2.2 0 4 .7 5.3 2 1.3 1.3 2 3 2 5.1 0 2.1-.7 3.8-2 5.1a7.3 7.3 0 0 1-5.4 2Zm19 0c-2.3 0-4.2-.8-5.6-2.4-1.4-1.6-2.1-4-2.1-7.1 0-4.5 1-8.4 3.4-11.6C24.7 5.2 28 2.6 32.8.5l3.2 7c-3 .5-5.7 1.5-7.9 3a10 10 0 0 0-4.2 5.3c.8-.3 1.7-.5 2.8-.5 2.2 0 4 .7 5.3 2 1.4 1.3 2 3 2 5.1 0 2.1-.6 3.8-2 5.1a7.3 7.3 0 0 1-5.3 2Z" fill="#4CA771"/>
              </svg>
            </div>
            <div className="logo-string">
              <p>Nuri.</p>
              <p style={{fontSize: ".6rem"}}>사색을 공유하다</p>
            </div>
            </Link>
          </div> 
          <div className='nav-input'><input type="text" placeholder="     search"/></div> 
          <div className='nav-menu'>
            <NavLink to="/">메인</NavLink>
            <NavLink to="/myspace">나의 공간</NavLink>
            <NavLink to="/accounts/login">메세지</NavLink>
            <NavLink to="/diary/create">일기작성</NavLink>
            {authentication.isAuthenticated ? 
              <button onClick={logout}><p style={{color:"white"}}>로그아웃</p></button>
              :
              <button><NavLink to="/accounts/login"><p style={{color:"white"}}>로그인</p></NavLink></button>
            }
          </div>
        </nav>
      </div>
    );
}