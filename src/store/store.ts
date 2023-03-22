import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { postApi } from "../services/userServise";
import userReducer from "./reducers/userSlice";
const rootReduser = combineReducers({
  userReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupsStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupsStore>;
export type AppDispatch = AppStore["dispatch"];
