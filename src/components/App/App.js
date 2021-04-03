import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../Home/Home";
import ListFiles from "../ListFiles/ListFiles";
import ListClients from "../ListClients/ListClients";
import firebase from "../../utils/config";
import "./App.css";
import today from "../../utils/dateUtils";


function useClients(sortDate = today, sortNurse = "", isChange) {
  const [clientList, setClientList] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (sortNurse !== "") {
        const db = firebase.firestore();
        const data = await db
          .collection("clients")
          .where("dateoftesting", "==", sortDate)
          .where("nurse", "==", sortNurse)
          .orderBy("prefTime")
          .get();
        setClientList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } else {
        const db = firebase.firestore();
        const data = await db
          .collection("clients")
          .where("dateoftesting", "==", sortDate)
          .orderBy("prefTime")
          .get();
        setClientList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };

    fetchData();
  }, [sortDate, sortNurse, isChange]);

  return clientList;
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/listabriseva"
        render={() => (
          <div>
            <ListFiles useClients={useClients} />
          </div>
        )}
      />
      <Route
        exact
        path="/listaracuna"
        render={() => (
          <div>
            <ListClients useClients={useClients} />
          </div>
        )}
      />
    </Router>
  );
}

export default App;
