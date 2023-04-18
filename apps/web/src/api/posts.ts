import { Post } from "../types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("http://localhost:3003/post");
  const posts = await response.json();
  return posts;
};
