import './Lesson.css'

function Lesson({ number, title, time }) {
  return (
    <li className="lesson">
      {number}. {title}
      <span className="lesson-time">{time}</span>
    </li>
  )
}

export default Lesson
