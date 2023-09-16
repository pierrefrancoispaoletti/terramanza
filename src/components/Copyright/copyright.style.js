import styled from "styled-components";
import { colors } from "../../_const";

export const CopyrightStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer__copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px;
    font-family: "Lora", sans-serif !important;
    font-size: 1.3em;
    color: ${colors.ecriture}!important;
  }

  .footer__alvp {
    border-radius: 8px;
    padding: 2px 5px;
    font-family: "Lora", sans-serif !important;
    color: ${colors.ecriture}!important;
  }

  h3 {
    font-family: "Lora", cursive !important;
    text-align: center !important;
    letter-spacing: 0.2em;
    font-size: 1.8em !important;
    color: ${colors.ecriture} !important;
  }

  .alvp__icon {
    animation: heartPulse 2s infinite linear;
  }

  .link {
    color: ${colors.ecriture};
  }

  @keyframes heartPulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.3);
    }

    100% {
      transform: scale(1);
    }
  }
`;
