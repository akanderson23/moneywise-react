import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import PlanCard from '../components/PlanCard'
import CompareRow from '../components/CompareRow'
import FaqItem from '../components/FaqItem'
import Cta from '../components/Cta'
import './Pricing.css'

function Pricing() {
  return (
    <div className="pricing">
      <PageHero
        eyebrow="Simple Pricing"
        title="Invest in Your Financial Future"
        intro="Get unlimited access to practical financial guides, automated worksheets, compounding decision calculators, and expert CFP review channels. Choose the track built for your level."
      />

      <section className="section">
        <div className="container columns">
          <PlanCard
            name="Starter"
            price="$0"
            per=" / month"
            features={[
              '6 Foundational Courses',
              'Core Budgeting Spreadsheets',
              'Emergency Fund Calculator',
              'Standard community access',
            ]}
            buttonText="Get Started"
            buttonStyle="btn-outline-dark"
          />
          <PlanCard
            name="Pro"
            badge="MOST POPULAR"
            price="$19"
            per=" / month"
            features={[
              'All 24 curriculum courses',
              'Interactive decision templates',
              'Taxes & stock mastery units',
              'Premium Discord access',
              'Monthly live CFP AMA review',
            ]}
            buttonText="Start Pro Trial"
            buttonStyle="btn-gold"
            featured
          />
          <PlanCard
            name="Enterprise"
            price="Custom"
            features={[
              'Custom employee packages',
              'Tailored tax spreadsheets',
              'Private company workshops',
              '1-on-1 team review calls',
              'Dedicated support channels',
            ]}
            buttonText="Contact Sales"
            buttonStyle="btn-outline-dark"
          />
        </div>
      </section>

      <section className="section border-top">
        <div className="container">
          <SectionTitle title="Compare Plans" />
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Starter</th>
                  <th>Pro</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <CompareRow feature="Curriculum Lessons" cells={['6 lessons', 'All 24+ lessons', 'Custom tracks']} bold={1} />
                <CompareRow feature="Interactive Worksheets" cells={['check', 'check', 'check']} />
                <CompareRow feature="Debt Snowball Spreadsheets" cells={['minus', 'check', 'check']} />
                <CompareRow feature="Stock Allocation Templates" cells={['minus', 'check', 'check']} />
                <CompareRow feature="Live CFP Q&A Access" cells={['minus', 'Monthly', 'Custom frequency']} bold={1} />
                <CompareRow feature="Support Level" cells={['Community support', 'Priority support', 'Dedicated account manager']} bold={1} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section border-top">
        <div className="container">
          <SectionTitle eyebrow="Questions & Answers" title="Frequently Asked Questions" />
          <div className="pricing-faq-list">
            <FaqItem
              question="Are there any hidden fees or auto-renew surprises?"
              answer="None. We stand behind complete financial clarity. Our Pro plans are billed simple monthly or annually, and you can cancel anytime within your account settings with a single click."
            />
            <FaqItem
              question="What is the 5-minute free budget audit?"
              answer="It is our proprietary visual diagnostic. It maps your high-level numbers securely inside your browser to locate immediate, simple wins in your cashflow without storing your bank logs."
            />
            <FaqItem
              question="Can I invite my family members to share my account?"
              answer="Yes. Our Pro plans include multi-seat family options. You can allocate secure independent profiles for spouses, teens, or relatives to work through lessons sequentially."
            />
            <FaqItem
              question="Are the lessons structured by CFPs?"
              answer="Absolutely. All our financial worksheets, calculators, index fund guides, and tax strategies simplified structures are co-designed and regularly reviewed by credentialed CFPs."
            />
            <FaqItem
              question="Do you store my personal banking credentials?"
              answer="Never. MoneyWise is strictly an educational platform. We provide visual calculators and spreadsheets where you safely type in your high-level figures manually."
            />
            <FaqItem
              question="Is there a student or military discount?"
              answer="Yes. We are dedicated to accessibility. Reach out to our team at support@moneywise.edu with credentials and we will happily set up a custom access track."
            />
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Ready to Invest in Yourself?"
        title="Start Your Free Account Today"
        text="Create your free account immediately to unlock our foundational visual worksheets, cashflow templates, and core tax planning modules."
        buttonText="Create Free Account"
        link="/pricing"
        border
      />
    </div>
  )
}

export default Pricing
