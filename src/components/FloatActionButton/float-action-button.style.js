import styled from "styled-components";
import { colors } from "../../_const";

export const FABContainer = styled.div`
  position: fixed;
  right: 16px;
  bottom: 36px;
  border-radius: 100px;
  border: 1px solid black;
  & > button {
    color: white;
    outline: none;
    border: 3px solid ${colors.main};
    text-decoration: none;
    background: rgba(254, 0, 0, 0.6);
    border-radius: 100px;
    padding: 10px 12px;
    transition: 0.2s all ease-in-out;
    :active {
      background-color: rgba(255, 255, 255, 0.6);
      color: ${colors.secondary};
    }
  }
  & #warped {
    position: absolute;
    bottom: 146px;
    right: 222px;
    width: 100px;
    height: 100px;
  }
  #warped > span[class^="w"]:nth-of-type(n + 0) {
    display: block;
    position: absolute;
    -moz-transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: ;
  }

  #warped span {
    color: ${colors.secondary};
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    line-height: 6;
    white-space: pre;
    overflow: visible;
    padding: 0px;
  }

  #warped .w0 {
    -moz-transform: rotate(-1.3rad);
    -webkit-transform: rotate(-1.3rad);
    -o-transform: rotate(-1.3rad);
    -ms-transform: rotate(-1.3rad);
    transform: rotate(-1.3rad);
    width: 7px;
    height: 37px;
    left: 258.77px;
    top: 173.9px;
  }

  #warped .w1 {
    -moz-transform: rotate(-0.99rad);
    -webkit-transform: rotate(-0.99rad);
    -o-transform: rotate(-0.99rad);
    -ms-transform: rotate(-0.99rad);
    transform: rotate(-0.99rad);
    width: 9px;
    height: 37px;
    left: 261.93px;
    top: 164.85px;
  }

  #warped .w2 {
    -moz-transform: rotate(-0.65rad);
    -webkit-transform: rotate(-0.65rad);
    -o-transform: rotate(-0.65rad);
    -ms-transform: rotate(-0.65rad);
    transform: rotate(-0.65rad);
    width: 10px;
    height: 37px;
    left: 269.28px;
    top: 156.53px;
  }

  #warped .w3 {
    -moz-transform: rotate(-0.28rad);
    -webkit-transform: rotate(-0.28rad);
    -o-transform: rotate(-0.28rad);
    -ms-transform: rotate(-0.28rad);
    transform: rotate(-0.28rad);
    width: 10px;
    height: 37px;
    left: 279.99px;
    top: 151.25px;
  }

  #warped .w4 {
    -moz-transform: rotate(0.05rad);
    -webkit-transform: rotate(0.05rad);
    -o-transform: rotate(0.05rad);
    -ms-transform: rotate(0.05rad);
    transform: rotate(0.05rad);
    width: 8px;
    height: 37px;
    left: 291.87px;
    top: 150.05px;
  }

  #warped .w5 {
    -moz-transform: rotate(0.35rad);
    -webkit-transform: rotate(0.35rad);
    -o-transform: rotate(0.35rad);
    -ms-transform: rotate(0.35rad);
    transform: rotate(0.35rad);
    width: 8px;
    height: 37px;
    left: 301.62px;
    top: 152.11px;
  }

  #warped .w6 {
    -moz-transform: rotate(0.66rad);
    -webkit-transform: rotate(0.66rad);
    -o-transform: rotate(0.66rad);
    -ms-transform: rotate(0.66rad);
    transform: rotate(0.66rad);
    width: 8px;
    height: 37px;
    left: 310.3px;
    top: 156.98px;
  }

  #warped .w7 {
    -moz-transform: rotate(0.95rad);
    -webkit-transform: rotate(0.95rad);
    -o-transform: rotate(0.95rad);
    -ms-transform: rotate(0.95rad);
    transform: rotate(0.95rad);
    width: 7px;
    height: 37px;
    left: 317.35px;
    top: 163.82px;
  }

  #warped .w8 {
    -moz-transform: rotate(1.22rad);
    -webkit-transform: rotate(1.22rad);
    -o-transform: rotate(1.22rad);
    -ms-transform: rotate(1.22rad);
    transform: rotate(1.22rad);
    width: 7px;
    height: 37px;
    left: 321.53px;
    top: 171.76px;
  }

  #warped .w9 {
    -moz-transform: rotate(1.45rad);
    -webkit-transform: rotate(1.45rad);
    -o-transform: rotate(1.45rad);
    -ms-transform: rotate(1.45rad);
    transform: rotate(1.45rad);
    width: 4px;
    height: 37px;
    left: 324.76px;
    top: 179.04px;
  }

  #warped .w10 {
    -moz-transform: rotate(1.67rad);
    -webkit-transform: rotate(1.67rad);
    -o-transform: rotate(1.67rad);
    -ms-transform: rotate(1.67rad);
    transform: rotate(1.67rad);
    width: 7px;
    height: 37px;
    left: 323.31px;
    top: 186.53px;
  }

  #warped .w11 {
    -moz-transform: rotate(1.9rad);
    -webkit-transform: rotate(1.9rad);
    -o-transform: rotate(1.9rad);
    -ms-transform: rotate(1.9rad);
    transform: rotate(1.9rad);
    width: 4px;
    height: 37px;
    left: 323.17px;
    top: 193.83px;
  }

  #warped .w12 {
    -moz-transform: rotate(2.11rad);
    -webkit-transform: rotate(2.11rad);
    -o-transform: rotate(2.11rad);
    -ms-transform: rotate(2.11rad);
    transform: rotate(2.11rad);
    width: 6px;
    height: 37px;
    left: 319.19px;
    top: 200.15px;
  }

  #warped .w13 {
    -moz-transform: rotate(2.31rad);
    -webkit-transform: rotate(2.31rad);
    -o-transform: rotate(2.31rad);
    -ms-transform: rotate(2.31rad);
    transform: rotate(2.31rad);
    width: 3px;
    height: 37px;
    left: 316.78px;
    top: 205.33px;
  }

  #warped .w14 {
    -moz-transform: rotate(2.54rad);
    -webkit-transform: rotate(2.54rad);
    -o-transform: rotate(2.54rad);
    -ms-transform: rotate(2.54rad);
    transform: rotate(2.54rad);
    width: 8px;
    height: 37px;
    left: 308.63px;
    top: 210.23px;
  }

  #warped .w15 {
    -moz-transform: rotate(2.82rad);
    -webkit-transform: rotate(2.82rad);
    -o-transform: rotate(2.82rad);
    -ms-transform: rotate(2.82rad);
    transform: rotate(2.82rad);
    width: 7px;
    height: 37px;
    left: 300.63px;
    top: 214.4px;
  }

  #warped .w16 {
    -moz-transform: rotate(3.11rad);
    -webkit-transform: rotate(3.11rad);
    -o-transform: rotate(3.11rad);
    -ms-transform: rotate(3.11rad);
    transform: rotate(3.11rad);
    width: 8px;
    height: 37px;
    left: 290.79px;
    top: 215.99px;
  }

  #warped .w17 {
    -moz-transform: rotate(3.34rad);
    -webkit-transform: rotate(3.34rad);
    -o-transform: rotate(3.34rad);
    -ms-transform: rotate(3.34rad);
    transform: rotate(3.34rad);
    width: 3px;
    height: 37px;
    left: 285.84px;
    top: 215.32px;
  }

  #warped .w18 {
    -moz-transform: rotate(3.55rad);
    -webkit-transform: rotate(3.55rad);
    -o-transform: rotate(3.55rad);
    -ms-transform: rotate(3.55rad);
    transform: rotate(3.55rad);
    width: 7px;
    height: 37px;
    left: 277.18px;
    top: 213.19px;
  }

  #warped .w19 {
    -moz-transform: rotate(3.85rad);
    -webkit-transform: rotate(3.85rad);
    -o-transform: rotate(3.85rad);
    -ms-transform: rotate(3.85rad);
    transform: rotate(3.85rad);
    width: 9px;
    height: 37px;
    left: 267.78px;
    top: 207.84px;
  }

  #warped .w20 {
    -moz-transform: rotate(4.17rad);
    -webkit-transform: rotate(4.17rad);
    -o-transform: rotate(4.17rad);
    -ms-transform: rotate(4.17rad);
    transform: rotate(4.17rad);
    width: 8px;
    height: 37px;
    left: 261.59px;
    top: 199.8px;
  }

  #warped .w21 {
    -moz-transform: rotate(4.46rad);
    -webkit-transform: rotate(4.46rad);
    -o-transform: rotate(4.46rad);
    -ms-transform: rotate(4.46rad);
    transform: rotate(4.46rad);
    width: 7px;
    height: 37px;
    left: 258.49px;
    top: 191.05px;
  }

  #warped .w22 {
    -moz-transform: rotate(6.85rad);
    -webkit-transform: rotate(6.85rad);
    -o-transform: rotate(6.85rad);
    -ms-transform: rotate(6.85rad);
    transform: rotate(6.85rad);
    width: 35px;
    height: 24px;
    left: 357.56px;
    top: 69.79px;
  }

  #warped .w23 {
    -moz-transform: rotate(7.04rad);
    -webkit-transform: rotate(7.04rad);
    -o-transform: rotate(7.04rad);
    -ms-transform: rotate(7.04rad);
    transform: rotate(7.04rad);
    width: 11px;
    height: 24px;
    left: 391.57px;
    top: 87.02px;
  }

  #warped .w24 {
    -moz-transform: rotate(7.14rad);
    -webkit-transform: rotate(7.14rad);
    -o-transform: rotate(7.14rad);
    -ms-transform: rotate(7.14rad);
    transform: rotate(7.14rad);
    width: 11px;
    height: 24px;
    left: 402.59px;
    top: 98.62px;
  }

  #warped .w25 {
    -moz-transform: rotate(7.29rad);
    -webkit-transform: rotate(7.29rad);
    -o-transform: rotate(7.29rad);
    -ms-transform: rotate(7.29rad);
    transform: rotate(7.29rad);
    width: 23px;
    height: 24px;
    left: 409.6px;
    top: 116.34px;
  }

  #warped .w26 {
    -moz-transform: rotate(7.44rad);
    -webkit-transform: rotate(7.44rad);
    -o-transform: rotate(7.44rad);
    -ms-transform: rotate(7.44rad);
    transform: rotate(7.44rad);
    width: 13px;
    height: 24px;
    left: 425.27px;
    top: 136.68px;
  }

  #warped .w27 {
    -moz-transform: rotate(7.55rad);
    -webkit-transform: rotate(7.55rad);
    -o-transform: rotate(7.55rad);
    -ms-transform: rotate(7.55rad);
    transform: rotate(7.55rad);
    width: 10px;
    height: 24px;
    left: 432.45px;
    top: 152.17px;
  }

  #warped .w28 {
    -moz-transform: rotate(7.68rad);
    -webkit-transform: rotate(7.68rad);
    -o-transform: rotate(7.68rad);
    -ms-transform: rotate(7.68rad);
    transform: rotate(7.68rad);
    width: 18px;
    height: 24px;
    left: 432.84px;
    top: 170.64px;
  }

  #warped .w29 {
    -moz-transform: rotate(7.84rad);
    -webkit-transform: rotate(7.84rad);
    -o-transform: rotate(7.84rad);
    -ms-transform: rotate(7.84rad);
    transform: rotate(7.84rad);
    width: 19px;
    height: 24px;
    left: 434.48px;
    top: 194.02px;
  }

  #warped .w30 {
    -moz-transform: rotate(7.97rad);
    -webkit-transform: rotate(7.97rad);
    -o-transform: rotate(7.97rad);
    -ms-transform: rotate(7.97rad);
    transform: rotate(7.97rad);
    width: 11px;
    height: 24px;
    left: 437.41px;
    top: 213.97px;
  }

  #warped .w31 {
    -moz-transform: rotate(8.08rad);
    -webkit-transform: rotate(8.08rad);
    -o-transform: rotate(8.08rad);
    -ms-transform: rotate(8.08rad);
    transform: rotate(8.08rad);
    width: 11px;
    height: 24px;
    left: 434.65px;
    top: 229.73px;
  }

  #warped .w32 {
    -moz-transform: rotate(8.27rad);
    -webkit-transform: rotate(8.27rad);
    -o-transform: rotate(8.27rad);
    -ms-transform: rotate(8.27rad);
    transform: rotate(8.27rad);
    width: 36px;
    height: 24px;
    left: 413.15px;
    top: 256.72px;
  }

  #warped .w33 {
    -moz-transform: rotate(8.5rad);
    -webkit-transform: rotate(8.5rad);
    -o-transform: rotate(8.5rad);
    -ms-transform: rotate(8.5rad);
    transform: rotate(8.5rad);
    width: 23px;
    height: 24px;
    left: 402.2px;
    top: 286.39px;
  }

  #warped .w34 {
    -moz-transform: rotate(8.66rad);
    -webkit-transform: rotate(8.66rad);
    -o-transform: rotate(8.66rad);
    -ms-transform: rotate(8.66rad);
    transform: rotate(8.66rad);
    width: 15px;
    height: 24px;
    left: 390.27px;
    top: 304.31px;
  }

  #warped .w35 {
    -moz-transform: rotate(8.82rad);
    -webkit-transform: rotate(8.82rad);
    -o-transform: rotate(8.82rad);
    -ms-transform: rotate(8.82rad);
    transform: rotate(8.82rad);
    width: 23px;
    height: 24px;
    left: 367.68px;
    top: 319.46px;
  }

  #warped .w36 {
    -moz-transform: rotate(8.96rad);
    -webkit-transform: rotate(8.96rad);
    -o-transform: rotate(8.96rad);
    -ms-transform: rotate(8.96rad);
    transform: rotate(8.96rad);
    width: 11px;
    height: 24px;
    left: 354.73px;
    top: 330.58px;
  }

  #warped .w37 {
    -moz-transform: rotate(9.07rad);
    -webkit-transform: rotate(9.07rad);
    -o-transform: rotate(9.07rad);
    -ms-transform: rotate(9.07rad);
    transform: rotate(9.07rad);
    width: 10px;
    height: 24px;
    left: 340.99px;
    top: 336.69px;
  }

  #warped .w38 {
    -moz-transform: rotate(9.18rad);
    -webkit-transform: rotate(9.18rad);
    -o-transform: rotate(9.18rad);
    -ms-transform: rotate(9.18rad);
    transform: rotate(9.18rad);
    width: 15px;
    height: 24px;
    left: 321.76px;
    top: 341.79px;
  }

  #warped .w39 {
    -moz-transform: rotate(9.31rad);
    -webkit-transform: rotate(9.31rad);
    -o-transform: rotate(9.31rad);
    -ms-transform: rotate(9.31rad);
    transform: rotate(9.31rad);
    width: 12px;
    height: 24px;
    left: 305.06px;
    top: 345.02px;
  }

  #warped .w40 {
    -moz-transform: rotate(9.42rad);
    -webkit-transform: rotate(9.42rad);
    -o-transform: rotate(9.42rad);
    -ms-transform: rotate(9.42rad);
    transform: rotate(9.42rad);
    width: 11px;
    height: 24px;
    left: 289.09px;
    top: 345.99px;
  }
`;
