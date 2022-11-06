import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [clients, setClients] = useState();
  const [policies, setPolicies] = useState();

  useEffect(() => {
    async function getClientsData() {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/clients`);
      console.log(data.clients);
    }
    async function getPoliciesData() {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/policies`);
      console.log(data.policies);
    }

    getClientsData();
    getPoliciesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
