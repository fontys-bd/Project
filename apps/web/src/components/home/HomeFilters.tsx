import { useState } from "react";
import HomeFilterButton from "./HomeFilterButton";
import { BsSliders } from "react-icons/bs";

interface HomeFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function HomeFilters({
  selectedFilter,
  onFilterChange,
}: HomeFiltersProps) {
  const filters = ["Most popular", "Newest", "Active", "Urgent", "Closed"];

  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
  };

  return (
    <div className="mx-5 my-2">
      <div className="flex flex-row items-center">
        <BsSliders
          style={{
            fontSize: "1.5rem",
            marginRight: "0.5rem",
          }}
        />
        <span>Sort by:</span>
        <nav>
          {filters.map((filter, key) => {
            return (
              <HomeFilterButton
                key={key}
                selected={selectedFilter === filter}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </HomeFilterButton>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
