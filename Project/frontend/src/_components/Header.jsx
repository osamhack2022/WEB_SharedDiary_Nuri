import { NavLink, Link } from 'react-router-dom';
import '../static/css/header.css';
import logo from '../static/img/따옴표.svg';
export { Header };

function Header() {
    return (
      <div className="Header">
        <nav className="navbar">
          <div className="logo-area">
            <Link to="/" class='logo-link'>
            <div className="logo"><img src={logo} alt="logo" width="20" height="20"/></div>
            <div className="logo-string">
              <p>Nuri.</p>
              <p style={{fontSize: ".6rem"}}>사색을 공유하다</p>
            </div>
            </Link>
          </div> 
          <div className='nav-input'><input type="text" placeholder="     search"/></div> 
          <div className='nav-menu'>
            <NavLink exact={true} to="/">메인</NavLink>
            <NavLink to="/accounts/signup">나의 공간</NavLink>
            <NavLink to="/accounts/login">메세지</NavLink>
            <button><NavLink to="/accounts/login"><p style={{color:"white"}}>일기쓰기</p></NavLink></button>
          </div>
        </nav>
      </div>
    );
}