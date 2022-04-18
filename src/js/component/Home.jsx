import React, { useState } from "react";
import { Form } from "./Form.js";
import "../../styles/home.css";
import { AddCard } from "./AddCard.jsx";
import { ContactList } from "./ContacList.jsx";

export const Home = () => {
	// const [data, setData= useState({
	// 	full_name:"",
	// 	email:"",
	// 	phone:"",
	// 	address:"",ß

	// })]

	const getContacts=()=>{
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/daniely")
		.then((response) => response.json())
		.then((result) => setTodolist(result))
		.catch((error) => console.log("error", error));
	}
return(
	<div className="text-center mt-5">
	<ContactList/>	




	</div>

)
	};
