import './PageWrpapeer.css'

import Header from '../Header/Header.jsx'
import MainPage from '../MainPage/MainPage.jsx'
import Footer from '../Footer/Footer.jsx'

function PageWrpapeer({ features }) {
  return (
    <div>
      <Header />
      <main className='page-wrapper__main'>
        <MainPage features={ features } />
      </main>
      <Footer />
    </div>
  )
}

export default PageWrpapeer;
