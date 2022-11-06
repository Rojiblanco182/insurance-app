 const axios = require('axios');

const policiesUrl = 'http://www.mocky.io/v2/580891a4100000e8242b75c5';

async function getPoliciesData() {
  const { data } = await axios.get(policiesUrl);
  return data.policies;
}

module.exports = { getPoliciesData };
