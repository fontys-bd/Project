import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 flex justify-between bg-white p-2 shadow-md">
        <Link href={"#"}>Blind Date</Link>
        <Link href={"/"}>LOGOUT HERE</Link>
      </header>
    </>
  );
}
