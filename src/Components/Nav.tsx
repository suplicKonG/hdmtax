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
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, window.scrollY);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`nav ${className}`}>
      {!isFooter && (
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      )}

<ul className={`menu ${isFooter ? "footer-menu" : ""} ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#" onClick={handleScrollTop}>DOMŮ</a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>O MNĚ</a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsOpen(false)}>SLUŽBY</a>
        </li>
        <li>
          <a href="#reference" onClick={() => setIsOpen(false)}>REFERENCE</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>KONTAKT</a>
        </li>
      </ul>
    </nav>
  );
};




export default Nav