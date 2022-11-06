const axios = require('axios');

const clientsUrl = 'https://www.mocky.io/v2/5808862710000087232b75ac';

async function getClientsData() {
  const { data } = await axios.get(clientsUrl);
  return data.clients;
}

module.exports = { getClientsData };
