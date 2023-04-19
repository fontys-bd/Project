import PostPreview from "@/components/PostPreview";
import Base from "@/layouts/Base";
import HomeFilters from "@/components/home/HomeFilters";
import { Post } from "../../types/post";
import { fetchPosts } from "../../api/posts";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main className="mt-4 h-screen overflow-y-auto border-x border-solid border-gray-500 px-2">
      <section className="bg-gray-200 p-2 pb-16">
        <HomeFilters />
        {posts
          .sort((a, b) => {
            //Sort posts based on date created - most recent posts are at the top
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);

            return dateB.getTime() - dateA.getTime();
          })
          .map((post: Post) => (
            <PostPreview
              key={post.id}
              id={post.id}
              title={post.title}
              username={post.authorUsername}
              created_at={post.created_at}
              status={post.status}
            />
          ))}
      </section>
    </main>
  );
}

Home.GetLayout = function GetLayout(page: React.ReactNode) {
  return <Base>{page}</Base>;
};

export const getServerSideProps = async () => {
  const posts = await fetchPosts();
  return {
    props: { posts },
  };
};
