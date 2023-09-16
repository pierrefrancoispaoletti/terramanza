import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { productReducer } from "./Products/reducer";
import { placeLocation } from "../../_const";

const persistConfig = {
  key: placeLocation,
  storage,
  whitelist: ["user", "products"],
};

const reducers = combineReducers({
  user: userReducer,
  products: productReducer,
});

export default persistReducer(persistConfig, reducers);
