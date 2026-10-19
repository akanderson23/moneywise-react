import './NavItem.css'

function NavItem({ link, title, button }) {
  return (
    <li className="nav-item">
      <a href={link} className={button ? 'btn btn-navy' : ''}>{title}</a>
    </li>
  )
}

export default NavItem
