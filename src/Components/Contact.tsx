import kontakt from './assets/grafika_kontakt.jpg'
import kontakt_blur from './assets/kontakt_blur.png'
import email from './assets/email_icon.svg'
import tel from './assets/TEL_ICON.svg'
import datovka from './assets/datova_schranka.svg'
import cdp from './assets/cislo_danoveho_poradce.svg'
import ico from './assets/ico.svg'

function Contact(){
    return(
        <>     
    <div id="contact" className="contact">
        <img src={kontakt} className="photo-main" alt="Profilová fotka" />
        <img src={kontakt_blur} className="photo-blur" alt="Rozmazaná fotka v pozadí"/>
        <div className="contact-container">
            <div className="contact-info">
                <p className="contact-p">KONTAKT</p>
                <h2>Spojte se se mnou,<br /> rád vám pomohu.</h2>
                <div className="contact-email">
                    <img src={email} alt="Email ikona" className="email-icon" />
                    <div className="email-info">
                        <p className="email-p">EMAIL</p>
                        <p className="email">martin.hruby@hdmtax.cz</p>
                    </div>
                </div>
                <div className="contact-telefon">
                    <img src={tel} alt="Telefon ikona" className="tel-icon" />
                    <div className="tel-info">
                        <p className="tel-p">TELEFON</p>
                        <p className="tel">+420 604 603 089</p>
                    </div>
                </div>
            </div>
            <div className="online-contact">
                <div className="datovka">
                    <img src={datovka} alt="Datová schránka ikona" className="datovka-icon"/>
                    <p className="headlines">DATOVÁ SCHRÁNKA</p>
                    <p className="data">aryfp4a</p>
                </div>
                
                <div className="cdp">
                    <img src={cdp} alt="Číslo daňového poradce ikona" className="cdp-icon" />
                    <p className="headlines">ČÍSLO DAŇOVÉHO PORADCE</p>
                    <p className="data">4206</p>
                </div>
                
                <div className="ico">
                  <img src={ico} alt="IČO ikona" className="ico-icon"/>
                  <p className="headlines">IČO</p>
                  <p className="data">70554170</p>  
                </div>     
            </div>
        </div>
    </div>


    
        <div className="table-line-contact"></div>

        


        </>
    )
}

export default Contact