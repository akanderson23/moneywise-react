import logoIcon from '../assets/icon-chart-line.svg'
import './Logo.css'

function Logo() {
  return (
    <a href="#" className="logo">
      <img src={logoIcon} alt="" />
      MoneyWise
    </a>
  )
}

export default Logo
