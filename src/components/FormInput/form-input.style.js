import styled, { css } from "styled-components";
import { colors } from "../../_const";

const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: auto 0;

  input[type="email"] {
    letter-spacing: 0.3em;
  }
  input[type="password"] {
    letter-spacing: 0.3em;
  }
  input[type="radio"] {
    transform: scale(1.5);
    width: 100%;
  }
`;

export const FormInputContainer = styled.input`
  width: 100%;
  background: ${colors.main};
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${mainColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const LabelContainer = styled.label`
  color: ${mainColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  text-transform: capitalize;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
