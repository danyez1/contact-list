import React, { useState } from "react";
import { Form } from "./Form.js";
import "../../styles/home.css";
import { ContactList } from "../views/ContactList.jsx";

export const Home = () => {
	console.log(history)
  return (
    <div className="text-center mt-5">
      <ContactList />
    </div>
  );
};
