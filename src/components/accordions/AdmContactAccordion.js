import { useState, useEffect } from "react";
import { CONTACT_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Accordion from "react-bootstrap/Accordion";
import Heading from "../layout/Heading";
import ContactItem from "./ContactItem";
import { orderBy } from "lodash";
import { useLocation } from "react-router-dom";

function AdmContactAccordion() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = CONTACT_URL;

  const location = useLocation().key;

  // console.log(location);

  useEffect(
    function () {
      async function getproduct() {
        try {
          const response = await axios.get(url);
          // console.log("response", response.data.data);
          setMessage(response.data.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getproduct();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
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

  const orderedMessages = orderBy(message, ["attributes.createdAt"], ["desc"]);

  //check this code
  let indexArray = [];

  orderedMessages.forEach((el, i) => {
    indexArray.push(i);
  });

  if (indexArray.length === 1) {
    indexArray = 0;
  }

  let display = "none";

  if (orderedMessages.length === 0) {
    display = "block";
  }

  return (
    <>
      <Heading size="2" cssClass="adm-accordion__heading" flush>
        Contact enquiries
      </Heading>
      <div className="adm-accordion__empty-item" style={{ display: display }}>
        <p className="adm-accordion__empty-message">The list is empty</p>
      </div>
      <Accordion flush>
        {orderedMessages.map((item, indexArray) => {
          return (
            <ContactItem
              key={item.id}
              id={item.id}
              type={"contact"}
              eventKey={indexArray}
              firstName={item.attributes.first_name}
              lastName={item.attributes.last_name}
              subject={item.attributes.subject}
              email={item.attributes.email}
              message={item.attributes.message}
              created={item.attributes.createdAt}
            />
          );
        })}
      </Accordion>
    </>
  );
}
export default AdmContactAccordion;
