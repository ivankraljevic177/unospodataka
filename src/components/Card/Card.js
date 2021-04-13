import { useEffect, useState } from "react";
import styles from "./Card.module.css";
//import today from "../../utils/dateUtils";
import firebase from "../../utils/config";

function Card(props) {
  const [done, setDone] = useState(false);

  useEffect(()=>{
    if(props.clientList.rb){
      setDone(props.clientList.rb)
    }

  },[props,done]);

  const handleDoneClick = (props) => {
    setDone(!done)
    console.log(done)
    console.log("usa")
    const db = firebase.firestore();
    db.collection("clients")
    .doc(props.id)
    .update({
      rb: !done
    })
    .then(function () {
      alert("Dokument uređen!");
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
    
    
  };
  
  return (
    <div className={styles.main}>
      <div className={done ? styles.card_done : styles.card}>
  <h1>{props.clientList.name}</h1>
  <p className={styles.title}>{props.clientList.street}</p>
  <p>{props.clientList.typeoftesting + " | " + props.clientList.price + " | " + props.clientList.rb}</p>
  <p><button className={styles.btn} onClick={()=>handleDoneClick(props.clientList)}>Odrađeno</button></p>
</div>
    </div>
  );
}
export default Card;
