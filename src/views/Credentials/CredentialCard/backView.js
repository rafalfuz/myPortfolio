import React from "react";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const backCardStyles = {
  credentialBackTitle: {
    fontSize: "18px",
  },
  credentialTitleHr: {
    width: "320px",
  },
  credentialIcon: {
    fontSize: "51px",
    color: "#fbd7b4",
  },
};

export const BackCardView = ({ link }) => (
  <>
    <div style={backCardStyles.credentialBackTitle} className="credentialIcon">
      CERTYFIKAT
      <hr style={backCardStyles.credentialTitleHr} />
    </div>

    <a
      href={link}
      target="blank"
      rel="noopener noreferrer"
      title="Otwórz w nowej karcie"
    >
      {" "}
      <HiOutlineDocumentSearch style={backCardStyles.credentialIcon} />
    </a>
  </>
);
