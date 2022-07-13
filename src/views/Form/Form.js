import React from "react";
import { SiGmail } from "react-icons/si";

import "./Form.css";
export const Form = () => {
  return (
    <>
      <section className="formSectionWrapper" name="contactSection">
        <div className="formTitle">Formularz</div>
        <div className="formContainer">
          <div className="formDescription">
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
          <form className="formRubric">
            <input className="inputForm name" type="text"></input>
            <input className="inputForm contact" type="text"></input>
            <textarea className="inputForm text" type="textarea"></textarea>
            <button className="formBtnSubmit">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};
