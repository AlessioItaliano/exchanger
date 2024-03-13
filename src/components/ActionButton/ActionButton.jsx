import React, { useState } from "react";
import * as s from "./ActionButton.styled.js";

const ActionButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <s.Container>
      <s.Title> Action: </s.Title>

      <s.Toggle>
        <s.Input type="checkbox" onChange={handleCheckboxChange} />
        <s.Action>{isChecked ? "Sell" : "Buy"}</s.Action>
      </s.Toggle>
    </s.Container>
  );
};

export default ActionButton;
