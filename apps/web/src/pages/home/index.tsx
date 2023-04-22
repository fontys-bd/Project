import Base from "@/layouts/Base";
import HomeFilters from "@/components/home/HomeFilters";
import Feed from "@/components/home/Feed";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto border-x border-solid border-gray-500 bg-gray-200 p-2 px-2">
      <Feed />
    </div>
  );
}

Home.GetLayout = function GetLayout(page: React.ReactNode) {
  return <Base>{page}</Base>;
};
