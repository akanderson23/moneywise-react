import { Link } from 'react-router-dom'
import './FeatureCard.css'

function FeatureCard({ icon, title, text, link }) {
  return (
    <div className="feature-card card one">
      <div className="feature-card-icon">
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      {link && <Link to={link} className="feature-card-link">Learn More &rarr;</Link>}
    </div>
  )
}

export default FeatureCard
