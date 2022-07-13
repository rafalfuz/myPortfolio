import React from "react";
import { HiOutlineDocumentSearch } from "react-icons/hi";

export const BackCardView = ({ link }) => (
  <>
    <div className="credentialIcon">CERTYFIKAT</div>

    <a href={link}>
      {" "}
      <HiOutlineDocumentSearch style={{ fontSize: "32px" }} />
    </a>
  </>
);
