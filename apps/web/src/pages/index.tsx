import Link from "next/link";
import { useRouter } from "next/router";

export default function Main() {
  const router = useRouter();

  function handleClick() {
    router.push("/home");
  }

  return (
    <main className="grid h-screen place-content-center">
      {/* <Link href={"/home"} className="text-4xl">
        Login HERE!
      </Link> */}

      <style jsx global>{`
        body {
          background-image: url("/background.png");
          background-size: cover;
        }
      `}</style>

      <img
        src="/blind_date_logo(1).png"
        alt="Logo"
        className="h-250 mb-4 w-80 rounded-lg"
      />
      <form className="mb-4 grid gap-4">
        <input
          type="email"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your email"
        />

        <input
          type="password"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your password"
        />
      </form>
      <button
        onClick={handleClick}
        className="w-full rounded bg-pink-400 px-4 py-2 font-bold text-white hover:bg-pink-600"
      >
        Login
      </button>
    </main>
  );
}
