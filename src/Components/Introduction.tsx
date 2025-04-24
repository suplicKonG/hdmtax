import grafika from './assets/grafika_hero.png'
import rectangle from './assets/Rectangle.svg'


function Introduction(){

   
    return(
        <>
        <div className="introduction-container">
            <div className="introduction">
            <p>Jistota v číslech, klid v podnikání.</p>
        </div>

        <div className="desc">
            <h2>Daně, účetnictví, poradenství.<br /> Přesně. Spolehlivě. Bez stresu.</h2>

            <img src={rectangle} />

            <p>Daně, které jsou v pořádku. A klid, který si zasloužíte. <br /> Postarám se o vaše daňové povinnosti, abyste <br />se mohli soustředit na svůj byznys.</p>
        </div>

        <div className="buttons">
            <a href="#contact" className="button">Kontaktujte mě</a>
            <a href="#services" className="services">Zjistit víc</a> 
        </div>
        <div className="desc-photo">
            <img src={grafika} />
        </div>
        </div>
        </>
    );
}

export default Introduction