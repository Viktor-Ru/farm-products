import './Header.css'

import Logo from '../Logo/Logo.jsx';
import Nav from '../Nav/Nav.jsx'

function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  )
}

export default Header;
