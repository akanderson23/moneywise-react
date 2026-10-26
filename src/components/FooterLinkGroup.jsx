import { Link } from 'react-router-dom'
import './FooterLinkGroup.css'

function FooterLinkGroup({ title, links }) {
  return (
    <section className="footer-link-group">
      <h4>{title}</h4>
      <ul>
        {links.map((item) => (
          <li key={item.title}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FooterLinkGroup
