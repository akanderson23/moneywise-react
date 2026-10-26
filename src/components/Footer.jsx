import { Link } from 'react-router-dom'
import Logo from './Logo'
import FooterLinkGroup from './FooterLinkGroup'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo icon="images/icon-chart-line-gold.svg" />
            <p>Total financial clarity — no surprises. Building a world of confident wealth stewards.</p>
          </div>
          <div className="footer-link-groups">
            <FooterLinkGroup
              title="Learn"
              links={[
                { title: 'All Courses', link: '/courses' },
                { title: 'Budgeting Guides', link: '/courses' },
                { title: 'Investment Basics', link: '/courses' },
                { title: 'Debt Strategies', link: '/courses' },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { title: 'About Us', link: '/about' },
                { title: 'Our Mission', link: '/about' },
                { title: 'Careers', link: '/' },
                { title: 'Contact', link: '/about' },
              ]}
            />
            <FooterLinkGroup
              title="Connect"
              links={[
                { title: 'Newsletter', link: '/' },
                { title: 'Community Forum', link: '/' },
                { title: 'Help Center', link: '/' },
                { title: 'Support', link: '/' },
              ]}
            />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 MoneyWise Education Inc. All rights reserved.</p>
          <div>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
