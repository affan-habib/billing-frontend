import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ApiReducer from "./apiSlice";
import { cartReducer } from "./addToCart";
import confirmReducer from "./confirmSlice";
import toastReducer from "./toastSlice";
import sidebarShowReducer from "./sidebarSlice";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export default configureStore({
  reducer: {
    api: ApiReducer,
    cart: cartReducer,
    confirm: confirmReducer,
    toast: toastReducer,
    sidebarShow: sidebarShowReducer,
  },
  middleware,
});

sagaMiddleware.run(sagas);
