import './index.css'
import rectangle from './assets/Rectangle.svg'
import { useState } from "react";
import data from './assets/danovepoeradenstvi_icon.svg'
import optimalizace from './assets/danova optimalizace_icon.svg'
import ucetnictvi from './assets/ucetnictvi_icon.svg'
import konzultace from './assets/konzultace_icon.svg'
import plus from './assets/frame_plus.svg'
import minus from './assets/frame_minus.svg'

const accordionData = [
    { title: "Daňové poradenství", content: (<ul className="ul-desc"><li>Analýza daňové situace – Identifikace oblastí pro optimalizaci daní.</li>
                                    <li>Poradenství pro podnikatele a firmy – Individuální přístup k daňovým povinnostem.</li>
                                    <li>Pomoc při daňových kontrolách – Zastupování klienta před úřady.</li>
                                    <li>Plánování daňových povinností – Strategické snížení daňové zátěže.</li>
                                    <li>Daňová legislativa – Sledování změn a jejich implementace do praxe.</li>
                                    </ul>), icon: data},
    { title: "Kontrola a optimalizace daňových nákladů", content: (<ul className="ul-desc"><li>Detailní přezkum účetních dokladů – Odhalení možných úspor.</li>
                                    <li>Optimalizace daňového zatížení – Legální využití daňových výhod.</li>
                                    <li>Identifikace daňových rizik – Prevence chyb vedoucích k sankcím.</li>
                                    <li>Revize DPH a ostatních daní – Kontrola správného výpočtu a podání.</li>
                                    <li>Zpracování daňových přiznání – Kompletní administrativa v souladu s legislativou.</li></ul>
    ), icon: optimalizace},
    { title: "Účetnictví pro firmy", content: <ul className="ul-desc"><li>Komplexní vedení účetnictví – Evidence příjmů, výdajů a majetku.</li>
                                    <li>Zajištění komunikace s finančním úřadem – Podávání přiznání a hlášení.</li>
                                    <li>Individuální účetní reporting – Přehledy a analýzy přizpůsobené potřebám klienta.</li></ul>, icon: ucetnictvi},
    { title: "Konzultace u klienta", content: <ul className="ul-desc"><li>Osobní setkání přímo u vás – Konzultace v prostředí vaší firmy.</li>
                                    <li>Analýza a řešení konkrétních problémů – Individuální přístup na míru.</li>
                                    <li>Podpora při finančních rozhodnutích – Pomoc při klíčových daňových otázkách.</li>
                                    <li>Rychlá reakce na aktuální potřeby – Flexibilní řešení vašich požadavků.</li></ul>, icon: konzultace},
];


function Services() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
    <div className="services-background">
        <div id="services" className="services-container">
            <div className="services">
                <p className="p-services">SLUŽBY</p>
                <h2>Postarám se o vaše daně. <br />Osobně a spolehlivě.</h2> 
                <img src={rectangle} />

                <p className="p-desc">
                    Každému klientovi věnuji individuální péči, abych našel řešení,<br /> které nejlépe odpovídá jeho potřebám.
                </p>
            </div>

            <div className="accordion">
                {accordionData.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index} className="accordion-item">
                            <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <div className="header-content">
                                    <img src={item.icon} alt="Ikona" className="accordion-icon" />
                                    {item.title} 
                                </div>
                                <span className="accordion-toggle">{isOpen ? <img src={minus} /> : <img src={plus} />}</span>
                            </button>

                            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default Services