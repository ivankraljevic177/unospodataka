import NavMenu from "../NavMenu/NavMenu";
import {  useState } from "react";
import styles from "./ListClients.module.css";

var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

function ListFiles(props) {
  

  const [sortDate, setSortDate] = useState(today);
  const clientList = props.useClients(sortDate);

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
      <div>
        <table className={styles.responsivetable}>
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
                  <td data-label="Ime i prezime">{clientList[id].name}</td>
                  <td data-label="Email">{clientList[id].email}</td>
                  <td data-label="Vrsta računa">{clientList[id].typeofbill}</td>
                  <td data-label="Cijena">{clientList[id].price}</td>
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
