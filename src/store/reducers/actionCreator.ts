import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "./../store";
import { userSlice } from "./userSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(userSlice.actions.userFetchingSucces(response.data));
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      dispatch(userSlice.actions.userFetchingError(e.message));
    }
  }
};
