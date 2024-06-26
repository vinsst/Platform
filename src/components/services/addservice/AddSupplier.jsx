import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddSupplierContact from "./AddSupplierContact";
import AddSuplierStatic from "./AddSuplierStatic";
import plusCircle from "../../../assets/img/plusCircle.svg";
import { setSupplierPlusContact } from "../../../redux/actions";

function AddSupplier() {
  const contactMassive = useSelector(
    (state) => state.services.supplier.contacts
  );

  const dispatch = useDispatch();

  const plusContactLines = () => {
    dispatch(setSupplierPlusContact({ email: "", phoneNum: "" }));
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
      {contactMassive.map((contact, index) => (
        <AddSupplierContact
          key={index}
          index={index}
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
