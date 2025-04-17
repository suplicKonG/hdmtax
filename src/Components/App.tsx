import './index.css'
import Header from './Header'
import Uvod from './Uvod'
import Stagetwo from './Stagetwo'
import Sluzby from './Sluzby'
import Thirdstage from './Thirdstage'
import Kontakt from './Kontakt'
import KontaktForm from './Kontakt-form'
import Footer from './Footer'

function App() {
  

  return (
    <>
    <div className="wrapper">
      <Header />
      <div className="web">
      
      <Uvod />
      <Stagetwo />
      </div>
      
      <Sluzby />
      <Thirdstage />
      <Kontakt />
      <KontaktForm />
      <Footer />
    </div>
      
    </>
    
  )
}

export default App
