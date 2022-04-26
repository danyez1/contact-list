import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard.jsx";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const { store } = useContext(Context);
  store.contactList && console.log(store.contactList[2].id);

  return (
    <>
      <Link to="/add-new-user">
        <button className="btn btn-success me-md-2" type="button">
          Add New Contact
        </button>
      </Link>

      <div>
        
        {store.contactList ? (
          store.contactList.map((contact) => {
            return <ContactCard key={contact.id} contact={contact} />;
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  );
};
