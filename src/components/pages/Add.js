import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ButtonLink from "../buttons/ButtonLink";
import AddForm from "../forms/AddForm";
import AdminLayout from "../layout/AdminLayout";
import Wrapper from "../layout/Wrapper";
import { ChevronLeftIcon } from "../icons/MaterialIcons";

function Add() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <AdminLayout>
      <Wrapper cssClass="add__wrapper">
        <AddForm />
        
      </Wrapper>
    </AdminLayout>
  );
}
export default Add;
