import "./Team.css";
import CollaboratorCard from "../CollaboratorCard/CollaboratorCard";

const Team = (props) => {
  return (
    props.collaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="collaborators">
          {props.collaborators.map((collaborator) => (
            <CollaboratorCard
              back={props.primaryColor}
              key={collaborator.name}
              name={collaborator.name}
              position={collaborator.position}
              photo={collaborator.photo}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
