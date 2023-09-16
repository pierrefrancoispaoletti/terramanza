import styled, { css } from "styled-components";
import { colors } from "../../_const";

const isDisabled = (props) => {
  if (props.disabled) {
    return css`
      background: #ccc;
    `;
  }
};

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin: 12px;
  background: linear-gradient(to right, ${colors.main}, ${colors.secondary});
  background-size: 400% 400%;
  padding-bottom: 12px;
  animation: backgroundMoving 25s infinite ease;
  @keyframes backgroundMoving {
    0% {
      background-position: 92% 0%;
    }
    50% {
      background-position: 9% 100%;
    }
    100% {
      background-position: 92% 0%;
    }
  }
  & > h2 {
    color: ${colors.main};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  font-size: 2em;
  background-color: transparent;
  outline: none;
  color: ${colors.main};
  border: 3px solid ${colors.main};
  border-radius: 50px;
  background: ${colors.secondary};
  ${isDisabled}
`;
