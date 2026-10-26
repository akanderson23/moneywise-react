import './TeamCard.css'

function TeamCard({ image, name, role }) {
  return (
    <div className="team-card card one">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export default TeamCard
