import   { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Home/Home";
import ListFiles from '../ListFiles/ListFiles';
import ListClients from '../ListClients/ListClients'
import firebase from "../../utils/config";
import './App.css';

function App() {

  const handleChange=(client)=>{

    console.log(client.id)
    const db = firebase.firestore()
    db.collection("clients").doc(client.id).delete()
    
  }


  return (
    <Router>
      
      <Route exact path='/' component = {Home} />
      <Route exact path='/listabriseva' render={()=>(<div><ListFiles handleChange={handleChange}/></div>)} />
      <Route exact path='/listaracuna' component = {ListClients} />
      
    </Router>
  );
}

export default App;
