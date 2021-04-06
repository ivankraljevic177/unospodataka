import NavMenu from "../NavMenu/NavMenu";
import {  useState } from "react";
import styles from "./ListClients.module.css";
import today from "../../utils/dateUtils";
import Grid from "@material-ui/core";
import CardDetails from "../CardDetails/CardDetails";

function ListClients(props) {

  const sortNurse = "";
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
      </div>
      <div>
        <CardDetails clientList = {clientList}></CardDetails>
      </div>
      </div>
    </div>
  );
}
export default ListClients;
