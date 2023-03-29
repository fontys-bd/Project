import HomeFilterButton from "./HomeFilterButton"
import { BsSliders } from "react-icons/bs"

export default function HomeFilters() {
    const filters = ["Most popular", "Newest", "Active", "Urgent", "Closed"]
    return (
        <section className="mx-5 my-2">
            <div className="flex flex-row items-center">
                <section className="flex flex-row">
                    <BsSliders style={{
                        fontSize: "1.5rem",
                        marginRight: "0.5rem",
                    }} />
                    <div>Sort by:</div>
                </section>
                {filters.map((filter) => {
                    if (filter === "Most popular") {
                        return <HomeFilterButton>{filter}</HomeFilterButton>
                    }
                    return <HomeFilterButton>{filter}</HomeFilterButton>
                }
                )}
            </div>
        </section>
    )
}