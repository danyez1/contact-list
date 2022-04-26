import React, { useState } from "react";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    agenda_slug: "daniely",
    address: "",
    phone: "",
  });
  console.log(formData)
  return (
    <>
 
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={(e) => setFormData({...formData,full_name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e)=>setFormData( {...formData,email: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={(e)=>setFormData({...formData,phone:e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Address"
            value={formData.address}
            onChange={(e)=>setFormData({...formData,address:e.target.value})}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      <a href="#" className="link-primary">
        or get back to contacts
      </a>
    </>
  );
};

export default AddUserForm;
