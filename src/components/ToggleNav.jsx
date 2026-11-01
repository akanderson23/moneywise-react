import './ToggleNav.css'

function ToggleNav({ open, onToggle }) {
  return (
    <button
      type="button"
      className={open ? 'toggle-nav open' : 'toggle-nav'}
      onClick={onToggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="main-nav"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default ToggleNav
