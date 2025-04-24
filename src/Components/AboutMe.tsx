import './index.css'
import foto from './assets/grafika.png'
import rectangle from './assets/Rectangle.svg'
// import quote from './assets/“.svg'

function AboutMe(){
    return(
        <>
        <div id="about" className="quote">
            <p className="quote-text">Pomáhám podnikatelům, firmám<br /> i živnostníkům, s účetnictvím a daněmi.</p>
        </div>
        
          
        <div className="about-me">
                <img src={foto} alt="Fotka" className="about-me-photo" />

            <div className="about-me-text">
                <p className="about-me-sentence">O MNĚ</p>

                <p className="sentence">Váš osobní poradce<br /> v oblasti daní a účetnictví</p>

                <img src={rectangle} />
                
                <p className="about-me-p">„Jsem daňový poradce s dlouholetými zkušenostmi. Svým klientům pomáhám mít daně v pořádku, zbavuji je starostí a přebírám odpovědnost za správné vyplnění daňových přiznání. Ke každému klientovi přistupuji individuálně, s důrazem na detail a zodpovědnost.</p>
                <p className="about-me-p">Spolupráce se mnou znamená nejen odborné poradenství, ale i osobní přístup a důvěru.“</p>

                <div className="sign">
                    <p>Ing. Martin Hrubý</p>
                </div>
            </div> 
        </div>

        <div className="table-line"></div>

        <div className="tables-container">
            <div className="table-box">
                <span className="number">01</span>
                <h2>Odbornost</h2>
                <p>Široká znalost daňové<br /> problematiky, včetně<br /> složitějších případů</p>
            </div>

            <div className="table-box">
                <span className="number">02</span>
                <h2>Osobní přístup</h2>
                <p>Individuální péče a<br /> zodpovědnost za<br /> každého klienta</p>
            </div>

            <div className="table-box">
                <span className="number">03</span>
                <h2>Spolehlivost</h2>
                <p>Garantuji, že vaše<br /> daňové povinnosti<br /> budou splněny správně<br /> a v čas</p>
            </div>
        </div>
        </>
        
    )
}

export default AboutMe

