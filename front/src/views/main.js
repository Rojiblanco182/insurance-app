import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import ClientsByNameOrId from "../components/clientByNameOrId";
import ClientByPolicy from "../components/clientsByPolicy";
import PoliciesByUser from "../components/policiesByUser";
import getClientsData from '../api/clients';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState();
  const [role, setRole] = useState();

  const searchUser = () => {
    if (!username) {
      return;
    }

    const userFound = users.find(user => user.name === username);
    setUsername(userFound?.name);
    setRole(userFound?.role);
  }

  useEffect(() => {
    async function getUsers() {
      const usersData = await getClientsData();
      setUsers(usersData);
    }

    getUsers();
  }, []);

  return (
    <>
      <h1>Insurance App</h1>

      {!role && 
        <>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            sx={{ height: '21px' }}
            onClick={() => searchUser()}
          />
        </>
      }
      <br/>

      {role && <ClientsByNameOrId />}

      {role === 'admin' && 
        <>
          <ClientByPolicy />
          <PoliciesByUser />
        </>
      }
    </>
  )
}
