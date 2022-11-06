import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Main from "./views/main";

function App() {
  const [policies, setPolicies] = useState();

  useEffect(() => {
    async function getPoliciesData() {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/policies`);
      console.log(data.policies);
    }

    getPoliciesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  );
}

export default App;
