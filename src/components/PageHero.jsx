import './PageHero.css'

function PageHero({ eyebrow, title, intro, children, extra }) {
  return (
    <section className="page-hero section navy-bg">
      <div className="container">
        {children}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-intro">{intro}</p>
        {extra}
      </div>
    </section>
  )
}

export default PageHero
