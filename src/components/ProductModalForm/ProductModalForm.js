import React from "react";
import { useSelector } from "react-redux";
import {
  addProduct,
  updateProdut,
} from "../../redux/reducers/Products/querries";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import FormInput from "../FormInput/FormInput";
import { AddProductButtonStyled } from "../ProductModal/product-modal.style";

const ProductModalForm = ({
  children,
  type,
  setProduct,
  initialState,
  dispatch,
  ...product
}) => {
  const { token } = useSelector(selectCurrentUser);
  const {
    _id,
    title,
    description,
    price,
    category,
    location,
    visible,
    couleur,
    subCategory,
  } = product;

  const clearState = () => setProduct({ ...initialState });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newProduct = {
      title,
      description,
      price,
      category,
      location,
      visible,
      couleur,
      subCategory,
    };
    if (type === "ajouter") {
      addProduct(newProduct, dispatch, token).then(() => clearState());
    }
    if (type === "editer") {
      updateProdut({ ...newProduct, _id }, dispatch, token).then(() =>
        clearState()
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="title"
        label="Nom du produit"
        value={title}
        handleChange={handleChange}
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        className="textarea-description"
        id="description"
        type="text"
        name="description"
        rows={5}
        cols={28}
        value={description}
        onChange={handleChange}
      />
      <FormInput
        type="number"
        name="price"
        pattern="\\d*"
        step={0.1}
        handleChange={handleChange}
        label="Prix"
        value={price}
        required
      />
      {children}
      <AddProductButtonStyled
        disabled={!title || !price || !category || !location}
        type="submit"
        modalType={type}
      >
        {`${type} un produit`?.toUpperCase()}
      </AddProductButtonStyled>
    </form>
  );
};

export default ProductModalForm;
