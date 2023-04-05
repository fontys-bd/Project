import PostPreview from "@/components/PostPreview";
import Base from "@/layouts/Base";
import HomeFilters from "@/components/home/HomeFilters";

export default function Home() {
  return (
    <main className="mt-4 h-screen overflow-y-auto border-x border-solid border-gray-500 px-2">
      <section className="bg-gray-200 p-2">
        <HomeFilters />
        {Array(5)
          .fill("642aba30da8ca3fc6e50d70b")
          .map((_, i) => {
            return (
              <PostPreview
                id={_}
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?"
                }
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
