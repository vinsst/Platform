import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { incrementLines, decrementLines } from "../../../redux/actions";

function BackNext() {
  const { lineNum } = useSelector((state) => state.counterLinesReducer);
  const { serviceName, serviceDescription } = useSelector(
    (state) => state.nameDescriptionServiceReducer
  );
  const samePrice = useSelector((state) => state.samePriceReducer);
  const separatePrices = useSelector((state) => state.separate.pricetxtMassive);
  const { uploadedPhoto } = useSelector((state) => state.uploadedPhotosReducer);
  const { uploadedVideo } = useSelector((state) => state.uploadedVideosReducer);
  const supplierName = useSelector(
    (state) => state.supplierStaticReducer.supplierName
  );
  const supplierPhone = useSelector(
    (state) => state.supplierStaticReducer.supplierPhone
  );
  const supplierEmail = useSelector(
    (state) => state.supplierStaticReducer.supplierEmail
  );
  const contacts = useSelector((state) => state.supplier.contacts);

  const dispatch = useDispatch();

  const addingLines = () => {
    dispatch(incrementLines());
  };

  const minusingLines = () => {
    dispatch(decrementLines());
  };

  const separatePricesValid = separatePrices.every(
    (price) => price.txt && price.price
  );

  let isDisabled = false;
  if (lineNum === 1) {
    isDisabled = !serviceName || !serviceDescription;
  } else if (lineNum === 2) {
    isDisabled =
      !(samePrice && samePrice.trim()) &&
      (!separatePrices.length || !separatePricesValid);
  } else if (lineNum === 3) {
    isDisabled = !uploadedPhoto.length;
  } else if (lineNum === 4) {
    isDisabled = !supplierName || !supplierPhone || !supplierEmail;
  }

  const handleFinish = () => {
    if (lineNum === 4 && !isDisabled) {
      const data = {
        serviceName,
        serviceDescription,
        samePrice,
        separatePrices,
        uploadedPhoto,
        // uploadedVideo,
        supplierName,
        supplierPhone,
        supplierEmail,
        contacts,
      };

      axios
        .post("https://jsonplaceholder.typicode.com/posts", data)
        .then((response) => {
          console.log("Data sent successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    } else {
      addingLines();
    }
  };

  return (
    <div className="Add__back_next_container">
      <div
        className="Add__back_next_back_btn Add__back_next_btns"
        onClick={minusingLines}
      >
        <span className="Add__back_next_back_btn_txt">Back</span>
      </div>
      <div
        className={`Add__back_next_next_btn Add__back_next_btns ${
          isDisabled ? "disabled" : ""
        }`}
        onClick={!isDisabled ? handleFinish : null}
      >
        <span className="Add__back_next_back_btn_txt">
          {lineNum === 4 ? "Finish" : "Continue"}
        </span>
      </div>
    </div>
  );
}

export default BackNext;
