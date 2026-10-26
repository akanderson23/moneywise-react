import { Link } from 'react-router-dom'
import './CourseCard.css'

function CourseCard({ title, category, instructor, duration, lessons, level, description, image, link }) {
  return (
    <div className="course-card">
      <Link to={link}>
        <img src={image} alt={title} className="course-card-image" />
      </Link>
      <div className="course-card-info">
        <div className="course-card-top">
          <p className="course-card-category">{category}</p>
          <span className="course-card-level">{level}</span>
        </div>
        <h3><Link to={link}>{title}</Link></h3>
        <p className="course-card-instructor">Instructor: {instructor}</p>
        <p className="course-card-description">{description}</p>
        <div className="course-card-meta">
          <span><img src="images/icon-clock.svg" alt="" />{duration}</span>
          <span><img src="images/icon-book-open.svg" alt="" />{lessons} Lessons</span>
        </div>
        <Link to={link} className="btn btn-navy btn-full">Enroll Free</Link>
      </div>
    </div>
  )
}

export default CourseCard
