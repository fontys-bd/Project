export default function HomeFilterButton(filter: any, selected: boolean) {
    return (
        <>
            {selected ? <button className="mx-2 bg-transparent hover:bg-gray-400 p-1 px-3 rounded-2xl">{filter.children}</button> : <button className="mx-2 bbg-gray-400 p-1 px-3 rounded-2xl">{filter.children}</button>}
        </>

    );
}