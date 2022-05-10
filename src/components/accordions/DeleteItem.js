import { useState } from "react";
import { BOOKING_URL, CONTACT_URL } from "../../constants/api";
import axios from "axios";
import BinIcon from "../icons/BinIcon";
import AlertMessage from "../common/AlertMessage";
import { useNavigate, useLocation} from "react-router-dom";

export default function DeleteItem({ id, type }) {
  const [error, setError] = useState(null);
 
  const history = useNavigate();
  const location = useLocation();

  let url = "";

  if (type === "booking") {
    url = BOOKING_URL + "/" + id;
  } else if (type === "contact") {
    url = CONTACT_URL + "/" + id;
  }

  async function handleDelete() {
    const confirmDelete = window.confirm("Delete this post?");

    if (confirmDelete) {
      try {
        await axios.delete(url);
        history(location.pathname);
      } catch (error) {
        setError(error);
      }
    }
  }

  if (error) {
    return (
      <AlertMessage variant="danger" message="The item could not be deleted" />
    );
  }

  return (
    <>
      {/* <button onClick={handleDelete}>{error ? "Error" : "Delete"}</button>{" "} */}
      <button onClick={handleDelete} className="delete-button">
        <BinIcon />
      </button>
    </>
  );
}
