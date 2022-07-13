export const FrontCardView = ({ title, publisher, year }) => (
  <>
    <div className="credentialTitle">{title}</div>
    <div className="credentialPublisher">{publisher}</div>
    <div className="credentialYear">Rok: {year}</div>
  </>
);
