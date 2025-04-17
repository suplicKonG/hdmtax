import './index.css'
import logo from './assets/logo.svg'
import Nav from './Nav'

function Header() {
    return(
    <>
    <div id="home" className="header-container sticky">
        
        <div className="container">
        <img src={logo} alt="HDMTAX logo" 
                onClick={() => window.scrollTo({top: 0, behavior: "smooth" })}
                style={{cursor: "pointer"}}/>
        <Nav />
        </div>
    </div>
    </>
        
    )
}

export default Header