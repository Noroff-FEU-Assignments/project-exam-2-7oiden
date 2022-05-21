import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AddForm from "../forms/AddForm";
import Wrapper from "../layout/Wrapper";

function AddEst() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
        <AddForm />
  );
}
export default AddEst;
