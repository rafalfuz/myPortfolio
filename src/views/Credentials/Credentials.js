import React from "react";
import { CredentialCard } from "./CredentialCard/CredentialCard";

import "./Credentials.css";

export const Credentials = () => {
  return (
    <section className="credentialsSectionWrapper" name="credentialsSection">
      <h1 className="credentialsTitle">Credentials</h1>
      <div className="credentialsCardsWrapper">
        <div className="box">
          {" "}
          <CredentialCard
            title="Web developer od podstaw w 15 dni"
            publisher="Samuraj Programowania - Udemy"
            year="2020"
            link="https://www.udemy.com/certificate/UC-7c3c0cf8-737a-46be-be42-fcaa619337a6"
          />
        </div>
        <div className="box">
          {" "}
          <CredentialCard
            title="Front-end zaawansowany w 15 dni"
            publisher="Samuraj Programowania - Udemy"
            year="2020"
            link="https://www.udemy.com/certificate/UC-ff3c1404-3192-4772-85cc-c15ea7c6da84"
          />
        </div>
        <div className="box">
          <CredentialCard
            title="Programowanie w JavaScript"
            publisher="Samuraj Programowania - Udemy"
            year="2020"
            link="https://www.udemy.com/certificate/UC-f8fb0cf6-24e0-4680-965d-3f2950c56f69/"
          />
        </div>
        <div className="box">
          {" "}
          <CredentialCard
            title="React od podstaw"
            publisher="Samuraj Programowania - Udemy"
            year="2020"
            link="https://www.udemy.com/certificate/UC-bc7be620-615a-4801-b254-569d787f5018"
          />
        </div>
        <div className="box">
          {" "}
          <CredentialCard
            title="Certyfikat React"
            publisher="Adam Romański aka hello roman - eduweb.pl"
            year="2020"
            link="https://eduweb.pl/profil/133665/certyfikaty/8d22-c9bf-7be1-4cd6/react"
          />
        </div>
      </div>
    </section>
  );
};

//https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/flip-card?file=/src/styles.module.css
//ude.my/UC-bc7be620-615a-4801-b254-569d787f5018
