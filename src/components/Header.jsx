import { useState } from 'react'
import Logo from './Logo'
import ToggleNav from './ToggleNav'
import Nav from './Nav'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // close the phone menu after picking a page
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo onClick={closeMenu} />
        <ToggleNav open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
        <Nav open={menuOpen} onNavigate={closeMenu} />
      </div>
    </header>
  )
}

export default Header
