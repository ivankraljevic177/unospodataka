import { React, useRef, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import firebase from "../../utils/config";
import { useForm } from "react-hook-form";
import today from "../../utils/dateUtils";

const Modal = ({ showModal, setShowModal, currentClient, isChange }) => {
  const initalValues = {
    dateoftesting: today,
    name: "",
    dateofbirth: "",
    oib: "",
    number: "",
    email: "",
    street: "",
    town: "",
    typeoftesting: "",
    language: "",
    typeofbill: "",
    price: "",
    special: "",
    nurse: "",
    prefTime: "",
    rb: "",
  };

  useEffect(() => {
    if (currentClient.id == null) {
      setValues({ ...initalValues });
    } else {
      setValues({ ...currentClient });
    }
  }, [currentClient]);

  const [values, setValues] = useState(initalValues);
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (e) => {
    const db = firebase.firestore();
    db.collection("clients")
      .doc(currentClient.id)
      .update(e)
      .then(function () {
        alert("Dokument uređen!");
        isChange();
        setShowModal(false);
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <>
      {showModal ? (
        <div className={styles.modal} ref={modalRef} onClick={closeModal}>
          <div className={styles.modalcontent}>
            <div className={styles.divModal}>
              <form>
                <input
                  className={styles.form}
                  name="dateoftesting"
                  ref={register}
                  type="date"
                  onChange={handleInputChange}
                  value={values.dateoftesting}
                ></input>
                <input
                  className={styles.form}
                  name="name"
                  ref={register}
                  placeholder="Ime i prezime"
                  onChange={handleInputChange}
                  value={values.name}
                ></input>
                <input
                  className={styles.form}
                  name="dateofbirth"
                  ref={register}
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Datum rođenja"
                  value={values.dateofbirth}
                ></input>
                <input
                  className={styles.form}
                  name="oib"
                  ref={register}
                  type="text"
                  placeholder="OIB/MBO/Broj putovnice"
                  onChange={handleInputChange}
                  value={values.oib}
                ></input>
                <input
                  className={styles.form}
                  name="number"
                  ref={register}
                  type="number"
                  placeholder="Broj telefona"
                  onChange={handleInputChange}
                  value={values.number}
                ></input>
                <input
                  className={styles.form}
                  name="email"
                  ref={register}
                  type="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={values.email}
                ></input>
                <input
                  className={styles.form}
                  name="street"
                  ref={register}
                  placeholder="Ulica"
                  onChange={handleInputChange}
                  value={values.street}
                ></input>
                <input
                  className={styles.form}
                  name="town"
                  ref={register}
                  placeholder="Grad"
                  onChange={handleInputChange}
                  value={values.town}
                ></input>
                <select
                  name="typeoftesting"
                  ref={register}
                  className={styles.form}
                  onChange={handleInputChange}
                  value={values.typeoftesting}
                >
                  <option value="PCR Virion">PCR Virion</option>
                  <option value="PCR Higijenski">PCR Higijenski</option>
                  <option value="Brzi antigenski">Brzi antigenski</option>
                  <option value="PCR Labplus">PCR Labplus</option>
                  <option value="PCR Virion hitni">PCR Virion hitni</option>
                  <option value="Serologija">Serologija</option>
                </select>
                <select
                  name="language"
                  ref={register}
                  className={styles.form}
                  onChange={handleInputChange}
                  value={values.language}
                >
                  <option value="hrvatski">hrvatski</option>
                  <option value="engleski">engleski</option>
                  <option value="njemački">njemački</option>
                  <option value="talijanski">talijanski</option>
                </select>
                <select
                  name="typeofbill"
                  ref={register}
                  className={styles.form}
                  onChange={handleInputChange}
                  value={values.typeofbill}
                >
                  <option value="transakcijski">transakcijski</option>
                  <option value="kartica">kartica</option>
                  <option value="gotovina">gotovina</option>
                </select>
                <input
                  className={styles.form}
                  name="price"
                  ref={register}
                  placeholder="Cijena"
                  onChange={handleInputChange}
                  value={values.price}
                ></input>
                <input
                  className={styles.form}
                  name="special"
                  ref={register}
                  placeholder="Posebne napomene"
                  onChange={handleInputChange}
                  value={values.special}
                ></input>
                <input
                  type="text"
                  name="nurse"
                  list="exec"
                  className={styles.form}
                  value={values.nurse}
                  onChange={handleInputChange}
                  ref={register}
                  placeholder="Provoditelj"
                />
                <datalist id="exec">
                  <option>M</option>
                  <option>S</option>
                  <option>R</option>
                  <option>J</option>
                  <option>Ivan Maleš</option>
                </datalist>
                <input
                  className={styles.form}
                  name="prefTime"
                  ref={register}
                  placeholder="Preferirano vrijeme"
                  onChange={handleInputChange}
                  value={values.prefTime}
                ></input>
                <input
                  className={styles.form}
                  name="rb"
                  ref={register}
                  placeholder="RB"
                  onChange={handleInputChange}
                  value={values.rb}
                ></input>
                <button
                  className={styles.submitBtn}
                  onClick={handleSubmit(handleOnSubmit)}
                >
                  Spremi
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
