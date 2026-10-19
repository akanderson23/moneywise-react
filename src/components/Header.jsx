import Logo from './Logo'
import ToggleNav from './ToggleNav'
import Nav from './Nav'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <ToggleNav />
        <Nav />
      </div>
    </header>
  )
}

export default Header
