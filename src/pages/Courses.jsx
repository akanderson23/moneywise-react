import PageHero from '../components/PageHero'
import CourseCard from '../components/CourseCard'
import Cta from '../components/Cta'
import './Courses.css'

function Courses() {
  return (
    <div className="courses">
      <PageHero
        eyebrow="Course Catalog"
        title="Learn Money Skills That Last"
        intro="Practical, structured visual modules covering everything you need to build and scale your family budget, pay off liability, and plan long-term investing securely."
      />

      <section className="courses-filter-bar">
        <div className="container">
          <ul className="courses-filter-list">
            <li><button className="selected">All</button></li>
            <li><button>Budgeting</button></li>
            <li><button>Investing</button></li>
            <li><button>Debt</button></li>
            <li><button>Retirement</button></li>
            <li><button>Taxes</button></li>
          </ul>
          <div className="courses-search-box">
            <img src="images/icon-search.svg" alt="" />
            <input type="text" placeholder="Search courses..." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* these will be built from the json file in a later part */}
          <div className="courses-grid">
            <CourseCard
              title="Budgeting Fundamentals"
              category="Budgeting"
              instructor="Sarah Miller, CFP"
              duration="2h 30m"
              lessons={12}
              level="Beginner"
              description="Build a monthly budget you can actually stick to using the 50/30/20 method."
              image="images/course-budgeting.svg"
              link="/course"
            />
            <CourseCard
              title="Stock Market Basics"
              category="Investing"
              instructor="David Chen, Portfolio Lead"
              duration="3h 45m"
              lessons={16}
              level="Beginner"
              description="Learn how stocks work, how prices move, and how to buy your first share with confidence."
              image="images/course-investing.svg"
              link="/pricing"
            />
            <CourseCard
              title="Credit Score Mastery"
              category="Debt"
              instructor="James Holloway, Analyst"
              duration="1h 15m"
              lessons={8}
              level="Beginner"
              description="Understand what goes into your credit score and the habits that raise it fastest."
              image="images/course-credit.svg"
              link="/pricing"
            />
            <CourseCard
              title="Retirement Planning 101"
              category="Retirement"
              instructor="Elena Rostova, Advisor"
              duration="3h 10m"
              lessons={14}
              level="Intermediate"
              description="Compare 401(k)s and IRAs and figure out how much you need to save to retire comfortably."
              image="images/course-retirement.svg"
              link="/pricing"
            />
            <CourseCard
              title="Tax Strategy Simplified"
              category="Taxes"
              instructor="Mark Torres, CPA"
              duration="2h 20m"
              lessons={10}
              level="Intermediate"
              description="Decode tax brackets, deductions, and credits so you keep more of every paycheck."
              image="images/course-taxes.svg"
              link="/pricing"
            />
            <CourseCard
              title="Emergency Fund Blueprint"
              category="Budgeting"
              instructor="Sarah Miller, CFP"
              duration="1h 00m"
              lessons={6}
              level="Beginner"
              description="Set a savings target and build a cash cushion that protects you from surprise expenses."
              image="images/course-emergency.svg"
              link="/pricing"
            />
            <CourseCard
              title="Debt Payoff Strategies"
              category="Debt"
              instructor="James Holloway, Analyst"
              duration="2h 05m"
              lessons={9}
              level="Intermediate"
              description="Compare the snowball and avalanche methods and build a plan to become debt free."
              image="images/course-debt.svg"
              link="/pricing"
            />
            <CourseCard
              title="Index Fund Investing"
              category="Investing"
              instructor="David Chen, Portfolio Lead"
              duration="2h 40m"
              lessons={11}
              level="Intermediate"
              description="Discover why low-cost index funds beat most active investors and how to start with any amount."
              image="images/course-index-funds.svg"
              link="/pricing"
            />
            <CourseCard
              title="Paying for College"
              category="Budgeting"
              instructor="Elena Rostova, Advisor"
              duration="1h 50m"
              lessons={8}
              level="Beginner"
              description="Navigate FAFSA, scholarships, and 529 plans to keep student loans to a minimum."
              image="images/course-college.svg"
              link="/pricing"
            />
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Personalized Education Pathway"
        title="Not Sure Where to Start?"
        text="Take our quick 2-minute diagnostic quiz. We will evaluate your current financial literacy stage and match you with the precise learning modules you need next."
        buttonText="Take Our Quiz"
        link="/courses"
        border
      />
    </div>
  )
}

export default Courses
