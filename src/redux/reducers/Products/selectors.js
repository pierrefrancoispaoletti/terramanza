import { createSelector } from "reselect";

const cafeOrders = {
  classiques: 0,
  spéciaux: 1,
  monoarabica: 2,
  "recettes-froides": 3,
  "illy-crema": 4,
  domori: 5,
  eaux: 6,
  softs: 7,
  "fruits-frais": 8,
  granita: 9,
  bieres: 10,
  vins: 11,
  salades: 20,
  bagels: 21,
};

const compare = (a, b) => {
  return a > b ? 1 : -1;
};
const selectProducts = (state) => state.products;

export const selectProductsByCategory = (category) =>
  createSelector([selectProducts], ({ products }) =>
    products.filter((product) => product.category === category)
  );

export const selectModalType = createSelector(
  [selectProducts],
  ({ modalType }) => modalType
);

export const selectProductToEdit = createSelector(
  [selectProducts],
  ({ productToEdit }) => productToEdit
);

export const selectProductsBySubCategory = (filter, category) =>
  createSelector([selectProductsByCategory(category)], (products) =>
    products && filter
      ? products.filter((product) =>
          product?.subCategory ? product?.subCategory === filter : product
        )
      : products.sort((a, b) => {
          let index_result = compare(
            cafeOrders[b?.price],
            cafeOrders[a?.price]
          );
          return index_result;
        })
  );
