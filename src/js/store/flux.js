const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: null,
    },
    actions: {
      getContacts: () => {
        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/daniely")
          .then((response) => response.json())
          .then((result) => getStore(setStore({ contactList: result })))
          .catch((error) => console.log("error", error));
      },

      addContact: (contact) => {
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        })
          .then((response) =>
            response.status === 200 ? getActions().getContacts() : ""
          )
          .catch((error) => console.log("error", error));
      },

      deleteContact: (contact_id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
          method: "DELETE",
        })
          .then((response) =>
            response.status === 200 ? getActions().getContacts() : ""
          )
          .catch((error) => console.log("error", error));
      },
      udpdateContact: (contact_id, contact) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        })
          .then((response) =>
            response.status === 200 ? getActions().getContacts() : ""
          )
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
