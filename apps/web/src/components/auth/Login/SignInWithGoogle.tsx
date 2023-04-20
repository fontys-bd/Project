import { auth } from "@/utils/firebase.ts";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import Image from "next/image";

export function SingInWithGoogle() {
  // TODO: Proper error handling https://firebase.google.com/docs/auth/web/google-signin#web-version-9_2
  async function singInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  return (
    <button
      className="mb-4 flex w-full items-center justify-center gap-4 rounded border border-black bg-white px-4 py-2 text-right font-bold text-black hover:bg-gray-100"
      onClick={singInWithGoogle}
    >
      <Image
        src={"/google_logo.png"}
        alt={"Google logo"}
        width={30}
        height={30}
      />
      Sign in with Google
    </button>
  );
}
