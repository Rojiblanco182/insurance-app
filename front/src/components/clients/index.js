import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./searchbox";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [userToSearch, setUserToSearch] = useState();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    async function getClientsData() {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/clients`);
      setClients(data.clients);
    }

    getClientsData();
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
