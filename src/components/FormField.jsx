import './FormField.css'

function FormField({ label, id, children }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  )
}

export default FormField
