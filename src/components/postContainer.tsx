import React, { useState, useEffect } from "react";
import { IPost } from "../models/IPost";
import { postApi } from "../services/userServise";
import PostItem from "./postItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postApi.useFetchAllPostsQuery(limit);
  //{ pollingInterval: 1000 } можно передать как аргуемент и будет запрос каждую секунду уходить
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    postApi.useCreatePostMutation();
  const [updatePost, {}] = postApi.useUpdatePostMutation();
  const [deletePost, {}] = postApi.useDeletePostMutation();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLimit(10);
  //     }, 2000);
  //   });

  const headnlerPost = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const heandleRemove = (post: IPost) => {
    deletePost(post);
  };
  const heandleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <div>
      <div>
        <button onClick={() => refetch()}>Refetch</button>
        <button onClick={() => headnlerPost()}>Add new Post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Произошла ошибке</h1>}
        {posts &&
          posts?.map((post) => (
            <PostItem
              post={post}
              key={post.id}
              remove={heandleRemove}
              update={heandleUpdate}
            />
          ))}
      </div>
    </div>
  );
};

export default PostContainer;
