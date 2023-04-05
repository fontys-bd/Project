import { auth, googleAuthProvider } from "../../../utils/firebase.js";
import Image from "next/image";

export function SingInWithGoogle() {
  async function singInWithGoogle() {
    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (authCreds) => {
        const id_token = await authCreds.user?.getIdToken();
        console.log(id_token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
