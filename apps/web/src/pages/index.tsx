import Link from "next/link";

export default function Main() {
  return (
    <main className="grid h-screen place-content-center">
      <Link href={"/home"} className="text-4xl">
        Login HERE
      </Link>
    </main>
  );
}
