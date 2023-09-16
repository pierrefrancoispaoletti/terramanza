import React from "react";
import { CheckBoxContainer } from "../ProductModal/product-modal.style";

const WinePartProductModal = ({ couleur, setProduct }) => {
  return (
    <CheckBoxContainer>
      {couleur.map((color) => (
        <div key={color.value}>
          <label htmlFor={color.value}>{color.value.toUpperCase()}</label>
          <input
            name={color.value}
            type="checkbox"
            checked={color.isChecked}
            value={color.value}
            onChange={() =>
              setProduct((prevState) => ({
                ...prevState,
                ...(color.isChecked = !color.isChecked),
              }))
            }
          />
          <input
            type="number"
            pattern="\\d*"
            step={0.1}
            value={color.price}
            onChange={(e) =>
              setProduct((prevState) => ({
                ...prevState,
                ...(color["price"] = e.target.value),
              }))
            }
          />
          €
        </div>
      ))}
    </CheckBoxContainer>
  );
};

export default WinePartProductModal;
