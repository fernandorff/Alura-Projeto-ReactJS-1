import "./Formulary.css";
import TextField from "../TextField/TextField";
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";
import { useState } from "react";

const Form = () => {
  const teams = [
    "Back-End",
    "Front-End",
    "Data Science",
    "Devops",
    "UX & Design",
    "Mobile",
    "Management",
  ];

  const onSave = (e) => {
    e.preventDefault();
    console.log("Form submited => ", name, position, photo);
  };

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState("");

  return (
    <section className="formulary">
      <form onSubmit={onSave}>
        <h2>Fill out the information to create the collaborator card</h2>
        <TextField
          mandatory={true}
          label="Name"
          placeholder="type your name here"
          value={name}
          onUpdate={(value) => setName(value)}
        />
        <TextField
          mandatory={true}
          label="Position"
          placeholder="type your position here"
          value={position}
          onUpdate={(value) => setPosition(value)}
        />
        <TextField
          mandatory={true}
          label="Photo"
          placeholder="insert the image link here"
          value={photo}
          onUpdate={(value) => setPhoto(value)}
        />
        <DropdownList label="Teams" itens={teams} />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
