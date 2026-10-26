import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CheckList from '../components/CheckList'
import Lesson from '../components/Lesson'
import './Course.css'

function Course() {
  return (
    <div className="course">
      <PageHero
        eyebrow="Budgeting"
        title="Budgeting Fundamentals"
        intro="Build a monthly budget you will actually stick to. Learn how to track spending, set realistic limits, and give every dollar a job without feeling restricted."
        extra={
          <div className="course-hero-meta">
            <span>Instructor: Sarah Miller, CFP</span>
            <span>2h 30m</span>
            <span>12 Lessons</span>
          </div>
        }
      >
        <Link to="/courses" className="course-back-link">&larr; Back to Courses</Link>
      </PageHero>

      <section className="section">
        <div className="container columns course-body">
          <div className="two">
            <img src="images/course-budgeting.svg" alt="Budgeting Fundamentals" className="course-preview-image" />

            <h2>What You'll Learn</h2>
            <CheckList
              items={[
                'Track where your money goes each month',
                'Build a simple 50/30/20 budget',
                'Cut spending without cutting what you love',
                'Plan for irregular bills and big purchases',
              ]}
            />

            <h2 className="course-lessons-title">Course Lessons</h2>
            <ol className="course-lesson-list">
              <Lesson number="01" title="Why Budgets Fail" time="10 min" />
              <Lesson number="02" title="Tracking Your Spending" time="12 min" />
              <Lesson number="03" title="Needs, Wants, and Savings" time="14 min" />
              <Lesson number="04" title="Building Your First Budget" time="15 min" />
              <Lesson number="05" title="Sticking to the Plan" time="11 min" />
            </ol>
          </div>

          <aside className="course-enroll-card card one">
            <h3>Enroll in This Course</h3>
            <p className="course-price">Free</p>
            <Link to="/pricing" className="btn btn-navy btn-full">Enroll Free</Link>
            <CheckList
              items={[
                '12 video lessons',
                'Budget spreadsheet template',
                'Certificate of completion',
              ]}
            />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Course
