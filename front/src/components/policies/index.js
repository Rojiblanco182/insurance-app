import { useEffect, useState } from "react";
import SearchBox from "./searchbox";
import getPoliciesData from "../../api/policies";
import getClientsData from "../../api/clients";

export default function Policies() {
  const [policies, setPolicies] = useState([]);
  const [clients, setClients] = useState([]);
  const [userToSearch, setUserToSearch] = useState();
  const [policiesByUser, setPoliciesByUser] = useState();

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
    if (!policies.length || !userToSearch) {
      setPoliciesByUser(null);
      return;
    }

    const userFound = clients.find((client) => client.name === userToSearch);
    const policiesByUser = policies.filter((policy) => policy.clientId === userFound?.id);
    setPoliciesByUser(policiesByUser ? policiesByUser : null);
  }, [userToSearch, policies, clients]);

  return (
    <>
      <SearchBox setUserToSearch={setUserToSearch} />
      {policiesByUser && policiesByUser.map((policy) => {
        return (
          <>
            <span>Amount insured: {policy.amountInsured}$</span>
            <span>Policy ID: {policy.id}</span>
            <hr style={{width:'100%', textAlign:'left', marginLeft:'0'}} />
          </>
        )
      })
      }
    </>
  )
}
