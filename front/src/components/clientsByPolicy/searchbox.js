import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function SearchBox({ setPolicyToSearch }) {
  const [userInput, setUserInput] = useState();
  const searchUser = () => {
    if (!userInput) {
      setPolicyToSearch(null);
      return;
    }

    setPolicyToSearch(userInput);
  }

  return (
    <>
      <div className="searchBox">
        <label htmlFor="searchBox">Search user by policy ID: </label>
        <input
          type="text"
          className="search-box"
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
