import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setServiceName, setServiceDescription } from "../../../redux/actions";

function AddGeneral() {
  const dispatch = useDispatch();
  const serviceName = useSelector(
    (state) => state.services.nameDescriptionServiceReducer.serviceName
  );
  const serviceDescription = useSelector(
    (state) => state.services.nameDescriptionServiceReducer.serviceDescription
  );

  useEffect(() => {
    dispatch(setServiceName(serviceName));
    dispatch(setServiceDescription(serviceDescription));
  }, [serviceName, serviceDescription, dispatch]);

  return (
    <div className="add__genInfo_container">
      <div className="add__genInfo_input-container">
        <label htmlFor="serviceName" className="input-label">
          Name
        </label>
        <input
          type="text"
          className="add__genInfo_in1 add__genInfo_in"
          value={serviceName}
          onChange={(e) => dispatch(setServiceName(e.target.value))}
          placeholder="Enter the name of your service"
          maxLength="20"
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
          onChange={(e) => dispatch(setServiceDescription(e.target.value))}
          placeholder="Enter the description of your service"
          maxLength="300"
          required
        />
      </div>
    </div>
  );
}

export default AddGeneral;
