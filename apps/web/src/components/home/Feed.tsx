import { Post } from "src/types/postSchema";
import PostPreview from "@/components/PostPreview";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/utils/fetcher";

const PAGE_SIZE = 10;

export default function Feed() {
  const { data, mutate, size, setSize, isValidating, isLoading } =
    useSWRInfinite(
      (index) =>
        `http://localhost:3003/post?per_page=${PAGE_SIZE}&page=${index + 1}`,
      fetcher
    );

  const posts = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  if (isRefreshing) return <p>Refreshing...</p>;
  if (isLoading && !isLoadingMore) return <p>Loading...</p>;
  if (isEmpty) return <p>No posts found</p>;

  return (
    <>
      {posts?.map((post: { data: any; nextPageCursor: Date }) => {
        return post?.data?.map((post: Post) => {
          return (
            <PostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              username={post.author ? post.author.username : "Anonymous"}
              created_at={post.created_at}
              status={post.status}
            />
          );
        });
      })}
    </>
  );
}
