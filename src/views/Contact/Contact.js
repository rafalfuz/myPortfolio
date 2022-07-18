import React from "react";
import { ContactForm } from "./Form/ContactForm";
import {
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiFacebook,
  SiWhatsapp,
} from "react-icons/si";

import "./Contact.css";
export const Contact = () => {
  return (
    <>
      <section className="contactSectionWrapper" name="contactSection">
        <div className="contactTitle">Kontakt</div>
        <div className="contactContainer">
          <div className="contactDescription">
            <h4 className="contactDescription--title">Hello work!</h4>
            <h5 className="contactDescription--subtitle">
              Nie wahaj się. To Cię nic nie kosztuje..
            </h5>
            <p className="contactDescription--text">
              Zastanawiasz się jak jak zaistnieć w internecie? Poszukujesz kogoś
              kto stworzy dla Ciebie ładną i ciekawą stronę internetową? Szukasz
              frontend developera do swojego zespołu?
            </p>
            <p className="contactDescription--text">
              Skorzystaj z formularza i napisz do mnie a chętnie skontaktuję się
              z Tobą!
            </p>
            <ul className="iconBox">
              <li className="contactIconCircle">
                <a
                  href="https://www.linkedin.com/in/rafał-fuz-4855b722b/"
                  target="blank"
                  rel="noopener noreferrer"
                  className="contactLink contactLink--linkedin"
                >
                  <SiLinkedin />
                </a>
              </li>
              <li className="contactIconCircle">
                <a
                  href="mailto:rafalfuz@gmail.com"
                  className="contactLink contactLink--gmail"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="contactIconCircle">
                <a
                  href="https://www.facebook.com/rafalfuz/"
                  target="blank"
                  rel="noopener noreferrer"
                  className="contactLink contactLink--facebook"
                >
                  <SiFacebook />
                </a>
              </li>
              <li className="contactIconCircle">
                <a
                  href="https://github.com/rafalfuz"
                  target="blank"
                  rel="noopener noreferrer"
                  className="contactLink contactLink--github"
                >
                  <SiGithub />
                </a>
              </li>
              <li className="contactIconCircle">
                <a
                  href="https://wa.me/48784357983"
                  className="contactLink contactLink--whatsapp"
                >
                  <SiWhatsapp />
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

//#04284b
//#FBD7B4
//#044b4b;
