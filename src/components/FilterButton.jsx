import './FilterButton.css'

function FilterButton({ title, selected, onSelect }) {
  return (
    <li className="filter-button">
      <button type="button" className={selected ? 'selected' : ''} aria-pressed={selected} onClick={onSelect}>
        {title}
      </button>
    </li>
  )
}

export default FilterButton
