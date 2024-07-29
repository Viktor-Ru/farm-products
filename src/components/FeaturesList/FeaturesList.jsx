import './FeaturesList.css'

import Title from '../Title/Title.jsx'
import FeatureCard from '../FeatureCard/FeatureCard.jsx'
import Button from '../Button/Button.jsx'

function FeaturesList({ features }) {
  return features && features.length ? (
    <section className="features">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="features__list">

        {features.map((feature) => (
          <li className="features__item" key={feature.id}>
            <FeatureCard feature={ feature } />
          </li>
        ))}

      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
}



export default FeaturesList;
