import Post from "@/components/post/Post";
import { useRouter } from "next/router";
import PostLayout from "@/layouts/PostLayout";
import Comment from "@/components/post/Comment";
import { prisma } from "@/server/db";
import { PostSchema } from "@/types/post";

export default function PostPage({ post }: { post: PostSchema }) {
  return (
    <div className="shadow-lg">
      <section>
        <Post post={post} />
      </section>

      <Comment postID={post.id} />
    </div>
  );
}

PostPage.GetLayout = function GetLayout(page: React.ReactNode) {
  return <PostLayout>{page}</PostLayout>;
};

export async function getStaticPaths() {
  const ids = await prisma.post.findMany({
    select: {
      id: true,
    },
  });

  // Make id array into params array of objects
  // [{ params: { id: "1" } }, { params: { id: "2" } }]

  let params = [];
  for (const _ of ids) {
    params.push({ params: { postID: _.id } });
  }

  return {
    paths: params,
    fallback: "blocking",
  };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  let post = await prisma.post.findFirst({
    where: {
      id: params.postID,
    },
  });

  // Make everything into primitve types - Next/SWC doesn't like Prisma types/Dates
  post = JSON.parse(JSON.stringify(post));

  // Pass post data to the page via props
  return {
    props: { post },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 60,
  };
}
