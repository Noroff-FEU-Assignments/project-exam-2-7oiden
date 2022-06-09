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
import ContactItem from "./ContactItem";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function AdmContactAccordion() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemNum, setItemNum] = useState(ARRAY_NUM);
  const [query, setQuery] = useState("");

  const url = HEROKU_BASE_URL + "contacts";

  const location = useLocation().key;

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

  const filteredMessages = orderedMessages
    // eslint-disable-next-line array-callback-return
    .filter((item) => {
      if (query === "") {
        return item;
      } else if (
        item.attributes.last_name
          .toLowerCase()
          .startsWith(query.toLowerCase()) ||
        item.attributes.last_name.toLowerCase().includes(query.toLowerCase())
      ) {
        return item;
      }
    });

  let handleShow = () => setItemNum(itemNum + ARRAY_NUM);

  let buttonDisplay = "none";

  if (filteredMessages.length > itemNum || filteredMessages === []) {
    buttonDisplay = "block";
  }

  let indexArray = [];

  filteredMessages.forEach((o, i) => {
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
      <div className="adm-accordion__header">
        <Heading size="2" cssClass="adm-accordion__heading">
          Contact enquiries
        </Heading>
        <AdminSearchForm setQuery={setQuery} searchType="lastname" />
      </div>
      <div
        className="adm-accordion__empty-item"
        style={{ display: messageDisplay }}
      >
        <p className="adm-accordion__empty-message">The list is empty</p>
      </div>
      <Accordion flush>
        {filteredMessages.slice(0, itemNum).map((item, indexArray) => {
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

export default AdmContactAccordion;
