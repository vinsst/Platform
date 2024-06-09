import React from "react";

const ContactDetails = () => {
  return (
    <div className="viewService_supplier">
      <section className="viewService_supplier_personalData">
        <div className="viewService_supplier_h">Personal data</div>
        <div className="viewService_supplier_contact_container">
          <div className="viewService_supplier_contactTxt">Supplier name</div>
          <div className="viewService_supplier_contactDots"></div>
          <span className="viewService_supplier_contactValue">
            Supplier name
          </span>
        </div>
        <div className="viewService_supplier_contact_container">
          <div className="viewService_supplier_contactTxt">Telephone</div>
          <div className="viewService_supplier_contactDots"></div>
          <span className="viewService_supplier_contactValue">Telephone</span>
        </div>
        <div className="viewService_supplier_contact_container">
          <div className="viewService_supplier_contactTxt">E-mail</div>
          <div className="viewService_supplier_contactDots"></div>
          <span className="viewService_supplier_contactValue">
            mailadress@gmail.com
          </span>
        </div>
      </section>

      <section className="viewService_supplier_sb">
        <div className="viewService_supplier_h">Manager contact details</div>
        <div className="viewService_supplier_contact_container">
          <div className="viewService_supplier_contactTxt">E-mail</div>
          <div className="viewService_supplier_contactDots"></div>
          <span className="viewService_supplier_contactValue">
            mailadress@gmail.com
          </span>
        </div>
      </section>

      <section className="viewService_supplier_sb">
        <div className="viewService_supplier_h">Finance contact details</div>
        <div className="viewService_supplier_contact_container">
          <div className="viewService_supplier_contactTxt">E-mail</div>
          <div className="viewService_supplier_contactDots"></div>
          <span className="viewService_supplier_contactValue">
            mailadress@gmail.com
          </span>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
