import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSupplierPlusContact } from "../../../redux/actions";

function AddSupplierContact({ index, whoseContacts }) {
  const dispatch = useDispatch();
  const contact = useSelector(
    (state) => state.services.supplier.contacts[index]
  ) || {
    email: "",
    phoneNum: "",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedContact = { ...contact, [name]: value };
    dispatch(updateSupplierPlusContact(index, updatedContact));
  };

  return (
    <div className="AddSupplierContact">
      <div className="AddSupplierContact_h">
        {whoseContacts} contact details
      </div>
      <div className="AddSupplierContact_inputs">
        <div className="add__supplier_input_container">
          <label htmlFor={`contactEmail-${index}`} className="input-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
            className="add__supplier_inp_left add__supplier_inp"
            required
          />
        </div>
        <div className="add__supplier_input_container add__supplier_input_container_left">
          <label htmlFor={`contactPhone-${index}`} className="input-label">
            Phone number
          </label>
          <input
            type="text"
            name="phoneNum"
            value={contact.phoneNum}
            onChange={handleInputChange}
            className="add__supplier_inp_right add__supplier_inp"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default AddSupplierContact;
