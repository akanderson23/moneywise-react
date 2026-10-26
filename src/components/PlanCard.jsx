import { Link } from 'react-router-dom'
import CheckList from './CheckList'
import './PlanCard.css'

function PlanCard({ name, badge, price, per, features, buttonText, buttonStyle, featured }) {
  return (
    <div className={featured ? 'plan-card card one featured' : 'plan-card card one'}>
      <div className="plan-card-name">
        <h3>{name}</h3>
        {badge && <span className="plan-card-badge">{badge}</span>}
      </div>
      <p className="plan-card-price"><span>{price}</span>{per}</p>
      <CheckList items={features} />
      <Link to="/pricing" className={`btn btn-full ${buttonStyle}`}>{buttonText}</Link>
    </div>
  )
}

export default PlanCard
