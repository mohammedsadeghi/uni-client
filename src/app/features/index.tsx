import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import boxCounterReducer from "./boxCounter/BoxCounter";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  // ...your other reducers here
  boxCounter: boxCounterReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);
