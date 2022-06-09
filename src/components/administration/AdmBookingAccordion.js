import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HEROKU_BASE_URL } from "../../constants/api";
import { ARRAY_NUM } from "../../constants/constants";
import axios from "axios";
import { orderBy } from "lodash";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Heading from "../common/Heading";
import AdminSearchForm from "../forms/AdminSearchForm";
import BookingItem from "./BookingItem";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function AdmBookingAccordion() {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemNum, setItemNum] = useState(ARRAY_NUM);
  const [query, setQuery] = useState("");

  const url = HEROKU_BASE_URL + "bookings";

  const location = useLocation().key;

  useEffect(
    function () {
      async function getproduct() {
        try {
          const response = await axios.get(url);
          // console.log("response", response.data.data);
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

  let handleShow = () => setItemNum(itemNum + ARRAY_NUM);

  let buttonDisplay = "none";

  if (orderedBookings.length > itemNum || orderedBookings === []) {
    buttonDisplay = "block";
  }

  let indexArray = [];

  orderedBookings.forEach((o, i) => {
    indexArray.push(i);
  });

  if (indexArray.length === 1) {
    indexArray = null;
  }

  let messageDisplay = "none";

  if (orderedBookings.length === 0) {
    messageDisplay = "block";
  }

  return (
    <>
      <div className="adm-accordion__header">
        <Heading size="2" cssClass="adm-accordion__heading">
          Booking enquiries
        </Heading>
        <AdminSearchForm setQuery={setQuery} searchType="establishment" />
      </div>
      <div
        className="adm-accordion__empty-item"
        style={{ display: messageDisplay }}
      >
        <p className="adm-accordion__empty-message">The list is empty</p>
      </div>
      <Accordion flush>
        {orderedBookings
          .slice(0, itemNum)
          // eslint-disable-next-line array-callback-return
          .filter((item) => {
            if (query === "") {
              return item;
            } else if (
              item.attributes.establishment
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              item.attributes.establishment
                .toLowerCase()
                .startsWith(query.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, indexArray) => {
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
        variant="secondary"
        className="show-more-btn"
        onClick={handleShow}
        style={{ display: buttonDisplay }}
      >
        Show older posts
      </Button>
    </>
  );
}

export default AdmBookingAccordion;
