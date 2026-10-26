import CheckItem from './CheckItem'
import './CheckList.css'

function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <CheckItem key={item} text={item} />
      ))}
    </ul>
  )
}

export default CheckList
