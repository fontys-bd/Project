import Link from "next/link";

export default function Topics() {
  return (
    <ul>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <li key={i} className=" hover:bg-blue-500">
              <Link href={`#${i}`}>Topic {i}</Link>
            </li>
          );
        })}
    </ul>
  );
}
