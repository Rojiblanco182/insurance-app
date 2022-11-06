import axios from "axios";

export default async function getPoliciesData() {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/policies`);
  return data.policies;
}
