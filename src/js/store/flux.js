import { ContactList } from "../component/ContacList";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { c
			ContactList:[]
		
		},
		  actions: {
			  getContact:()=> {
				var requestOptions = {
					method: "GET",
					redirect: "follow",
				};
		
				fetch("https://assets.breatheco.de/apis/fake/todos/user/cruzdanielyanez",
					requestOptions)
					.then((response) => response.json())
					.then((result) => setTodolist(result))
					.catch((error) => console.log("error", error));		
			}	
			addContact:(Contact)=>{
				fetch("https://assets.breatheco.de/apis/fake/todos/user/cruzdanielyanez",{
					method: "GET",
					redirect: "follow",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify([...getStore().ContactList,
					{LABEL:Contact,donde:false}])
 

				}
				
				

			}
			





		}
	};
};

export default getState;
