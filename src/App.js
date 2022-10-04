import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import Form from "./components/Form/Formulary";
import Team from "./components/Team/Team";

function App() {
  const teams = [
    {
      name: "Back-End",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX & Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Management",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const toNewAddedColaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      
      <Form
        teams={teams.map((team) => team.name)}
        toRegisteredCollaborator={(collaborator) =>
          toNewAddedColaborator(collaborator)
        }
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
