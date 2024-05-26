import React from "react";

function AddSuplierStatic() {
  return (
    <div>
      <div className="add__supplier_container_top">
        <div className="add__supplier_input_container">
          <label htmlFor="supplierName" className="input-label">
            Supplier name
          </label>
          <input
            type="text"
            className="add__supplier_inp_left add__supplier_inp"
            placeholder="Enter the name of your supplier"
            required
          />
        </div>
        <div className="add__supplier_input_container add__supplier_input_container_left">
          <label htmlFor="supplierPhone" className="input-label">
            Phone number
          </label>
          <input
            type="text"
            className="add__supplier_inp_right add__supplier_inp"
            placeholder="Supplier's phone number"
            required
          />
        </div>
      </div>
      <div className="add__supplier_input_container">
        <label htmlFor="supplierEmail" className="input-label">
          Email
        </label>
        <input
          type="email"
          className="add__supplier_inp_left add__supplier_inp"
          placeholder="Supplier's email"
          required
        />
      </div>
    </div>
  );
}

export default AddSuplierStatic;
