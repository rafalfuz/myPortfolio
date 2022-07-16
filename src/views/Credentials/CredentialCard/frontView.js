const frontCardStyles = {
  credentialTitle: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  credentialTitleHr: {
    width: "320px",
  },
  credentialPublisher: {
    fontWeight: "300",
  },
  credentialYear: {
    fontWeight: "100",
    fontSize: "12px",
  },
};

export const FrontCardView = ({ title, publisher, year }) => (
  <>
    <div style={frontCardStyles.credentialTitle} className="credentialTitle">
      {title}
      <hr style={frontCardStyles.credentialTitleHr} />
    </div>
    <div
      style={frontCardStyles.credentialPublisher}
      className="credentialPublisher"
    >
      {publisher}
    </div>
    <div style={frontCardStyles.credentialYear} className="credentialYear">
      Rok: {year}
    </div>
  </>
);
