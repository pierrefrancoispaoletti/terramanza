import styled from "styled-components";
import { colors } from "../../_const";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  background: transparent;
  /* border-bottom: 3px solid black; */
  /* border-radius: 0 0 50px 50px; */
  /* background: linear-gradient(
    to right,
    ${colors.tertiary},
    ${colors.secondary}
  );
  background-size: 400% 400%;
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
  } */
  /* box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58); */
`;

export const HeaderTitle = styled.div`
  position: absolute;
  top: 55%;

  font-size: 2.5em;
  color: ${colors.main};
  font-weight: 200;
`;
