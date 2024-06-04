import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSupplierName,
  setSupplierPhone,
  setSupplierEmail,
} from "../../../redux/actions";

function AddSuplierStatic() {
  const dispatch = useDispatch();
  const supplierName = useSelector((state) => state.supplierName);
  const supplierPhone = useSelector((state) => state.supplierPhone);
  const supplierEmail = useSelector((state) => state.supplierEmail);

  const handleNameChange = (e) => {
    dispatch(setSupplierName(e.target.value));
  };

  const handlePhoneChange = (e) => {
    dispatch(setSupplierPhone(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setSupplierEmail(e.target.value));
  };

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
            value={supplierName}
            onChange={handleNameChange}
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
            value={supplierPhone}
            onChange={handlePhoneChange}
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
          value={supplierEmail}
          onChange={handleEmailChange}
          required
        />
      </div>
    </div>
  );
}

export default AddSuplierStatic;
