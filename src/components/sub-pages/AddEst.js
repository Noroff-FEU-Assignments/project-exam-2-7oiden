import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AddForm from "../forms/AddForm";

function AddEst() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="admin__container add__container">
      <AddForm />
    </div>
  );
}

export default AddEst;
