import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Loop(props: any) {
  let { id } = useParams();
  if (id == "1") {
    return <Navigate to="/"></Navigate>;
  }
  return <h3>Je suis item num: {id}</h3>;
}
export default Loop;
