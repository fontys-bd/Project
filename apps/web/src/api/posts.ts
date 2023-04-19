import { Post } from "../types/post";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_POST_SERVICE_URL + "/post" ||
      "http://localhost:3003/post"
  );
  const posts = await response.json();
  return posts;
};
