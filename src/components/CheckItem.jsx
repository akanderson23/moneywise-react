import './CheckItem.css'

function CheckItem({ text }) {
  return (
    <li className="check-item">
      <img src="images/icon-check.svg" alt="" />
      {text}
    </li>
  )
}

export default CheckItem
