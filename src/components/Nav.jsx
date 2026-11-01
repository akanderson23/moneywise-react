import NavItem from './NavItem'
import './Nav.css'

function Nav({ open, onNavigate }) {
  return (
    <nav id="main-nav" className={open ? 'main-nav open' : 'main-nav'}>
      <ul className="nav-links">
        <NavItem link="/courses" title="Courses" onClick={onNavigate} />
        <NavItem link="/about" title="About" onClick={onNavigate} />
        <NavItem link="/pricing" title="Pricing" onClick={onNavigate} />
      </ul>
      <ul className="nav-account">
        <NavItem link="/" title="Sign In" onClick={onNavigate} />
        <NavItem link="/pricing" title="Get Started" button onClick={onNavigate} />
      </ul>
    </nav>
  )
}

export default Nav
