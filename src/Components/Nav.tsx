import './index.css'
import { useState } from "react";


type NavProps = {
  isFooter?: boolean;
  className?: string;
};

const Nav: React.FC<NavProps> = ({ isFooter = false, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`nav ${className}`}>
      {!isFooter && (
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      )}

      <ul className={isFooter ? "menu footer-menu" : isOpen ? "menu open" : "menu"}>
        <li><a href="#home">DOMŮ</a></li>
        <li><a href="#about">O MNĚ</a></li>
        <li><a href="#sluzby">SLUŽBY</a></li>
        <li><a href="#reference">REFERENCE</a></li>
        <li><a href="#kontakt">KONTAKT</a></li>
      </ul>
    </nav>
  );
};



export default Nav