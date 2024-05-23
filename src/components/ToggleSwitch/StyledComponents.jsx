// StyledComponents.js
import styled from "styled-components";
import tw from "twin.macro"
export const ToggleSwitchContainer = styled.label`
${tw`right-0 top-0 my-2`}
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const ToggleCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => (checked ? "#2196F3" : "#ccc")};
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: ${({ checked }) => (checked ? "30px" : "4px")};
    bottom: 4px;
    background-color: white;
    -webkit-transition: left 0.4s;
    transition: left 0.4s;
    border-radius: 50%;
  }
`;
