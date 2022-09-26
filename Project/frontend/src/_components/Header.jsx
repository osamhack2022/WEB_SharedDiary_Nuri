import { NavLink } from 'react-router-dom';

export { Header };

function Header() {
    return (
      <div class="container">
        <nav class="navbar">
          <a><NavLink to="/">Home</NavLink></a>{" "}
          <a><NavLink to="/accounts/signup">Sign Up</NavLink></a>{" "}
          <a><NavLink to="/accounts/login">Log In</NavLink></a>
        </nav>
      </div>
    );
}