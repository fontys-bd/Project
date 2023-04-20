import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router.js";

export function SignInWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // TODO: Proper error handling https://firebase.google.com/docs/auth/web/google-signin#web-version-9_2
  async function signInWithEmail() {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (authCreds) => {
        const id_token = await authCreds.user?.getIdToken();
        router.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <div>
      <form className="mb-4 grid gap-4">
        <input
          type="email"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full rounded-md border border-gray-500 px-4 py-2 text-center"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        className="mb-4 w-full rounded bg-pink-400 px-4 py-2 font-bold text-white hover:bg-pink-600"
        onClick={signInWithEmail}
      >
        Sign In
      </button>
    </div>
  );
}
