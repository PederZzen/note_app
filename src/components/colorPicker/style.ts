import styled from "styled-components";

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // Hide the browser's default radio button
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  // Create a custom radio button
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;

    // On mouse-over, add a grey background color
    &:hover {
      background-color: #ccc;
    }

    // When the radio button is checked, add a blue background
    & ~ input:checked & {
      background-color: #2196f3;
    }

    // Create the indicator (the dot/circle - hidden when not checked)
    &:after {
      content: "";
      position: absolute;
      display: none;
    }

    // Show the indicator (dot/circle) when checked
    & ~ input:checked &:after {
      display: block;
    }

    // Style the indicator (dot/circle)
    &:after {
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }
`;
