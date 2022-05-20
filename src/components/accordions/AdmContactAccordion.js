import { useState, useEffect } from "react";
import { HEROKU_BASE_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Accordion from "react-bootstrap/Accordion";
import ContactItem from "./ContactItem";
import { orderBy } from "lodash";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const arrayItems = 8

function AdmContactAccordion() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemNum, setItemNum] = useState(arrayItems);

  const url = HEROKU_BASE_URL + "contacts";

  const location = useLocation().key;

  // console.log(location);

  useEffect(
    function () {
      async function getproduct() {
        try {
          const response = await axios.get(url);
          console.log("response", response.data.data);
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

  const orderedMessages = orderBy(message, ["attributes.createdAt"], ["desc"]);

  let handleShow = () => setItemNum(itemNum + arrayItems);

  let buttonDisplay = "none";

  console.log(orderedMessages.length);

  if (orderedMessages.length > itemNum || orderedMessages === []) {
    buttonDisplay = "block";
  } 

  //check this code
  let indexArray = [];

  orderedMessages.forEach((el, i) => {
    indexArray.push(i);
  });

  if (indexArray.length === 1) {
    indexArray = null;
  }

  let messageDisplay = "none";

  if (orderedMessages.length === 0) {
    messageDisplay = "block";
  }

  return (
    <>
      <div className="adm-accordion__empty-item" style={{ display: messageDisplay }}>
        <p className="adm-accordion__empty-message">The list is empty</p>
      </div>
      <Accordion flush>
        {orderedMessages.slice(0, itemNum).map((item, indexArray) => {
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
      <Button
        className="btn-secondary"
        onClick={handleShow}
        style={{ display: buttonDisplay }}
      >
        Show older posts
      </Button>
    </>
  );
}
export default AdmContactAccordion;
