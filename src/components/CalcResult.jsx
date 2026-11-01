import './CalcResult.css'

function CalcResult({ label, value, highlight }) {
  return (
    <li className={highlight ? 'calc-result highlight' : 'calc-result'}>
      <p>{label}</p>
      <h3>{value}</h3>
    </li>
  )
}

export default CalcResult
