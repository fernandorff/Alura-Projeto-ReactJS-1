import "./TextField.css";

const TextField = (props) => {
  console.log(props.label);
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input placeholder="Digite o seu nome" />
    </div>
  );
};

export default TextField;
