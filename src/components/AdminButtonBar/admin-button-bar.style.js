import styled from "styled-components";
import { colors } from "../../_const";

export const AdminButtonBarContainer = styled.div`
  position: relative;
  margin: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AdminButtonContainer = styled.div`
  margin: 8px;
`;

export const AdminButton = styled.button`
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 12px;
  background: ${colors.main};
  :active {
    background: black;
  }
`;
