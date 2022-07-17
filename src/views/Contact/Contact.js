import React from "react";
import { ContactForm } from "./Form/ContactForm";
import { SiGmail } from "react-icons/si";

import "./Contact.css";
export const Contact = () => {
  return (
    <>
      <section className="contactSectionWrapper" name="contactSection">
        <div className="contactTitle">Contact</div>
        <div className="contactContainer">
          <div className="contactDescription">
            <h2>Hello work!</h2>
            <h3>Randomly joke first part</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              assumenda adipisci eveniet expedita, eius odio, sapiente autem
              sequi corrupti officiis nobis tempore, non dolores dolore.
              Eligendi iste laudantium explicabo sunt!
            </p>
            <div className="iconBox">
              <SiGmail />
              <SiGmail />
              <SiGmail />
              <SiGmail />
            </div>
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
