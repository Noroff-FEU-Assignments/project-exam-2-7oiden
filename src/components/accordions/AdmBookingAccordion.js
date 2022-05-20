import { useState, useEffect } from "react";
import { HEROKU_BASE_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Accordion from "react-bootstrap/Accordion";
import BookingItem from "./BookingItem";
import { orderBy } from "lodash";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

function AdmBookingAccordion() {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numshow, setNumshow] = useState(1);

  const url = HEROKU_BASE_URL + "bookings";

  const location = useLocation().key;

  useEffect(
    function () {
      async function getproduct() {
        try {
          const response = await axios.get(url);
          console.log("response", response.data.data);
          setBooking(response.data.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }

      getproduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [url, location]
  );

  if (loading) return <Loader />;

  if (error) {
    return (
      <AlertMessage
        variant="danger"
        message="An error occured when trying to fetch the API"
      />
    );
  }

  const orderedBookings = orderBy(booking, ["attributes.createdAt"], ["desc"]);

  let handleShow = () => setNumshow(numshow + 1);

   let buttonDisplay = "none";

   if (orderedBookings.length > numshow || orderedBookings === []) {
     buttonDisplay = "block";
   }

  //check this code
  let indexArray = [];

  orderedBookings.forEach((el, i) => {
    indexArray.push(i);
  });

  if (indexArray.length === 1) {
    indexArray = null;
  }

  let emptyDisplay = "none";

  if (orderedBookings.length === 0) {
    emptyDisplay = "block";
  }

  return (
    <>
      <div className="adm-accordion__empty-item" style={{ display: emptyDisplay }}>
        <p className="adm-accordion__empty-message">The list is empty</p>
      </div>
      <Accordion flush>
        {orderedBookings.slice(0, numshow).map((item, indexArray) => {
          return (
            <BookingItem
              key={item.id}
              id={item.id}
              type={"booking"}
              eventKey={indexArray}
              establishment={item.attributes.establishment}
              firstName={item.attributes.first_name}
              lastName={item.attributes.last_name}
              guests={item.attributes.guests}
              email={item.attributes.email}
              message={item.attributes.message}
              created={item.attributes.createdAt}
              fromDate={item.attributes.from_date}
              toDate={item.attributes.to_date}
            />
          );
        })}
      </Accordion>
      <Button
        className="btn-secondary"
        onClick={handleShow}
        style={{ display: buttonDisplay }}
      >
        Show older
      </Button>
    </>
  );
}

export default AdmBookingAccordion;
