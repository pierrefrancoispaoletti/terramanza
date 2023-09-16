import ProductsActionTypes from "./types";
import { filteredProductsList } from "./utils";

const INITIAL_STATE = {
  products: [],
  modalType: {
    type: "",
    open: false,
  },
  productToEdit: undefined,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_BY_LOCATION:
      return {
        ...state,
        products: action.payload,
      };
    case ProductsActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: filteredProductsList("ADD_PRODUCT", state, action.payload),
      };
    case ProductsActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: filteredProductsList("DELETE_PRODUCT", state, action.payload),
      };

    case ProductsActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: filteredProductsList("UPDATE_PRODUCT", state, action.payload),
      };
    case ProductsActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalType: {
          type: action.payload,
          open: action.payload !== "" && !state.modalType.open,
        },
      };
    case ProductsActionTypes.SET_PRODUCT_TO_EDIT:
      return {
        ...state,
        productToEdit: action.payload,
      };
    default:
      return state;
  }
};
