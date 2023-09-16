import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByLocation } from "../redux/reducers/Products/querries";
import { placeLocation } from "../_const";
import { selectProductsByCategory } from "../redux/reducers/Products/selectors";

function useFetchProducts(setLoading, categorySelected) {
  const products = useSelector(selectProductsByCategory(categorySelected));
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsByLocation(placeLocation, dispatch, setLoading);
  }, [dispatch, setLoading, categorySelected]);

  return products;
}

export default useFetchProducts;
