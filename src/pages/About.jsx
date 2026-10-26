import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import TeamCard from '../components/TeamCard'
import Stat from '../components/Stat'
import './About.css'

function About() {
  return (
    <div className="about">
      <PageHero
        eyebrow="Our Mission"
        title="Making Financial Literacy Accessible to Everyone"
        intro="We believe high-quality money education is a human right. We build visual, transparent, and structured resources that strip away corporate jargon, so you can build security and make confident life steps."
      />

      <section className="section">
        <div className="container columns about-story">
          <img src="images/about-team.jpg" alt="The MoneyWise team planning at a whiteboard" className="about-story-image" />
          <div className="one">
            <p className="eyebrow">Our Story</p>
            <h2>How MoneyWise Was Born</h2>
            <p>In 2023, we noticed a painful pattern: most financial advice was either hidden behind expensive advisor payroll walls or distributed in confusing, unorganized social media clips. Beginners were left with more anxiety than assets.</p>
            <p>We brought together CFPs, educational curriculum designers, and visual developers to construct a sequential, visual pathways platform. Our core method ensures you don't just memorize terms—you master the practices.</p>
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container">
          <SectionTitle eyebrow="Our Pillars" title="What We Stand For" />
          <div className="columns">
            <FeatureCard
              icon="images/icon-eye-off.svg"
              title="Transparency"
              text="No hidden agendas, sponsor biases, or surprising policy changes. Just pure educational math."
            />
            <FeatureCard
              icon="images/icon-globe.svg"
              title="Accessibility"
              text="Clean interfaces and intuitive visual workflows designed for absolute beginners and lifelong learners."
            />
            <FeatureCard
              icon="images/icon-users.svg"
              title="Community"
              text="An interactive peer system that encourages comfortable discussions about wealth stewardship."
            />
            <FeatureCard
              icon="images/icon-trending-up.svg"
              title="Empowerment"
              text="Tools and templates designed for immediate application, so you leave with real-world plans."
            />
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container">
          <SectionTitle eyebrow="Expert Stewards" title="Meet the Team" />
          <div className="columns">
            <TeamCard image="images/team-sarah.png" name="Sarah Miller, CFP" role="Head of Curriculum" />
            <TeamCard image="images/team-david.png" name="David Chen" role="Portfolio Lead" />
            <TeamCard image="images/team-mark.png" name="Mark Torres, CPA" role="Tax Strategy Lead" />
            <TeamCard image="images/team-elena.png" name="Elena Rostova" role="Retirement Specialist" />
          </div>
        </div>
      </section>

      <section className="about-stats navy-bg">
        <div className="container columns">
          <Stat number="50K+" label="Learners Empowered" />
          <Stat number="200+" label="Lessons & Templates" />
          <Stat number="4.9" label="Average Rating" />
          <Stat number="12" label="Expert Instructors" />
        </div>
      </section>
    </div>
  )
}

export default About
