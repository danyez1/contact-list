import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

const EditUserForm = () => {
  let { id } = useParams();
  let history = useHistory();
  const { store, actions } = useContext(Context);
  const myContact =
    store.contactList &&
    store.contactList.filter((contact) => contact.id === id)[0];
  console.log(myContact);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    agenda_slug: "daniely",
    address: "",
    phone: "",
  });
  useEffect(() => {
    if (myContact) {
      setFormData(myContact);
    }
  }, [myContact]);

  console.log(formData);
  return (
    <>
      <div className="container-md">
        <h1> Edit Contact</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="input"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={(e) =>
                setFormData({ ...formData, full_name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="input"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="input"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              actions.udpdateContact(formData.id, formData);
              history.push(`/`);
            }}
          >
            Save
          </button>
          <div>
            <Link to="/" href="#" className="mx-2 link-primary">
              or get back to contacts
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUserForm;
