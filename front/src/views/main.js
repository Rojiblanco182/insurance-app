import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ClientsByNameOrId from "../components/clientByNameOrId";
import ClientByPolicy from "../components/clientsByPolicy";
import PoliciesByUser from "../components/policiesByUser";

export default function Main() {
  const [role, setRole] = useState();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <h1>Insurance App</h1>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group" sx={{color: 'white'}}>Select your role</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={(e) => handleRoleChange(e)}
        >
          <FormControlLabel value="user" control={<Radio sx={{ color: 'white' }} />} label="User" />
          <FormControlLabel value="admin" control={<Radio sx={{ color: 'white' }} />} label="Admin" />
        </RadioGroup>
      </FormControl>

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
