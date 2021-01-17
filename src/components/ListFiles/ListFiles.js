import NavMenu from "../NavMenu/NavMenu";
import firebase from "../../utils/config";
import {  useState } from "react";
import styles from "./ListFiles.module.css";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Modal from "../Modal/Modal"

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;

function ListFiles(props) {
  const [sortDate, setSortDate] = useState(today);
  const [showModal, setShowModal] = useState(false);
  const [currentClient, setCurrentClient] = useState({});
  const clientList = props.useClients(sortDate);
  const openModal = () => setShowModal(!showModal)

  const deleteClients =(props)=> {
    
    firebase.firestore().collection("clients").doc(props.id).delete().catch((e)=>{alert("Nešto je pošlo po zlu")})
  }
  const updateClients=(props)=>{

    setCurrentClient(props)
    openModal()



  }


  return (
    <div>
      <NavMenu></NavMenu>
      <Modal showModal={showModal} setShowModal={setShowModal} currentClient={currentClient}></Modal>
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
              <th>Posebne napomene</th>
              <th>Cijena</th>
              <th>Uredi</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(clientList).map((id) => {
              return (
                <tr key={id}>
                  <td data-label="Ime i prezime">{clientList[id].name}</td>
                  <td data-label="Datum rođenja">{clientList[id].dateofbirth}</td>
                  <td data-label="OIB">{clientList[id].oib}</td>
                  <td data-label="Broj mobitela">{clientList[id].number}</td>
                  <td data-label="Email">{clientList[id].email}</td>
                  <td data-label="Ulica">{clientList[id].street}</td>
                  <td data-label="Grad">{clientList[id].town}</td>
                  <td data-label="Vrsta testiranja">{clientList[id].typeoftesting}</td>
                  <td data-label="Jezik">{clientList[id].language}</td>
                  <td data-label="Datum testiranja">{clientList[id].dateoftesting}</td>
                  <td data-label="Vrsta računa">{clientList[id].typeofbill}</td>
                  <td data-label="Cijena">{clientList[id].price}</td>
                  <td data-label="Posebne napomene">{clientList[id].special}</td>
                  

                  <td>
                    <button>
                      <i>
                        <CreateIcon onClick={()=>updateClients(clientList[id])}/>
                      </i>
                    </button>
                    
                    <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteClients(clientList[id])} } >
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