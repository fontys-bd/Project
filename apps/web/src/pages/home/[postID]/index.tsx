import Post from "@/components/post/Post";
import { useRouter } from "next/router";
import PostLayout from "@/layouts/PostLayout";
import Comment from "@/components/post/Comment";

export default function PostPage() {
  const router = useRouter();
  const { postID } = router.query;
  return (
    <div className="shadow-lg">
      <section>
        <Post
          key={undefined}
          id={postID as string}
          title={""}
          content={{}}
          user={null}
          createdAt={""}
          updatedAt={""}
          status={""}
        />
      </section>

      <Comment />
    </div>
  );
}

PostPage.GetLayout = function GetLayout(page: React.ReactNode) {
  return <PostLayout>{page}</PostLayout>;
};
