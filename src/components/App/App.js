import   { BrowserRouter as Router, Route} from 'react-router-dom';
import {useEffect , useState} from 'react';
import Home from "../Home/Home";
import ListFiles from '../ListFiles/ListFiles';
import ListClients from '../ListClients/ListClients'
import firebase from "../../utils/config";
import './App.css';

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

function useClients(sortDate={today}) {
  const [clientList, setClientList] = useState({});

  useEffect(() => {

    const fetchData = async()=>{
      const db = firebase.firestore()
      const data = await db.collection("clients")
      .where("dateoftesting", "==", sortDate).get()
      setClientList(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
      
    fetchData()
  }, [sortDate]);

  return clientList;
}

function App() {

  


  return (
    <Router>
      
      <Route exact path='/' component = {Home} />
      <Route exact path='/listabriseva' render={()=>(<div><ListFiles useClients={useClients}/></div>)} />
      <Route exact path='/listaracuna' render={()=>(<div><ListClients useClients={useClients} /></div>)} />
      
    </Router>
  );
}

export default App;