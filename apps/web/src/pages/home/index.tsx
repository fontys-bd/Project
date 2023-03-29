import PostPreview from "@/components/PostPreview";
import Base from "@/layouts/Base";
import HomeFilters from "@/components/home/HomeFilters";

export default function Home() {
  return (
    <main className="border-solid border-x h-screen border-gray-500 px-2 mt-4 overflow-y-auto">
      <section className="bg-gray-200 p-2">
        <HomeFilters />
        {Array(5)
          .fill(0)
          .map((_, i) => {
            return (
              <PostPreview
                id={i.toString()}
                title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?"}
                key={i}
              />
            );
          })}
      </section>
    </main>
  );
}

Home.GetLayout = function GetLayout(page: React.ReactNode) {
  return <Base>{page}</Base>;
};
