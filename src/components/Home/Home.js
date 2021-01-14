import React from "react";
import { useHistory } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import { useForm } from "react-hook-form";
import styles from "./Home.module.css";
import firebase from "../../utils/config";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;


const Home = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    firebase.firestore().collection("clients").add(e);
    history.push("/listabriseva");
  };

  return (
    <div>
      <NavMenu></NavMenu>
      <div className={styles.formdiv}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.form}
            name="name"
            ref={register}
            placeholder="Ime i prezime"
          ></input>
          <input
            className={styles.form}
            name="dateofbirth"
            type="date"
            ref={register}
            defaultValue="1990-01-01" 
          ></input>
          <input
            className={styles.form}
            name="oib"
            type="number"
            ref={register}
            placeholder="OIB"
          ></input>
          <input
            className={styles.form}
            name="number"
            ref={register}
            type="number"
            placeholder="Broj telefona"
          ></input>
          <input
            className={styles.form}
            name="email"
            type="email"
            ref={register}
            placeholder="Email"
          ></input>
          <input
            className={styles.form}
            name="street"
            ref={register}
            placeholder="Ulica"
          ></input>
          <input
            className={styles.form}
            name="town"
            ref={register}
            placeholder="Grad"
          ></input>
          <select name = "typeoftesting" className = {styles.form} ref={register} >
        <option value="PCR Higijenski">PCR Higijenski</option>
        <option value="PCR Virion">PCR Virion</option>
        <option value="Brzi antigenski">Brzi antigenski</option>
      </select>
      <select name = "language" className = {styles.form} ref={register} >
        <option value="hrvatski">hrvatski</option>
        <option value="engleski">engleski</option>
        <option value="njemački">njemački</option>
        <option value="talijanski">talijanski</option>
      </select>
          <input
            className={styles.form}
            name="dateoftesting"
            type = "date"
            ref={register}
            defaultValue={today}
          ></input>
          <select name = "typeofbill" className = {styles.form} ref={register} >
        <option value="transakcijski">transakcijski</option>
        <option value="kartica">kartica</option>
        <option value="gotovina">gotovina</option>
      </select>
          <input
            className={styles.form}
            name="price"
            ref={register}
            placeholder="Cijena"
          ></input>
          <input
            className={styles.form}
            name="special"
            ref={register}
            placeholder="Posebne napomene"
          ></input>
          <button className={styles.submitBtn}>Spremi</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
