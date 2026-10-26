import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import './Cta.css'

function Cta({ eyebrow, title, text, buttonText, link, border }) {
  return (
    <section className={border ? 'cta section border-top' : 'cta section'}>
      <div className="container">
        <SectionTitle eyebrow={eyebrow} title={title} text={text} centered>
          <Link to={link} className="btn btn-gold">{buttonText}</Link>
        </SectionTitle>
      </div>
    </section>
  )
}

export default Cta
