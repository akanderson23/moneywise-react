import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import CourseCard from '../components/CourseCard'
import FilterButton from '../components/FilterButton'
import Cta from '../components/Cta'
import './Courses.css'

// the live render server; set VITE_SERVER_URL to test against a local one
const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'https://moneywise-server-plb5.onrender.com'

const categories = ['All', 'Budgeting', 'Investing', 'Debt', 'Retirement', 'Taxes']

function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchText, setSearchText] = useState('')

  // pull the course list from the server when the page opens
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/courses`)
        if (!response.ok) throw new Error(`Server responded with ${response.status}`)
        setCourses(await response.json())
      } catch (error) {
        console.log(error)
        setFailed(true)
      }
      setLoading(false)
    }

    getCourses()
  }, [])

  const showingCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchText.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            {categories.map((category) => (
              <FilterButton
                key={category}
                title={category}
                selected={category === selectedCategory}
                onSelect={() => setSelectedCategory(category)}
              />
            ))}
          </ul>
          <div className="courses-search-box">
            <img src="images/icon-search.svg" alt="" />
            <input
              type="text"
              placeholder="Search courses..."
              aria-label="Search courses"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading && (
            <div className="courses-message" role="status">
              <div className="courses-spinner"></div>
              <p>Loading courses... this can take up to a minute while the server wakes up.</p>
            </div>
          )}

          {failed && (
            <p className="courses-message" role="alert">Sorry, the courses could not be loaded. Please try again later.</p>
          )}

          {!loading && !failed && showingCourses.length === 0 && (
            <p className="courses-message">No courses match your search.</p>
          )}

          <div className="courses-grid">
            {showingCourses.map((course) => (
              <CourseCard
                key={course._id}
                title={course.title}
                category={course.category}
                instructor={course.instructor}
                duration={course.duration}
                lessons={course.lessons}
                level={course.level}
                description={course.description}
                image={`${SERVER_URL}/${course.img_name}`}
                link={course.link}
              />
            ))}
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
