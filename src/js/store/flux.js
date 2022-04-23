
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: null,
    },
    actions: {
      getContacts: () => {
        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/daniely")
          .then((response) => response.json())
          .then((result) => getStore(setStore({contactList:result})))
          .catch((error) => console.log("error", error));
      },
      addContact: (Contact) => {
        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/daniely",
          {
            method: "GET",
            redirect: "follow",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              ...getStore().contactList,
              { LABEL: Contact, donde: false },
            ]),
          }
        )
          .then((response) =>
            response.status === 200 ? getActions().getData() : ""
          )
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
