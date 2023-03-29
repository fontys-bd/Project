export default function HomeFilterButton(filter: any, selected: boolean) {
  //! CHANGE FILTER TYPE
  return (
    <>
      {selected ? (
        <button className="mx-2 rounded-2xl bg-transparent p-1 px-3 hover:bg-gray-400">
          {filter.children}
        </button>
      ) : (
        <button className="bbg-gray-400 mx-2 rounded-2xl p-1 px-3">
          {filter.children}
        </button>
      )}
    </>
  );
}
