import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Register() {
  const router = useRouter();

  function backToLogin() {
    router.push("/");
  }

  return (
    <>
      <style jsx global>{`
        body {
          background-image: url("/background.png");
          background-size: cover;
        }
      `}</style>

      <Image
        src="/blind_date_logo(1).png"
        alt="Logo"
        width={400}
        height={250}
        style={{ marginBottom: "1rem" }}
      />
      <form className="mb-4 grid gap-4">
        <input
          type="email"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your email"
        />
        <input
          type="username"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your username"
        />
        <input
          type="password"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your password"
        />

        <input
          type="first_name"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="First name (Optional)"
        />

        <input
          type="last_name"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Last name (Optional)"
        />

        <button className="mb-4 w-full rounded bg-pink-400 px-4 py-2 font-bold text-white hover:bg-pink-600">
          Register
        </button>
      </form>

      <Link href={"/"} className="text-xl">
        Already have an account? Click here to login!
      </Link>
    </>
  );
}
