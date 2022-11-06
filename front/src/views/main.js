import ClientsByNameOrId from "../components/clientByNameOrId";
import ClientByPolicy from "../components/clientsByPolicy";
import PoliciesByUser from "../components/policiesByUser";

export default function Main() {
  return (
    <>
      <h1>Insurance App</h1>
      <ClientsByNameOrId />
      <ClientByPolicy />
      <PoliciesByUser />
    </>
  )
}
