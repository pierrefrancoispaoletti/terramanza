import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FABContainer } from "./float-action-button.style";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FloatActionButton = () => {
  return (
    <FABContainer>
      <div id="warped">
        <span class="w0">C</span>
        <span class="w1">O</span>
        <span class="w2">M</span>
        <span class="w3">M</span>
        <span class="w4">A</span>
        <span class="w5">N</span>
        <span class="w6">D</span>
        <span class="w7">E</span>
        <span class="w8">S</span>
        <span class="w9"> </span>
        <span class="w10">-</span>
        <span class="w11"> </span>
        <span class="w12">L</span>
        <span class="w13">I</span>
        <span class="w14">V</span>
        <span class="w15">R</span>
        <span class="w16">A</span>
        <span class="w17">I</span>
        <span class="w18">S</span>
        <span class="w19">O</span>
        <span class="w20">N</span>
        <span class="w21">S</span>
      </div>

      <button type="button" onClick={() => console.log("clicked")}>
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </button>
    </FABContainer>
  );
};

export default FloatActionButton;
