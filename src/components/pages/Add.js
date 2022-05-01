import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ButtonLink from "../common/ButtonLink";
import AddForm from "../forms/AddForm";
import AdminLayout from "../layout/AdminLayout";
import Wrapper from "../layout/Wrapper";
import Icon from "@mdi/react";
import { mdiChevronLeft } from "@mdi/js";

function Add() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <AdminLayout>
      <Wrapper cssClass="add-wrapper">
        <AddForm />
        <ButtonLink cssClass="back-link" linkTo="/admin">
          <Icon path={mdiChevronLeft} className="chevron" color />
          Back to admin dashboard
        </ButtonLink>
      </Wrapper>
    </AdminLayout>
  );
}
export default Add;
