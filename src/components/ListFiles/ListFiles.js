import NavMenu from "../NavMenu/NavMenu";
import firebase from "../../utils/config";
import { useState } from "react";
import styles from "./ListFiles.module.css";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Modal from "../Modal/Modal";
import today from "../../utils/dateUtils";

function ListFiles(props) {
  const [sortDate, setSortDate] = useState(today);
  const [sortNurse, setSortNurse] = useState("");
  const [isChange, setIsChange] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentClient, setCurrentClient] = useState({});
  const change = () => setIsChange(!isChange);
  const clientList = props.useClients(sortDate, sortNurse, isChange);
  const openModal = () => setShowModal(!showModal);

  const deleteClients = (props) => {
    firebase
      .firestore()
      .collection("clients")
      .doc(props.id)
      .delete()
      .catch((e) => {
        alert("Nešto je pošlo po zlu");
      });
    setIsChange(!isChange);
  };
  const updateClients = (props) => {
    setCurrentClient(props);
    openModal();
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <NavMenu></NavMenu>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currentClient={currentClient}
        isChange={change}
      ></Modal>
      <div className={styles.datePicker}>
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
      <div className ={styles.tableDiv}>
        <table className={styles.responsivetable}>
          <thead>
            <tr>
              <th>RB</th>
              <th>Ime i prezime</th>
              <th>Datum rođenja</th>
              <th>OIB</th>
              <th>Broj telefona</th>
              <th>Email</th>
              <th>Ulica</th>
              <th>Grad</th>
              <th>Vrsta testiranja</th>
              <th>Jezik</th>
              <th>Datum testiranja</th>
              <th>Vrsta računa</th>
              <th>Cijena</th>
              <th>Posebne napomene</th>
              <th>Provoditelj</th>
              <th>Preferirano vrijeme</th>
              <th>Uredi</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(clientList).map((id) => {
              return (
                <tr key={id}>
                  <td data-label="RB">{clientList[id].rb}</td>
                  <td data-label="Ime i prezime">{clientList[id].name}</td>
                  <td data-label="Datum rođenja">
                    {clientList[id].dateofbirth}
                  </td>
                  <td data-label="OIB">{clientList[id].oib}</td>
                  <td data-label="Broj mobitela">{clientList[id].number}</td>
                  <td data-label="Email">{clientList[id].email}</td>
                  <td data-label="Ulica">{clientList[id].street}</td>
                  <td data-label="Grad">{clientList[id].town}</td>
                  <td data-label="Vrsta testiranja">
                    {clientList[id].typeoftesting}
                  </td>
                  <td data-label="Jezik">{clientList[id].language}</td>
                  <td data-label="Datum testiranja">
                    {clientList[id].dateoftesting}
                  </td>
                  <td data-label="Vrsta računa">{clientList[id].typeofbill}</td>
                  <td data-label="Cijena">{clientList[id].price}</td>
                  <td data-label="Posebne napomene">
                    {clientList[id].special}
                  </td>
                  <td data-label="Provoditelj">{clientList[id].nurse}</td>
                  <td data-label="Preferirano vrijeme">{clientList[id].prefTime}</td>
                  <td>
                    <button>
                      <i>
                        <CreateIcon
                          onClick={() => updateClients(clientList[id])}
                        />
                      </i>
                    </button>

                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this item?"
                          )
                        )
                          deleteClients(clientList[id]);
                      }}
                    >
                      <i>
                        <DeleteForeverIcon />
                      </i>
                    </button>
                  </td>
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
