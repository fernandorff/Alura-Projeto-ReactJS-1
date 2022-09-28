import "./CollaboratorCard.css";

const CollaboratorCard = (props) => {
  return (
    <div className="collaborator-card">
      <div className="header" style={{ backgroundColor: props.back }}>
        <img src={props.photo} alt={props.name}></img>
      </div>
      <div className="footer">
        <h4>{props.name}</h4>
        <h5>{props.position}</h5>
      </div>
    </div>
  );
};

export default CollaboratorCard;
