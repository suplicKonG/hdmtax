import grafika from './assets/grafika_hero.png'
import rectangle from './assets/Rectangle.svg'


function Uvod(){

   
    return(
        <>
        <div className="uvod-container">
            <div className="uvod">
            <p>Jistota v číslech, klid v podnikání.</p>
        </div>

        <div className="popis">
            <h2>Daně, účetnictví, poradenství.<br /> Přesně. Spolehlivě. Bez stresu.</h2>

            <img src={rectangle} />

            <p>Daně, které jsou v pořádku. A klid, který si zasloužíte. <br /> Postarám se o vaše daňové povinnosti, abyste <br />se mohli soustředit na svůj byznys.</p>
        </div>

        <div className="buttons">
            <a href="#kontakt-form" className="button">Kontaktujte mě</a>
            <a href="#sluzby" className="sluzby">Zjistit víc</a> 
        </div>
        <div className="fotka">
            <img src={grafika} />
        </div>
        </div>
        </>
    );
}

export default Uvod