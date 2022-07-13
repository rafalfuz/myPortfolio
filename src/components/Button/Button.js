import "./Button.css";

export const Button = ({ text, height, width, onClick, className }) => (
  <button onClick={onClick} className={`${className} btn`}>
    {text}
  </button>
);
