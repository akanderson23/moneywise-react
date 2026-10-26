import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import Step from '../components/Step'
import Testimonial from '../components/Testimonial'
import Cta from '../components/Cta'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="home-hero section navy-bg">
        <div className="container columns">
          <div className="one">
            <p className="eyebrow">Financial Education</p>
            <h1>Total Financial Clarity — No Surprises</h1>
            <p className="home-hero-intro">Master the fundamental rules of budgeting, smart investing, and healthy cashflow. Learn structured money practices built to stand the test of time.</p>
            <div className="home-hero-buttons">
              <Link to="/courses" className="btn btn-gold">Start Learning</Link>
              <Link to="/courses" className="btn btn-outline-light">Explore Courses</Link>
            </div>
          </div>
          <div className="home-hero-card">
            <div className="home-hero-card-icon">
              <img src="images/icon-graduation-cap.svg" alt="" />
            </div>
            <h3>Visual Dashboard Preview</h3>
            <p>Interactive learning paths and real-time financial tracking widgets</p>
            <div className="home-placeholder-bar"></div>
            <div className="home-placeholder-bar short"></div>
          </div>
        </div>
      </section>

      <section className="home-trust-bar">
        <div className="container">
          <p className="eyebrow">As seen in leading financial journals</p>
          <div className="home-press-list">
            <p>FinanceDaily</p>
            <p>WealthHub</p>
            <p>MarketWatch</p>
            <p>SmartCapital</p>
            <p>EquityNews</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Method"
            title="Why MoneyWise?"
            text="Most financial advice is built on confusing terms and sudden policy surprises. We deliver structured education designed for real-world application."
          />
          <div className="columns">
            <FeatureCard
              icon="images/icon-wallet.svg"
              title="Budgeting Basics"
              text="Discover simple structured workflows to organize monthly expenses without feeling restricted."
              link="/courses"
            />
            <FeatureCard
              icon="images/icon-chart-spline.svg"
              title="Investment 101"
              text="Safely navigate index funds, stock allocations, and compounding mechanics step-by-step."
              link="/courses"
            />
            <FeatureCard
              icon="images/icon-shield-check.svg"
              title="Debt-Free Living"
              text="Actionable frameworks to pay down high-interest balances systematically and permanently."
              link="/courses"
            />
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container">
          <SectionTitle
            eyebrow="The Pathway"
            title="Structured for Success"
            text="No chaotic algorithms or jump-around courses. We take you sequentially from foundational vocabulary to advanced financial independence."
          />
          <div className="columns home-steps">
            <Step
              number="01"
              title="Choose a Course"
              text="Select from our structured curriculum designed for complete beginners to intermediate stewards."
            />
            <Step
              number="02"
              title="Learn at Your Pace"
              text="Short 10-minute video modules with interactive templates that work seamlessly on any device."
            />
            <Step
              number="03"
              title="Apply with Confidence"
              text="Utilize built-in budgeting spreadsheets and decision calculators with total safety."
            />
          </div>
        </div>
      </section>

      <section className="section navy-bg">
        <div className="container">
          <SectionTitle eyebrow="What Our Learners Say" title="Real Stories of Financial Comfort" />
          <div className="columns">
            <Testimonial
              quote="Before MoneyWise, I was always anxious at the end of the quarter. The taxes course and budgeting basics changed everything. Total confidence now."
              image="images/avatar-maria.png"
              name="Maria G."
              role="Self-Employed Designer"
            />
            <Testimonial
              quote="I avoided investing because of jargon. The Stock Market Basics course broke down the math so cleanly. I was able to open my index fund within an hour."
              image="images/avatar-david.png"
              name="David K."
              role="Software Engineer"
            />
            <Testimonial
              quote="The Debt-Free program laid out an exact math plan for my loans. I've already knocked off $8k of high interest debt using their snowball spreadsheet."
              image="images/avatar-zoe.png"
              name="Zoe S."
              role="Healthcare Professional"
            />
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Curriculum Access"
        title="Ready to Take Control?"
        text="Begin building sound financial habits today. Create your free account to unlock our foundational worksheets, visual trackers, and core lesson templates immediately."
        buttonText="Start Free"
        link="/pricing"
      />
    </div>
  )
}

export default Home
