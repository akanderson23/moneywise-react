import { Link } from 'react-router-dom'
import './Logo.css'

function Logo({ icon = 'images/icon-chart-line.svg', onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick}>
      <img src={icon} alt="" />
      MoneyWise
    </Link>
  )
}

export default Logo
