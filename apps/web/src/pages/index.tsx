import Link from "next/link";
import { useRouter } from "next/router";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1u9YMqY_fG-C4xCq62hAPiRQMFK7Nt18",
  authDomain: "blinddate-381513.firebaseapp.com",
  projectId: "blinddate-381513",
  storageBucket: "blinddate-381513.appspot.com",
  messagingSenderId: "802932977941",
  appId: "1:802932977941:web:710b86663c664be865791c",
};

export default function Main() {
  const router = useRouter();
  const app = initializeApp(firebaseConfig);

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

      <form className="mb-4">
        <input
          type="text"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your email"
        />
      </form>

      <form className="mb-4">
        <input
          type="text"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your password"
        />
      </form>

      <button
        onClick={handleClick}
        className="rounded bg-pink-400 py-2 px-4 font-bold text-white hover:bg-pink-600"
      >
        Login
      </button>
    </main>
  );
}
