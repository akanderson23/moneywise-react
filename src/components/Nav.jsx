import NavItem from './NavItem'
import './Nav.css'

function Nav() {
  return (
    <nav className="main-nav">
      <ul className="nav-links">
        <NavItem link="#" title="Courses" />
        <NavItem link="#" title="About" />
        <NavItem link="#" title="Pricing" />
      </ul>
      <ul className="nav-account">
        <NavItem link="#" title="Sign In" />
        <NavItem link="#" title="Get Started" button />
      </ul>
    </nav>
  )
}

export default Nav
