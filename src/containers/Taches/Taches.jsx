import React, {Component}from 'react';
import Tache from './Tache/Tache';
import Formulaire from '../../components/Formulaire/FormulaireAjout';
import FormulaireModifier from '../../components/Formulaire/FormulaireModifier';
import Alert from '../../components/Alert/Alert';

class Taches extends Component {
    state={
        taches:[
            {id:1, boulot:"Be the best", auteur:"Jean michel meilleur", date:"27/01/2022"},
            {id:2, boulot:"Be positiv", auteur:"Jean philip positif", date:"24/01/2022"},
            {id:3, boulot:"Be nice", auteur:"Jean bernard gentil", date:"29/01/2022"},
            {id:4, boulot:"Stay Cool", auteur:"Jean hugo cool", date:"21/01/2022"}
        ],
        lastIdTache :4,
        idTache:null,
        alertMessage:null
    }
suppressionTache=(id)=>{
 
    const tabIndexTaches = this.state.taches.findIndex((element)=>{
        return element.id ===id;
     })
     const newTabTaches = [...this.state.taches];
     newTabTaches.splice(tabIndexTaches,1);

     this.setState({taches : newTabTaches, alertMessage:"Tache Supprimée"});
};

addTache=(tache, nom, date)=>{
    const newTache = {id:this.state.lastIdTache+1,boulot:tache,auteur:nom, date:date };
    const newListTaches = [...this.state.taches];
    newListTaches.push(newTache);
    this.setState((oldState)=>{
        return(
           {
                alertMessage:"Ajout Effectué",
                taches: newListTaches,
                lastIdTache: oldState.lastIdTache+1
            }
        )
    }
    )
    this.props.fermerAjout();
};

    modificationTache=(id, boulot,auteur,date)=>{
        const tabIndexTaches = this.state.taches.findIndex((element)=>{
            return element.id ===id;
         })
         const newTache = {
             id,
             boulot,
             auteur,
             date
         }
         const newListTaches = [...this.state.taches];
         newListTaches[tabIndexTaches] = newTache;
         this.setState({
             taches:newListTaches,
             idTache:null,
             alertMessage:"Modification effectuée"
         })
    }


render(){
return (
<>
{this.state.alertMessage &&  <Alert>{this.state.alertMessage}</Alert>}
<table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Tache</th>
      <th scope="col">Auteur</th>
      <th scope="col">Date</th>
      <th scope="col" colSpan="2" className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.taches.map(tache=>{
        if(tache.id!==this.state.idTache){
            return(
            <tr className="table-active" key={tache.id}>
                <Tache boulot={tache.boulot} auteur={tache.auteur} date={tache.date} id={tache.id} suppression={()=>this.suppressionTache(tache.id)} modif={()=>this.setState({idTache:tache.id})}/>
            </tr>
            )
    }
    else
    {
        return (
            <tr className="table-active" key={tache.id}>
                <FormulaireModifier
                    id={tache.id}
                    tache={tache.boulot}
                    nom={tache.auteur}
                    date={tache.date}
                    validModif={this.modificationTache}
                />
            </tr>
        )
    }
  })
  }
  </tbody>
</table>
{this.props.ajout?<Formulaire validation={this.addTache}/>:null}

</>
);
}
}
export default Taches;