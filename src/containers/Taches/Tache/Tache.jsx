import React from "react";
import Bouton from "../../../components/Bouton/Bouton";

const Tache=(props)=>{
return(
    <>
     
      <td>{props.boulot}</td>
      <td>{props.auteur}</td>
      <td>{props.date}</td>
      <td><Bouton buttonClass={"success"} click={props.modif}>
        Modifier
      </Bouton></td>
      <td><Bouton buttonClass={"danger"} click={props.suppression}>
        Supprimer
      </Bouton></td>
    
    </>
)
};
export default Tache;