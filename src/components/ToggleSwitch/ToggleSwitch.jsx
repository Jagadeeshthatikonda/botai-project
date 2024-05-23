// ToggleSwitch.js
import React from "react";
import * as Styled from "./StyledComponents";

const ToggleSwitch = ({ id, checked, onChange }) => {
  return (
    <Styled.ToggleSwitchContainer>
      <Styled.ToggleCheckbox type="checkbox" id={id} checked={checked} onChange={onChange} />
      <Styled.ToggleSlider checked={checked} />
    </Styled.ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
