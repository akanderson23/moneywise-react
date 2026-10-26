import './CompareRow.css'

// each cell is "check", "minus", or text; bold highlights the Pro column
function CompareRow({ feature, cells, bold }) {
  return (
    <tr className="compare-row">
      <td>{feature}</td>
      {cells.map((cell, index) => (
        <td key={index} className={bold === index ? 'bold' : ''}>
          {cell === 'check' && <img src="images/icon-check.svg" alt="Included" />}
          {cell === 'minus' && <img src="images/icon-minus.svg" alt="Not included" />}
          {cell !== 'check' && cell !== 'minus' && cell}
        </td>
      ))}
    </tr>
  )
}

export default CompareRow
