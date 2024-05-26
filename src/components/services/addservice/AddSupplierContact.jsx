import React from "react";

function AddSupplierContact({ whoseContacts }) {
  return (
    <div className="AddSupplierContact">
      <div className="AddSupplierContact_h">
        {whoseContacts} contact details
      </div>
      <div className="AddSupplierContact_inputs">
        <div className="add__supplier_input_container">
          <label htmlFor="contactEmail" className="input-label">
            Email
          </label>
          <input
            type="email"
            className="add__supplier_inp_left add__supplier_inp"
            required
          />
        </div>
        <div className="add__supplier_input_container add__supplier_input_container_left">
          <label htmlFor="contactPhone" className="input-label">
            Phone number
          </label>
          <input
            type="text"
            className="add__supplier_inp_right add__supplier_inp"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default AddSupplierContact;
