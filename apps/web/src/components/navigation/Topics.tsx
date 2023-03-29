import Link from "next/link";

export default function Topics() {
  const topics = ["All", "Fashion", "Activities", "Locations", "Other"];
  return (
    <ul className=""> 
    <h1 className="text-center">Topics</h1>
      {topics.map((topic) => (
        <li key={topic}>
            <button className="w-full px-1 text-left hover:bg-gray-300">{topic}</button>
        </li>
      ))}
    </ul>
  );
}
