import React, { Component } from "react";
import Bouton from "../Bouton/Bouton";
import {withFormik} from "formik";
import * as Yup from "yup";

class Formulaire extends Component{

  render(){
return(
    <>
<div className="form-group">
    <label className="form-label" htmlFor="tache">Tache</label>
    <input className="form-control" id="tache" name="tache" type="text" placeholder="Entrez votre tâche..." value={this.props.values.tache} onChange={this.props.handleChange} onBlur={this.props.handleBlur}/>
    {this.props.errors.tache && this.props.touched.tache && <b style={{color:"red"}}>{this.props.errors.tache}</b>}
</div>

<div className="form-group">
    <label className="form-label" htmlFor="nom">Nom</label>
    <input className="form-control" id="nom" type="text" name="nom" placeholder="Entrez votre nom..." value={this.props.values.nom} onChange={this.props.handleChange} onBlur={this.props.handleBlur}/>
    {this.props.errors.nom && this.props.touched.nom && <b style={{color:"red"}}>{this.props.errors.nom}</b>}
</div>

<div className="form-group">
    <label className="form-label" htmlFor="date">Date</label>
    <input className="form-control" id="date" type="date" name="date" value={this.props.values.date} onChange={this.props.handleChange} onBlur={this.props.handleBlur}/>
</div>
    <Bouton buttonClass={"warning w-100"} click={this.props.handleSubmit}>
    Ajouter Tache
    </Bouton>
    </>
)
}
};
export default withFormik({
  mapPropsToValues:()=>({
    tache:null,
    nom:null,
    date:null
  }),
  
  validationSchema : Yup.object().shape({
    tache: Yup.string().min(5,"Entrez une tache avec plus de 5 caracteres").max(100,"La tache doit avoir moins de 100 caracteres").required("Tache obligatoire"),
    nom: Yup.string().min(3,"Entrez un nom avec plus de 3 caracteres").max(50,"La tache nom avoir moins de 50 caracteres").required("Nom obligatoire")
  }),

  handleSubmit:(values,{props})=>{
    props.validation(values.tache, values.nom, values.date);
  }
}) (Formulaire);