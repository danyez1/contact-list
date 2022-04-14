import React, { useState } from "react";
import { Form } from "./component/Form.js";
import "../../styles/home.css";

export const home = () => {
	// const [data, setData= useState({
	// 	full_name:"",
	// 	email:"",
	// 	phone:"",
	// 	address:"",

	// })]

	const getContacts=()=>{
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/daniely")
		.then((response) => response.json())
		.then((result) => setTodolist(result))
		.catch((error) => console.log("error", error));
	}
return(
	<div className="text-center mt-5">
	<Form/>	




	</div>

)
	};
