import React, { useState } from "react";
import axios from "axios";
function AddGeneral() {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        // /api/login
        {
          serviceName,
          serviceDescription,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="add__genInfo_container" onSubmit={handleSubmit}>
      <div className="add__genInfo_input-container">
        <label htmlFor="serviceName" className="input-label">
          Name
        </label>
        <input
          type="text"
          className="add__genInfo_in1 add__genInfo_in"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          placeholder="Enter the name of your service"
          required
        />
      </div>
      <div className="add__genInfo_input-container">
        <label htmlFor="serviceDescription" className="input-label">
          Description
        </label>
        <input
          type="text"
          className="add__genInfo_in2 add__genInfo_in"
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
          placeholder="Enter the description of your service"
          required
        />
      </div>
    </form>
    // submit форми повинен виконувати через кнопку continue back_next
  );
}

export default AddGeneral;
