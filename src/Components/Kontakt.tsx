import kontakt from './assets/grafika_kontakt.jpg'
import kontakt_blur from './assets/kontakt_blur.png'
import email from './assets/email_icon.svg'
import tel from './assets/TEL_ICON.svg'
import datovka from './assets/datova_schranka.svg'
import cdp from './assets/cislo_danoveho_poradce.svg'
import ico from './assets/ico.svg'

function Kontakt(){
    return(
        <>     
    <div id="kontakt" className="kontakt">
        <img src={kontakt} className="fotka-main" />
        <img src={kontakt_blur} className="fotka-blur"/>
        <div className="kontakt-container">
            <div className="kontakt-info">
                <p className="kontakt-p">KONTAKT</p>
                <h2>Spojte se se mnou,<br /> rád vám pomohu.</h2>
                <div className="kontakt-email">
                    <img src={email} alt="Email ikona" className="email-ikona" />
                    <div className="email-info">
                        <p className="email-p">EMAIL</p>
                        <p className="email">martin.hruby@hdmtax.cz</p>
                    </div>
                </div>
                <div className="kontakt-telefon">
                    <img src={tel} alt="Telefon ikona" className="tel-ikona" />
                    <div className="tel-info">
                        <p className="tel-p">TELEFON</p>
                        <p className="tel">+420 604 603 089</p>
                    </div>
                </div>
            </div>
            <div className="online-kontakt">
                <div className="datovka">
                    <img src={datovka} alt="Datová schránka ikona" className="datovka-ikona"/>
                    <p className="nadpisy">DATOVÁ SCHRÁNKA</p>
                    <p className="udaje">aryfp4a</p>
                </div>
                
                <div className="cdp">
                    <img src={cdp} alt="Číslo daňového poradce ikona" className="cdp-ikona" />
                    <p className="nadpisy">ČÍSLO DAŇOVÉHO PORADCE</p>
                    <p className="udaje">4206</p>
                </div>
                
                <div className="ico">
                  <img src={ico} alt="IČO ikona" className="ico-ikona"/>
                  <p className="nadpisy">IČO</p>
                  <p className="udaje">70554170</p>  
                </div>     
            </div>
        </div>
    </div>


    
        <div className="table-line-kontakt"></div>

        


        </>
    )
}

export default Kontakt