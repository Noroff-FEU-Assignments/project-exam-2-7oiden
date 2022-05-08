import { useState, useEffect } from "react";
import { CONTACT_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Accordion from "react-bootstrap/Accordion";
import Heading from "../layout/Heading";
import ContactItem from "./ContactItem";

function AdmContactAccordion() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = CONTACT_URL;

  useEffect(function () {
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

  console.log(message);

  return (
    <>
      <Heading size="2" cssClass="accordion-heading" flush>
        Contact enquiries
      </Heading>
      <Accordion defaultActiveKey="0" flush>
        {message.map((item) => {
          return (
            <ContactItem
              key={item.id}
              eventKey={item.index}
              // id={item.id}
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
