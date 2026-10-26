import './Testimonial.css'

function Testimonial({ quote, image, name, role }) {
  return (
    <div className="testimonial card one">
      <p className="testimonial-quote">"{quote}"</p>
      <div className="testimonial-person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
