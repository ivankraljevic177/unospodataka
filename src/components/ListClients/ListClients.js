import NavMenu from "../NavMenu/NavMenu";
import {  useState } from "react";
import styles from "./ListClients.module.css";
import today from "../../utils/dateUtils";
import CardDetails from "../Card/Card";

function ListClients(props) {

  const [sortNurse, setSortNurse] = useState("");
  const [sortDate, setSortDate] = useState(today);
  const clientList = props.useClients(sortDate, sortNurse);
  

  return (
    <div>
      <NavMenu></NavMenu>
      <div className={styles.bodyDiv}>
      <div className = {styles.datePicker}>
      <label>Sortiraj po datumu: </label>
        <input
          name="sortingDate"
          type="date"
          defaultValue={today}
          onChange={(e) => setSortDate(e.target.value)}
        ></input>
        <label> Sortiraj po provoditelju: </label>
        <input type="text" name = "nurse" list="exec" className={styles.form} onChange={(e) => setSortNurse(e.target.value)} placeholder="Provoditelj" />
          <datalist id="exec">
            <option>M</option>
            <option>S</option>
            <option>R</option>
            <option>J</option>
            <option>Ivan Maleš</option>
          </datalist>
      </div>
      <div className={styles.cardDiv}>
      {Object.keys(clientList).map((id) => {
          return (
            <CardDetails key={id} clientList={clientList[id]} ></CardDetails>
          );
        })}
      </div>
      </div>
    </div>
  );
}
export default ListClients;
