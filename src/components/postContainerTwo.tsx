import React from "react";
import { postApi } from "../services/userServise";
import PostItem from "./postItem";

const PostContainerTwo = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(100);
  return (
    <div>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Произошла ошибке</h1>}
        {/* {posts && posts?.map((post) => <PostItem post={post} key={post.id} />)} */}
      </div>
    </div>
  );
};

export default PostContainerTwo;
