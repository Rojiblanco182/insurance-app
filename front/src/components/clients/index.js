import { useEffect, useState } from "react";
import SearchBox from "./searchbox";
import getClientsData from "../../api/clients";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [userToSearch, setUserToSearch] = useState();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    async function getClients() {
      const clientsData = await getClientsData();
      setClients(clientsData);
    }

    getClients();
  }, []);

  useEffect(() => {
    if (!clients.length || !userToSearch) {
      setUserDetails(null);
      return;
    }

    const userFound = clients.find((client) => client.id === userToSearch || client.name === userToSearch);
    setUserDetails(userFound ? userFound : null);
  }, [userToSearch, clients]);

  return (
    <>
      <SearchBox setUserToSearch={setUserToSearch} />
      {userDetails && 
        <>
          <h2>Name: {userDetails.name}</h2>
          <h3>ID: {userDetails.id}</h3>
          <h3>E-mail: {userDetails.email}</h3>
          <h3>Role: {userDetails.role}</h3>
        </>
      }
    </>
  )
}
