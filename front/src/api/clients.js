import axios from "axios";

export default async function getClientsData() {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/clients`);
  return data.clients;
}
