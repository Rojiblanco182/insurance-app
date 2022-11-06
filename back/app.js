const express = require("express");
const cors = require('cors');
const { getClientsData } = require("./api/clients");
const { getPoliciesData } = require("./api/policies");
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({
  origin: [process.env.FRONT],
  credentials: true
}));

app.get("/clients", async (req, res) => {
  const clients = await getClientsData();
  res.json({ clients });
});

app.get("/policies", async (req, res) => {
  const policies = await getPoliciesData();
  res.json({ policies });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
