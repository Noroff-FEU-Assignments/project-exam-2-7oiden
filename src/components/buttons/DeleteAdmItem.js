import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HEROKU_BASE_URL } from "../../constants/api";
import axios from "axios";
import AlertMessage from "../common/AlertMessage";
import { BinIcon } from "../icons/MaterialIcons";

export default function DeleteItem({ id, type }) {
  const [error, setError] = useState(null);

  const history = useNavigate();
  const location = useLocation();

  let url = "";

  if (type === "booking") {
    url = HEROKU_BASE_URL + "bookings/" + id;
  } else if (type === "contact") {
    url = HEROKU_BASE_URL + "contacts/" + id;
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
      <button onClick={handleDelete} className="delete__icon-box">
        <BinIcon color="#fff" size="1.25rem" />
      </button>
    </>
  );
}
