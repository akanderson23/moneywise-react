import { Link } from 'react-router-dom'
import './NavItem.css'

function NavItem({ link, title, button }) {
  return (
    <li className="nav-item">
      <Link to={link} className={button ? 'btn btn-navy' : ''}>{title}</Link>
    </li>
  )
}

export default NavItem
