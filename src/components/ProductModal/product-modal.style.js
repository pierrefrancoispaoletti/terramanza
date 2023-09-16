import styled, { css } from "styled-components";
import { colors } from "../../_const";

const modalColorType = (props) => {
  switch (props.modalType.toLowerCase()) {
    case "ajouter":
      return css`
        border: 3px solid green;
        background: lightgreen;
        color: ${colors.main};
      `;
    case "editer":
      return css`
        border: 3px solid ${colors.main};
        background: purple;
        color: ${colors.main};
      `;
    default:
      return css`
        background: lightgreen;
      `;
  }
};

const isShownModal = (props) => {
  if (!props.open)
    return css`
      display: none;
    `;
};

const isDisabled = (props) => {
  if (props.disabled) {
    return css`
      background: #ccc;
    `;
  }
};

export const AddProductModalContainer = styled.div`
  position: fixed;
  z-index: 18;
  top: 10px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid ${colors.main};
  align-items: center;
  ${isShownModal}
  & > form {
    width: 80%;
  }
  margin: 15px 15px;
`;

export const CloseIconButton = styled.button`
  background: ${colors.main};
  color: black;
  font-size: 1.3em;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 50px;
  padding: 8px 14px;
  :active {
    background: black;
    border: 1px solid ${colors.secondary};
    color: ${colors.secondary};
  }
`;

export const AddProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background: ${colors.main};
`;

export const AddProductButtonStyled = styled.button`
  float: right;
  font-size: 1em;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 50px;
  font-weight: bold;
  ${modalColorType}
  ${isDisabled}
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 12px;
  font-size: 1em;
  & div {
    margin-bottom: 3px;
  }
  & input[type="checkbox"] {
    vertical-align: bottom;
    width: 35px;
    height: 35px;
    margin: 0 8px;
  }
  & input[type="number"] {
    outline: none;
    vertical-align: middle;
    font-size: 1.2em;
    width: 35px;
    height: 35px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;
