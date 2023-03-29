import Post from "@/components/Post";
import { useRouter } from "next/router";
import PostLayout from "@/layouts/PostLayout";

export default function PostPage() {
  const router = useRouter();
  const { postID } = router.query;
  return (
    <div>
      <main className=" bg-slate-400">
        <Post key={undefined} id={""} title={""} content={""}></Post>
      </main>
      <section className=" bg-slate-300">comments</section>
    </div>
  );
}

PostPage.GetLayout = function GetLayout(page: React.ReactNode) {
  return <PostLayout>{page}</PostLayout>;
};
