import './index.css'
import { useState, useEffect } from "react";


type NavProps = {
  isFooter?: boolean;
  className?: string;
};

const Nav: React.FC<NavProps> = ({ isFooter = false, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

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
        <li><a href="#home" onClick={() => setIsOpen(false)}>DOMŮ</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>O MNĚ</a></li>
        <li><a href="#sluzby" onClick={() => setIsOpen(false)}>SLUŽBY</a></li>
        <li><a href="#reference" onClick={() => setIsOpen(false)}>REFERENCE</a></li>
        <li><a href="#kontakt" onClick={() => setIsOpen(false)}>KONTAKT</a></li>
      </ul>
    </nav>
  );
};




export default Nav