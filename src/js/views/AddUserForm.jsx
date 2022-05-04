import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

const AddUserForm = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    agenda_slug: "daniely",
    address: "",
    phone: "",
  });

  let history = useHistory();
  return (
    <>
      <div className="container-md">
        <h1> Create a Contact</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            actions.addContact(formData);
            history.push(`/`);
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={(e) =>
                setFormData({ ...formData, full_name: e.target.value })
              }
              required
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
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
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

export default AddUserForm;
