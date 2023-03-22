import React, { useEffect } from "react";
import "./App.css";
import PostContainer from "./components/postContainer";
import PostContainerTwo from "./components/postContainerTwo";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchUsers } from "./store/reducers/actionCreator";
import { userSlice } from "./store/reducers/userSlice";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  return (
    // <div>
    //   {isLoading && "Loading..."}
    //   {error && <h1>{error}</h1>}
    //   {JSON.stringify(users, null, 2)}
    // </div>
    <div>
      <PostContainer />
      <PostContainerTwo />
    </div>
  );
}

export default App;
