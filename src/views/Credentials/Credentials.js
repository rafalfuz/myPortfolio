import React from "react";
import { CredentialCard } from "./CredentialCard/CredentialCard";

import "./Credentials.css";

export const Credentials = () => {
  return (
    <section className="credentialsSectionWrapper" name="credentialsSection">
      <h1 className="credentialsTitle">Credentials</h1>
      <div className="credentialsCardsWrapper">
        <div className="box">
          <CredentialCard
            title="Kurs podstawowy web-developper w 15 dni"
            publisher="Udemy.com"
            year="2020"
            link="https://www.google.pl"
          />
        </div>
        <div className="box">
          {" "}
          <CredentialCard
            title="Kurs podstawowy web-developper w 15 dni"
            publisher="Udemy.com"
            year="2020"
            link="https://www.google.pl"
          />
        </div>
        <div className="box">
          {" "}
          <CredentialCard
            title="Kurs podstawowy web-developper w 15 dni"
            publisher="Udemy.com"
            year="2020"
            link="https://www.google.pl"
          />
        </div>
        <div className="box">
          {" "}
          <CredentialCard
            title="Kurs podstawowy web-developper w 15 dni"
            publisher="Udemy.com"
            year="2020"
            link="https://www.google.pl"
          />
        </div>
        <div className="box">
          {" "}
          <CredentialCard
            title="Kurs podstawowy web-developper w 15 dni"
            publisher="Udemy.com"
            year="2020"
            link="https://www.google.pl"
          />
        </div>
      </div>
    </section>
  );
};

//https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/flip-card?file=/src/styles.module.css
