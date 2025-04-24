import logo from './assets/logo_white.svg'
import Nav from './Nav'
import icon from './assets/skuplik_icon.svg'


function Footer(){
    return(

        <footer className="footer">
            <div className="img-logo">
               <img src={logo} alt="HDMTAX logo" 
                onClick={() => window.scrollTo({top: 0, behavior: "smooth" })}
                style={{cursor: "pointer"}}
                />
               <p>Jistota v číslech, klid v podnikání.</p>
            </div>

            <div className="footer-nav">
                <Nav isFooter={true} />
            </div>

            <div className="line">
            </div>

            <div className="copyright">
            <p>&copy; {new Date().getFullYear()} - HDM TAX s.r.o.</p>
            </div>

            <div className="icon">
            <a href="https://skuplik.com/" target="_blank"><img src={icon} alt="Roman Skuplík logo" /></a>
            </div>
        </footer>
    )
}

export default Footer