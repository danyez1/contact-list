import React, { useState } from "react";

export const Form = () => {
  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  return (
    <form>
      <label for="exampleDataList" class="form-label">
        Full Name
      </label>
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Full Name"
        aria-label=".form-control-lg example"
      />

      <label for="exampleDataList" class="form-label">
        Email
      </label>
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Enter Email"
        aria-label=".form-control-lg example"
      />

      <label for="exampleDataList" class="form-label">
        Phone
      </label>
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Enter Phone"
        aria-label=".form-control-lg example"
      />

      <label for="exampleDataList" class="form-label">
        Address
      </label>
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Enter Address"
        aria-label=".form-control-lg example"
      />

      <button type="submit" class="btn btn-primary">
        Save
      </button>
    </form>
  );
};
