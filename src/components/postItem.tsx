import React, { FC } from "react";
import { IPost } from "../models/IPost";
interface PostItemPorps {
  post: IPost;
  update: (post: IPost) => void;
  remove: (post: IPost) => void;
}
const PostItem: FC<PostItemPorps> = ({ post, remove, update }) => {
  const heandleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };
  const heandleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  return (
    <div onClick={heandleUpdate}>
      {post.id}. {post.title}
      <button onClick={heandleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
