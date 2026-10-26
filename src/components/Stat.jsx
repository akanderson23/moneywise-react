import './Stat.css'

function Stat({ number, label }) {
  return (
    <div className="stat one">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  )
}

export default Stat
