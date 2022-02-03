import React, {Component}from 'react';
import Titre from './components/Titre/Titre.jsx';
import Bouton from './components/Bouton/Bouton.jsx';
import Taches from './containers/Taches/Taches.jsx';

class App extends Component {

  state={
    ajout:false
  }

  addTache = ()=>{
    this.setState((oldState , props)=>{
      return (
        {ajout:!oldState.ajout}
      )

    })
  }

  render(){
    return (
    <div className="container">
      <Titre>
        ToDoList1.0
      </Titre>
      <Taches ajout={this.state.ajout} fermerAjout={()=>this.setState({ajout:false})}/>
      <Bouton buttonClass={"info w-100"} click={this.addTache}>
        {!this.state.ajout?"Ajouter":"Fermer"}
      </Bouton> 
    </div>
  );
  }
  
}

export default App;
