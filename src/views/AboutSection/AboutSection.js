import React from "react";
import picture from "../../assets/ProfilePicture.png";
import { Button } from "../../components/Button/Button";
import "./AboutSection.css";

export const About = () => {
  return (
    <section className="aboutWrapper" name="aboutSection">
      <h2 className="aboutTitle">O mnie</h2>
      <div className="personalDatas">
        <div className="personalLeft">
          <div className="personalTag">IMIĘ I NAZWISKO</div>
          <p className="personalInfo personalName">Rafał Fuz</p>
          <div className="personalTag">DATA URODZENIA</div>
          <p className="personalInfo personalBirthDate">10.07.1990</p>
          <div className="personalTag">MIEJSCE ZAMIESZKANIA</div>
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
          <div className="personalTag">NUMER TELEFONU/WHATSAPP</div>
          <a
            className="personalInfo personalPhoneNumber"
            href="tel:+48784357983"
          >
            784357983
          </a>
        </div>
      </div>
      <p className="personalDescription">
        Cześć. Po pierwsze, miło mi gościć Cię na swojej stronie. Po drugie,
        skoro tu jesteś zapewne chciałbyś się dowiedzieć czegoś o mnie. Od ponad
        10 lat zajmuję się pracą w kinie, w okresie pandemii kiedy zaczęto
        wprowadzać obostrzenia i tymczasowo zamykać kina, wolny czas poświęciłem
        nauce programowania. Na pierwszy ogień trafił kanał na YouTube "Pasja
        Informatyki", to tam dowiedziałem się o bardzo ogólnych podstawach
        programowania na bazie C++, następne przeszedłem do tutoriali o HTML,
        CSS i JavaScripcie - wiecej o kursach w sekcji Kwalifikacje
      </p>
      <Button
        text="CV"
        onClick={() => console.log("Download Cv")}
        className="btnCv"
      />
    </section>
  );
};
