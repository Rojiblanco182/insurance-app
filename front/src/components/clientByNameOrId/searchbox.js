import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function SearchBox({ setUserToSearch }) {
  const [userInput, setUserInput] = useState();
  const searchUser = () => {
    if (!userInput) {
      setUserToSearch(null);
      return;
    }

    setUserToSearch(userInput);
  }

  return (
    <>
      <div className="searchBox">
        <label htmlFor="searchBox">Search user by name or ID: </label>
        <input
          type="text"
          id="searchBox"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{ height: '21px' }}
          onClick={() => searchUser()}
        />
      </div>
    </>
  )
}
