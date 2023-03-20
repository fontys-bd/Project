import Post from "@/components/Post";
import Base from "@/layouts/Base";

export default function Home() {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return <Post title={"Title Here"} content={"Content Here"} key={i} />;
        })}
    </>
  );
}

Home.GetLayout = function GetLayout(page: React.ReactNode) {
  return <Base>{page}</Base>;
};
