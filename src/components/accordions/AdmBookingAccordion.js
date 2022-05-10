import { useState, useEffect } from "react";
import { BOOKING_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Accordion from "react-bootstrap/Accordion";
import Heading from "../layout/Heading";
import BookingItem from "./BookingItem";
import { orderBy } from "lodash";

function AdmBookingAccordion() {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BOOKING_URL;

  useEffect(function () {
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
  }, []);

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

  //check this code
  let indexArray = [];

  orderedBookings.forEach((el, i) => {
    indexArray.push(i);
  });

  if (indexArray.length === 1) {
    indexArray = 0;
  }

  // console.log(indexArray);

  return (
    <>
      <Heading size="2" cssClass="accordion-heading">
        Booking enquiries
      </Heading>
      <div className="accordion__empty-item">
        <p className="accordion__test">
          {orderedBookings.length === 0 ? "No messages" : ""}
        </p>
      </div>
      <Accordion flush>
        {orderedBookings.map((item, indexArray) => {
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
              // location={item.attributes.location}
              created={item.attributes.createdAt}
              fromDate={item.attributes.from_date}
              toDate={item.attributes.to_date}
            />
          );
        })}
      </Accordion>
    </>
  );
}
export default AdmBookingAccordion;
