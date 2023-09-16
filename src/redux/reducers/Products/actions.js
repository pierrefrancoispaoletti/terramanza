import ProductsActionTypes from "./types";

export const getProductsByLocationAction = ({ products }) => ({
  type: ProductsActionTypes.GET_PRODUCTS_BY_LOCATION,
  payload: products,
});

export const addProductAction = (product) => ({
  type: ProductsActionTypes.ADD_PRODUCT,
  payload: product,
});

export const deleteProductAction = (product) => ({
  type: ProductsActionTypes.DELETE_PRODUCT,
  payload: product,
});

export const updateProductAction = (product) => ({
  type: ProductsActionTypes.UPDATE_PRODUCT,
  payload: product,
});

export const toggleModal = (type) => ({
  type: ProductsActionTypes.TOGGLE_MODAL,
  payload: type,
});

export const setProductToEdit = (product) => ({
  type: ProductsActionTypes.SET_PRODUCT_TO_EDIT,
  payload: product,
});
