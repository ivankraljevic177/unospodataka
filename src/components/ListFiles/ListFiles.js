import NavMenu from "../NavMenu/NavMenu";
import firebase from "../../utils/config";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const SORT_OPTIONS = {
  TIME_ASC: { column: "dateoftesting", direction: "asc" },
  TIME_DESC: { column: "dateoftesting", direction: "desc" },
};

function useClients(sortBy = "TIME_ASC") {
  const [clientList, setClientList] = useState({});

  useEffect(() => {
    firebase
      .firestore()
      .collection("clients")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newClient = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClientList(newClient);
      });
  }, [sortBy]);

  return clientList;
}

function ListFiles() {
  const [sortBy, setSortBy] = useState("TIME_ASC");
  const [currentId, setCurrentId] = useState();

  const clientList = useClients(sortBy);

  return (
    <div>
      <NavMenu></NavMenu>
      <label>Sortiraj: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.currentTarget.value)}>
        <option value="TIME_ASC">Prema datumu(uzlazno)</option>
        <option value="TIME_DESC">Prema datumu(silazno)</option>
      </select>
      <div>
        <Table>
          <Thead>
            <Tr>
              <Th>Ime i prezime</Th>
              <Th>Datum rođenja</Th>
              <Th>OIB</Th>
              <Th>Broj telefona</Th>
              <Th>Email</Th>
              <Th>Ulica</Th>
              <Th>Grad</Th>
              <Th>Vrsta testiranja</Th>
              <Th>Jezik</Th>
              <Th>Datum testiranja</Th>
              <Th>Vrsta računa</Th>
              <Th>Posebne napomene</Th>
              <Th>Cijena</Th>
              <Th>Uredi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(clientList).map((id) => {
              return (
                <Tr key={id}>
                  <Td>{clientList[id].name}</Td>
                  <Td>{clientList[id].dateofbirth}</Td>
                  <Td>{clientList[id].oib}</Td>
                  <Td>{clientList[id].number}</Td>
                  <Td>{clientList[id].email}</Td>
                  <Td>{clientList[id].street}</Td>
                  <Td>{clientList[id].town}</Td>
                  <Td>{clientList[id].typeoftesting}</Td>
                  <Td>{clientList[id].language}</Td>
                  <Td>{clientList[id].dateoftesting}</Td>
                  <Td>{clientList[id].typeofbill}</Td>
                  <Td>{clientList[id].special}</Td>
                  <Td>{clientList[id].price}</Td>

                  <Td>
                    <button onClick={() => setCurrentId(id)}>
                      <i>
                        <CreateIcon />
                      </i>
                    </button>
                    <button>
                      <i>
                        <DeleteForeverIcon />
                      </i>
                    </button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default ListFiles;
