import {  useState } from "react";
import styles from "./CardDetails.module.css";
import today from "../../utils/dateUtils";
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid";

function CardDetails(props) {


  return (
    <div className={styles.root}>
        <Grid container spacing={2}>
           
            {Object.keys(props.clientList).map((id) => {
              return (
                <Grid item xs={12}>
                <Paper key={id}className={styles.gridItem}>{props.clientList[id].name} {props.clientList[id].price}</Paper>
                </Grid> 
              );
            })}
        </Grid>
    </div>
  );
}
export default CardDetails;
