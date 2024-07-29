import './FeatureCard.css'

import Title, { TitleSize } from '../Title/Title.jsx'

function FeatureCard({ feature }) {
  return (
    <section className={`feature${feature.isNegative ? " feature_negative" : ""}`}>
      <header className="feature__header">
        <img
          className="feature__img"
          width={56}
          height={56}
          src={feature.image}
          alt={feature.title}
        />
        <div>
          <span
            className={`feature__owner${feature.isNegative ? " feature__owner_negative" : ""
              }`}
          >
            {feature.owner}
          </span>
          <Title size={TitleSize.EXTRA_SMALL}>{feature.title}</Title>
        </div>
      </header>
      <p
        className="feature__text"
        dangerouslySetInnerHTML={{ __html: feature.about }}
      />
    </section>
  )
}

export default FeatureCard
