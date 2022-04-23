import React, { useState,useContext  } from "react";
import { Context } from "../store/appContext";
import ContactCard from "./ContactCard.jsx";

export const ContactList = () => {
  const {store} = useContext(Context);
  store.contactList && console.log(store.contactList[2].id)
 
return (
  <div> {store.contactList ? store.contactList.map((contact)=>{
    return(<ContactCard key={contact.id} contact={contact}/>)
   }) : <p>loading</p>} </div>

)
}
