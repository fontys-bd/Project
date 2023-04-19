import { _auth } from "../../../utils/firebase.js";
import { useState } from "react";
import { useRouter } from "next/router.js";

export function SignInWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function signInWithEmail() {
    await _auth
      .signInWithEmailAndPassword(email, password)
      .then(async (authCreds) => {
        const id_token = await authCreds.user?.getIdToken();
        console.log(id_token);
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