import styled from "styled-components";
import { colors } from "../../_const";

export const AddProductButtonStyled = styled.button`
  background: lightGreen;
  border: 1px solid black;
  border-radius: 50%;
  padding: 9px 12px;
  transition: all 0.1s ease-in-out;
  :active {
    background: green;
    color: ${colors.secondary};
  }
`;
