import React, { useState, useContext } from "react";
import { Link, useHistory  } from "react-router-dom";

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
      <div class="container-md">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
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
      <Link to="/">
        <a href="#" className="mx-autolink-primary">
          or get back to contacts
        </a>
      </Link>
    </>
  );
};

export default AddUserForm;
