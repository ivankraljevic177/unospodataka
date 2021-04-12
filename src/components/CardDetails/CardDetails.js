import { useState } from "react";
import styles from "./CardDetails.module.css";
//import today from "../../utils/dateUtils";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from "@material-ui/core";
import firebase from "../../utils/config";

function CardDetails(props) {
  const [expanded, setExpanded] = useState(false);
  const [done, setDone] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDoneClick = (props) => {
    
  };

  return (
    <div className={styles.rootDiv}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10} sm={6}>
          <Card className={done ? styles.cardStyleDone:styles.cardStyle} raised={true}>
            <CardHeader
              action={
                <IconButton aria-label="Done" onClick={handleDoneClick(props.clientList.rb)} >
                  <DoneIcon />
                </IconButton>
              }
              title={props.clientList.name}
              subheader={
                props.clientList.street +
                " | " +
                props.clientList.typeoftesting +
                " | " +
                props.clientList.price
              }
            />
            <CardActions disableSpacing className={styles.cardBtn}>
              <IconButton aria-label="Edit" >
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="Delete">
                <DeleteForeverIcon />
              </IconButton>
              <IconButton
                className={expanded ? styles.expand : styles.expandOpen}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Datum rođenja: {props.clientList.dateofbirth}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default CardDetails;
