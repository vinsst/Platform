import React, { useState } from "react";
import AddSupplierContact from "./AddSupplierContact";
import plusCircle from "../../../assets/img/plusCircle.svg";

function AddSupplier() {
  const [supplierContactLinesNumber, setsupplierContactLinesNumber] =
    useState(0);

  const plusContactLines = () => {
    setsupplierContactLinesNumber(supplierContactLinesNumber + 1);
  };

  const getWhoseContacts = (index) => {
    switch (index) {
      case 0:
        return "Manager";
      case 1:
        return "Finance";
      default:
        return "";
    }
  };

  return (
    <form className="add__supplier_container">
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
        <div className="add__supplier_input_container">
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
          type="text"
          className="add__supplier_inp_left add__supplier_inp"
          placeholder="Supplier's email"
          required
        />
      </div>
      {[...Array(supplierContactLinesNumber)].map((_, index) => (
        <AddSupplierContact
          key={index}
          whoseContacts={getWhoseContacts(index)}
        />
      ))}
      <div className="add__prices_addLine" onClick={plusContactLines}>
        <img
          src={plusCircle}
          alt="Add line"
          className="add__prices_addLine_img"
          width="24px"
        />
        <span className="add__prices_addLine_txt">Add line</span>
      </div>
    </form>
  );
}

export default AddSupplier;
