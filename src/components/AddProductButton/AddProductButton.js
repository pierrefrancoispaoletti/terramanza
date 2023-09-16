import React from "react";
import { AddProductButtonStyled } from "./add-product-button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/reducers/Products/actions";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddProductButton = () => {
  const dispatch = useDispatch();
  return (
    <AddProductButtonStyled
      type="button"
      onClick={() => dispatch(toggleModal("ajouter"))}
    >
      <FontAwesomeIcon icon={faPlus} size="2x" />
    </AddProductButtonStyled>
  );
};

export default AddProductButton;
