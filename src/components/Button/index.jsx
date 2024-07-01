import "./style.css";

const Button = ({ text, icon, event }) => {
  return (
    <button className="btnContainer" onClick={event}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
