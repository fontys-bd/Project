import PostPreview from "@/components/PostPreview";
import Base from "@/layouts/Base";

export default function Home() {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <PostPreview
              id={i.toString()}
              title={"Title Here"}
              content={"Content Here"}
              key={i}
            />
          );
        })}
    </>
  );
}

Home.GetLayout = function GetLayout(page: React.ReactNode) {
  return <Base>{page}</Base>;
};
