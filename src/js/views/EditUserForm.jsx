import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

const EditUserForm = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    full_name: myContact[0].full_name,
    email: "",
    agenda_slug: "daniely",
    address: "",
    phone: "",
  });
  let { id } = useParams();
  let history = useHistory();

    const myContact = store.contactList.filter((contact)=>contact.id===id)
   
    console.log(myContact)

  
  return  (
    <>
      <div className="container-md">
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
              actions.addContact(formData);
              history.push(`/`);
            }}
          >
            Save
          </button>
        </form>
      </div>

      <Link className="mx-autolink-primary" to="/">
        or get back to contacts
      </Link>
    </>
  );
};

export default EditUserForm;
