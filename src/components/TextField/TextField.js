import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const [value, setValue] = useState("");

  const onTyping = (e) => {
    props.onUpdate(e.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyping}
        required={props.mandatory}
        placeholder={`${props.placeholder} . . .`}
      />
    </div>
  );
};

export default TextField;
