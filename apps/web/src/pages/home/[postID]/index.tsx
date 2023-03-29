import Post from "@/components/post/Post";
import { useRouter } from "next/router";
import PostLayout from "@/layouts/PostLayout";

export default function PostPage() {
  const router = useRouter();
  const { postID } = router.query;
  return (
    <div className="shadow-lg">
      <main>
        <Post
          key={undefined}
          id={""}
          title={""}
          content={{}}
          user={null}
          createdAt={""}
          updatedAt={""}
          status={""}
        ></Post>
      </main>
      <section className=" bg-slate-300">comments</section>
    </div>
  );
}

PostPage.GetLayout = function GetLayout(page: React.ReactNode) {
  return <PostLayout>{page}</PostLayout>;
};
