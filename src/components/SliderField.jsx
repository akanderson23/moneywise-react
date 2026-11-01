import './SliderField.css'

function SliderField({ label, id, value, display, min, max, step, onChange }) {
  return (
    <div className="slider-field">
      <div className="slider-field-top">
        <label htmlFor={id}>{label}</label>
        <span>{display}</span>
      </div>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  )
}

export default SliderField
