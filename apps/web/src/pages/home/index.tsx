import Base from "@/layouts/Base";
import HomeFilters from "@/components/home/HomeFilters";
import Feed from "@/components/home/Feed";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("Newest");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="h-screen overflow-y-auto border-x border-solid border-gray-500 bg-gray-200 p-2 px-2">
      <HomeFilters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      <Feed selectedFilter={selectedFilter} />
    </div>
  );
}

Home.GetLayout = function GetLayout(page: React.ReactNode) {
  return <Base>{page}</Base>;
};
