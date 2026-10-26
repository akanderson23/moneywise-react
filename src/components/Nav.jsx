import NavItem from './NavItem'
import './Nav.css'

function Nav() {
  return (
    <nav className="main-nav">
      <ul className="nav-links">
        <NavItem link="/courses" title="Courses" />
        <NavItem link="/about" title="About" />
        <NavItem link="/pricing" title="Pricing" />
      </ul>
      <ul className="nav-account">
        <NavItem link="/" title="Sign In" />
        <NavItem link="/pricing" title="Get Started" button />
      </ul>
    </nav>
  )
}

export default Nav
