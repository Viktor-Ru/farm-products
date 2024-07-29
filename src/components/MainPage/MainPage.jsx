import './MainPage.css'

import About from '../About/About.jsx'
import FeaturesList from '../FeaturesList/FeaturesList.jsx'

function MainPage({ features }) {
  return (
    <>
      <About />
      <FeaturesList features={ features } />
    </>
  )
}

export default MainPage;
