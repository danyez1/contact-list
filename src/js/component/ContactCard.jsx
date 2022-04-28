import React from "react";

const ContactCard = ({ contact }) => {
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
            
              <i className="fas fa-pen "></i>
           
          </div>
          <div className="w-50 h-75 align-self-center mt-5">
          <button type="button" className="btn btn-outline-danger"
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
