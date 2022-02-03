import React, { Component } from "react";
import Bouton from "../Bouton/Bouton";

class FormulaireModifier extends Component{
  state={
    tacheSaisi:this.props.tache,
    nomSaisi:this.props.nom,
    dateSaisi:this.props.date,
    fermerModif:false
  }

  modification=()=>{
    this.props.validModif(this.props.id,this.state.tacheSaisi,this.state.nomSaisi,this.state.dateSaisi,);
  }

  fermerModification=()=>{
    this.setState({fermerModif:false});
  }
  render(){
    
  return(
    <>
      <td><input  id="tache" type="text" className="form-control" value={this.state.tacheSaisi} onChange={(event)=>this.setState({tacheSaisi:event.target.value})}/></td>
      <td><input id="nom" type="text" className="form-control" value={this.state.nomSaisi} onChange={(event)=>this.setState({nomSaisi:event.target.value})}/></td>
      <td><input  id="date" type="text" className="form-control" value={this.state.dateSaisi} onChange={(event)=>this.setState({dateSaisi:event.target.value})}/></td>
      <td><Bouton buttonClass={"success"} click={this.modification}>
        Valider
      </Bouton></td>
    </>
)
}
};
export default FormulaireModifier;