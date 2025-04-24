import './index.css'
import Header from './Header'
import Introduction from './Introduction'
import AboutMe from './AboutMe'
import Services from './Services'
import Reference from './Reference'
import Contact from './Contact'
import ContactForm from './Contact-form'
import Footer from './Footer'

function App() {
  

  return (
    <>
<div className="wrapper">
      <Header />

      <div className="web">
          <Introduction />
          <AboutMe />
      </div>
      
      <Services />
      <Reference />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
      
    </>
    
  )
}

export default App
