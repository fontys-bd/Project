import { GetPosts } from "@/hooks/GetPosts";
import { Post } from "src/types/post";
import PostPreview from "@/components/PostPreview";

export default function Feed() {
  const { data: posts, isLoading, error } = GetPosts();

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading || !posts) return <div>Loading...</div>;

  return (
    <>
      {posts
        .sort(
          (
            a: { created_at: string | number | Date },
            b: { created_at: string | number | Date }
          ) => {
            //Sort posts based on date created - most recent posts are at the top
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);

            return dateB.getTime() - dateA.getTime();
          }
        )
        .map((post: Post) => {
          console.log(post.id);
          return (
            <PostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              username={post.authorUsername}
              created_at={post.created_at}
              status={post.status}
            />
          );
        })}
    </>
  );
}
