import "./Formulary.css";
import TextField from "../TextField/TextField";
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (e) => {
    e.preventDefault();
    props.toRegisteredCollaborator({
      name,
      position,
      photo,
      team,
    });
    setName("");
    setPosition("");
    setPhoto("");
    setTeam("");
  };

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
        <DropdownList
          label="Team"
          itens={props.teams}
          mandatory={true}
          value={team}
          onUpdate={(value) => setTeam(value)}
        />
        <Button>Create Card</Button>
      </form>
    </section>
  );
};

export default Form;
