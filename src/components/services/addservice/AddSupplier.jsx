import React, { useState } from "react";
import AddSupplierContact from "./AddSupplierContact";
import AddSuplierStatic from "./AddSuplierStatic";
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
      <AddSuplierStatic />

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
