import prof from './assets/photo_large.png'
import rectangle from './assets/Rectangle.svg'
import komora from './assets/komora.png'
import robe from './assets/robe_logo.png'
import husquarna from './assets/husqarna_logo.png'
import fno from './assets/fno_logo.png'
import bfi from './assets/bfi_logo.png'
import gtk from './assets/GTKFIN_logo 1.png'
import prosperita from './assets/prosperita_logo.png'
import karelroden from './assets/karel_roden_logo.png'
import cz from './assets/cz_logo.png'
import brilas from './assets/brilas_logo.png'
import vinium from './assets/vinium_logo.png'
import manutan from './assets/manutan_logo.png'
import penguins from './assets/penguins_ski_club_logo.png'
import gmproject from './assets/gmproject_logo.png'
import React from 'react'
import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

function Reference(){

  const [yearsState, setYearsState] = useState(0);
  const [yearsPrivate, setYearsPrivate] = useState(0);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setYearsState(5);
      setYearsPrivate(20);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

    return(
        <>
        <div className="consultation-container">
        <div className="consultation">
            <img src={prof} />
            <div className="text">
            <p>Pomohu vám s daněmi, <br />
               abyste se mohli soustředit <br />
              na to, co děláte nejlépe.</p>

              <a href="#contact-form" className="button">Domluvme si konzultaci</a>
            </div>
        </div>
    </div>


    <div id="reference" className="reference">
        <p className="ref-p">REFERENCE</p>
        <h2 className="ref-text">Proč spolupracovat<br />
           právě se mnou</h2>

        <img src={rectangle} />

        <p className="txt">Každému klientovi věnuji individuální péči, abych našel řešení,<br /> které nejlépe odpovídá jeho potřebám.</p>

<div className="experience">
    <h2>Zkušenosti ze státní i soukromé sféry</h2>
</div>
<div className="experience-container">
     
    <div className="experience-box">
            <p className="years">
              <Odometer value={yearsState} format="d" duration={2000} /> let praxe
            </p>
            <p className="description">ve státní správě</p>
        </div> 
    

     
    <div className="experience-box">
            <p className="years">
              <Odometer value={yearsPrivate} format="d" duration={2000} /> let praxe
            </p>
            <p className="description">v soukromé sféře</p>
        </div>

         
        <div className="experience-box certification">
            <img className="komora-img" src={komora} alt="Komora daňových poradců ČR" />
            <p className="komora-p">Jsem certifikovaným členem<br /> 
            Komory daňových poradců ČR.</p>
        </div>
    </div>
</div>

        <div className="logo-container">
        <p>Za svou kariéru jsem pomohl<br /> 
        mnoha skvělým firmám.</p>
        
<div className="logo-wrapper">
    <div className="logo-row left">
      <div className="logo-track">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <img src={robe} alt="Robe" />
            <img src={husquarna} alt="Husquarna Group" />
            <img src={fno} alt="Fakultní nemocnice Ostrava" />
            <img src={bfi} alt="BikeFun International" />
            <img src={gtk} alt="GTK FIN s.r.o." />
            <img src={prosperita} alt="PROSPERITA" />
            <img src={karelroden} alt="KAREL RODEN" />
          </React.Fragment>
        ))}
      </div>
    </div>

    <div className="logo-row right">
      <div className="logo-track">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <img src={cz} alt="ČZ" />
            <img src={brilas} alt="BRILAS" />
            <img src={vinium} alt="VINIUM Velké Pavlovice" />
            <img src={manutan} alt="Manutan" />
            <img src={penguins} alt="PENGUIN'S SKI CLUB" />
            <img src={gmproject} alt="GMProject" />
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</div>
</>
);
}

export default Reference