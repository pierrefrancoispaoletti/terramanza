import styled from "styled-components";
import { colors } from "../../_const";

export const OrderBannerContainer = styled.div`
  /* position: ${(props) => (props.top ? "relative" : "fixed")}; */
  width: 100%;
  color: ${colors.ecriture};
  font-size: 1.5em;
  margin-bottom: 12px;
  font-spacing: 1.2;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Lora";

  & button {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    align-self: center;
    color: ${colors.main};
    outline: none;
    border: none;
    font-weight: bold;
    background: transparent;
    font-size: 1.2em;
    margin: 0;
    padding: 0;
    :active {
      background: rgba(255, 255, 255, 0.4);
      color: ${colors.secondary};
    }
  }
`;
