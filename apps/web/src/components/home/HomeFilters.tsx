import HomeFilterButton from "./HomeFilterButton";
import { BsSliders } from "react-icons/bs";

export default function HomeFilters() {
  const filters = ["Most popular", "Newest", "Active", "Urgent", "Closed"];
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
            return <HomeFilterButton key={key}>{filter}</HomeFilterButton>;
          })}
        </nav>
      </div>
    </div>
  );
}
