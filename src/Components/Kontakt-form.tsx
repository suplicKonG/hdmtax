import { useState} from "react";

function KontaktForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Odeslaná data:", formData);
  };

  return (
    <div className="kontakt-form-wrapper">
      <div className="form-container" id="kontakt-form">
        <h2>Potřebujete poradit s daněmi?<br /> Jsem tu pro vás.</h2>
        <p className="form-text">Napište mi a domluvíme si konzultaci.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Jméno*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Vaše jméno*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="underline"></span>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="např: +420 777 777 777"
              value={formData.phone}
              onChange={handleChange}
            />
            <span className="underline"></span>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Váš e-mail*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="underline"></span>
          </div>

          <div className="form-group">
            <label htmlFor="message">Vaše zpráva*</label>
            <textarea className="text-area"
              id="message"
              name="message"
              placeholder="Dejte mi vědět, s čím potřebujete poradit..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <span className="underline"></span>
          </div>

          <button type="submit">Ozvěte se mi</button>
        </form>
      </div>
    </div>
  );
}


export default KontaktForm;
