import NavMenu from "../NavMenu/NavMenu";
import firebase from "../../utils/config";
import { useEffect, useState } from "react";
import styles from "./ListClients.module.css";

function ListFiles() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  const [clientList, setClientList] = useState({});
  const [sortDate, setSortDate] = useState(today);
  useEffect(() => {
    firebase
      .firestore()
      .collection("clients")
      .where("dateoftesting", "==", sortDate)
      .onSnapshot((snapshot) => {
        const newClient = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClientList(newClient);
      });
  }, [sortDate]);

  return (
    <div>
      <NavMenu></NavMenu>
      <div className = {styles.datePicker}>
        <input
          name="sortingDate"
          type="date"
          defaultValue={today}
          onChange={(e) => setSortDate(e.target.value)}
        ></input>
      </div>
      <div className={styles.tableDiv}>
        <table>
          <thead>
            <tr>
              <th>Ime i prezime</th>
              <th>Email</th>
              <th>Vrsta računa</th>
              <th>Cijena</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(clientList).map((id) => {
              return (
                <tr key={id}>
                  <td>{clientList[id].name}</td>
                  <td>{clientList[id].email}</td>
                  <td>{clientList[id].typeofbill}</td>
                  <td>{clientList[id].price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListFiles;
