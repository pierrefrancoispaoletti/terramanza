import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../_const";

export const LoginButtonStyled = styled(Link)`
  position: absolute;
  top: 0px;
  right: 15px;
  border: 4px solid ${colors.main};
  padding: 10px 12px;
  border-radius: 50px;
  color: ${colors.main};
  transition: all 0.1s ease-in-out;
  :active {
    background: ${colors.main};
    color: red;
    border: 4px solid red;
  }
`;
