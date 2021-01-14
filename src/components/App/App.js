import   { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Home/Home";
import ListFiles from '../ListFiles/ListFiles';
import ListClients from '../ListClients/ListClients'
import './App.css';

function App() {
  return (
    <Router>
      
      <Route exact path='/' component = {Home} />
      <Route exact path='/listabriseva' component = {ListFiles} />
      <Route exact path='/listaracuna' component = {ListClients} />
      
    </Router>
  );
}

export default App;
