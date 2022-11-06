import { useEffect, useState } from "react";
import SearchBox from "./searchbox";
import getClientsData from "../../api/clients";
import getPoliciesData from "../../api/policies";

export default function ClientByPolicy() {
  const [clients, setClients] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [policyToSearch, setPolicyToSearch] = useState();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    async function getData() {
      const policies = await getPoliciesData();
      setPolicies(policies);
      const clients = await getClientsData();
      setClients(clients);
    }

    getData();
  }, []);

  useEffect(() => {
    if (!clients.length || !policies.length || !policyToSearch) {
      setUserDetails(null);
      return;
    }

    const policyFound = policies.find((policy) => policy.id === policyToSearch);

    if (!policyFound) {
      return;
    }
  
    const userFound = clients.find((client) => client.id === policyFound.clientId);
    setUserDetails(userFound ? userFound : null);
  }, [policyToSearch, clients, policies]);

  return (
    <>
      <SearchBox setPolicyToSearch={setPolicyToSearch} />
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
