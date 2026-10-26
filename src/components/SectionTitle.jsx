import './SectionTitle.css'

function SectionTitle({ eyebrow, title, text, centered, children }) {
  return (
    <div className={centered ? 'section-title centered' : 'section-title'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-title-text">{text}</p>}
      {children}
    </div>
  )
}

export default SectionTitle
