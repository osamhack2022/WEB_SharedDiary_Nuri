import { NavLink } from 'react-router-dom';
import logo from '../static/img/따옴표.svg';
export { Header };

function Header() {
    return (
      <div class="Header">
        <nav class="navbar">
          <a className="App-logo"><NavLink to="/"><img src={logo} alt="logo" width="20" height="20"/></NavLink></a>
          <a><NavLink to="/">Home</NavLink></a>{" "}
          <a><NavLink to="/accounts/signup">Sign Up</NavLink></a>{" "}
          <a><NavLink to="/accounts/login">Log In</NavLink></a>
        </nav>
      </div>
    );
}