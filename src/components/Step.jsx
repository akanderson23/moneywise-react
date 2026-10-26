import './Step.css'

function Step({ number, title, text }) {
  return (
    <div className="step one">
      <p className="step-number">{number}</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Step
