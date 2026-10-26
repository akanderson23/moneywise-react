import { Link } from 'react-router-dom'
import './Logo.css'

function Logo({ icon = 'images/icon-chart-line.svg' }) {
  return (
    <Link to="/" className="logo">
      <img src={icon} alt="" />
      MoneyWise
    </Link>
  )
}

export default Logo
