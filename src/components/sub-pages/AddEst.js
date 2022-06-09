import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import AddForm from "../forms/AddForm";

function AddEst() {
  const [auth] = useContext(AuthContext);

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
