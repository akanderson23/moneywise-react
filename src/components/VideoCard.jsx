import './VideoCard.css'

function VideoCard({ eyebrow, title, video, text }) {
  return (
    <div className="video-card card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <div className="video-card-frame">
        <iframe
          src={video}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default VideoCard
