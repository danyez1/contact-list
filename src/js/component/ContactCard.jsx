import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  let history = useHistory();
  console.log(contact)
  return (
    <>
      <div className="h-75 d-inline-block mx-auto w-50 border border-4k d-flex">
        <div className="w-50 p-3 d-flex flex-row align-items-start mx-0">
          <div className="rounded-circle w-25 h-75 shadow bg-dark bg-gradient"></div>
          <div className="d-flex flex-column text-start ms-5">
            <h4>{contact.full_name}</h4>
            <p className="h6 text-muted">{contact.address}</p>
            <p className="h6 text-muted">{contact.phone}</p>
            <p className="h6 text-muted">{contact.email}</p>
          </div>
        </div>

        <div className="w-50 p-3 d-flex flex-row align-items-start mx-0">
          <div className="w-50 h-75 align-self-center mt-5">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={(e) => {
                history.push(`/edit-user/${contact.id}`);
              }}
            >
              <i className="fas fa-pen "></i>
            </button>
          </div>

          <div className="w-50 h-75 align-self-center mt-5">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={(e) => {
                actions.deleteContact(contact.id);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
