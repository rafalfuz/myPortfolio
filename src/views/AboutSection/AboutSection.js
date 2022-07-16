import React from "react";
import picture from "../../assets/ProfilePicture.png";
import { Button } from "../../components/Button/Button";
import "./AboutSection.css";

export const About = () => {
  return (
    <section className="aboutWrapper" name="aboutSection">
      <h2 className="aboutTitle">About</h2>
      <div className="personalDatas">
        <div className="personalLeft">
          <div className="personalTag">NAME</div>
          <p className="personalInfo personalName">Rafał Fuz</p>
          <div className="personalTag">BIRTH</div>
          <p className="personalInfo personalBirthDate">10.07.1990</p>
          <div className="personalTag">BIRTH PLACE</div>
          <p className="personalInfo personalBirthCity">Płock</p>
        </div>
        <div className="personalCircle">
          <img src={picture} alt="selfie" className="circlePhoto"></img>
        </div>
        <div className="personalRight">
          <div className="personalTag">MAIL</div>
          <a
            href="mailto:rafalfuz@gmail.com"
            className="personalInfo personalMail"
          >
            rafalfuz@gmail.com
          </a>
          <div className="personalTag">PHONE</div>
          <a
            className="personalInfo personalPhoneNumber"
            href="tel:+48784357983"
          >
            784357983
          </a>
        </div>
      </div>
      <p className="personalDescription">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        ducimus atque odio, ex delectus voluptatem eligendi nobis. Voluptatum,
        hic facere consectetur repudiandae autem eius alias provident quos ad
        accusantium eligendi! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Provident ducimus atque odio, ex delectus voluptatem
        eligendi nobis. Voluptatum, hic facere consectetur repudiandae autem
        eius alias provident quos ad accusantium eligendi
      </p>
      <Button
        text="CV"
        onClick={() => console.log("Download Cv")}
        className="btnCv"
      />
    </section>
  );
};
