import { _auth, googleAuthProvider } from "../../../utils/firebase.js";
import { auth } from "firebase-admin";
import { ApiError } from "next/dist/server/api-utils/index.js";
import Image from "next/image";
import { useRouter } from "next/router.js";

export function SingInWithGoogle() {
  const router = useRouter();

  async function singInWithGoogle() {
    await _auth
      .signInWithPopup(googleAuthProvider)
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

    // verifyToken();
  }

  // function uses firebase-admin sdk to verify integrity of token
  // async function verifyToken() {
  //   const token = await _auth.currentUser?.getIdToken();
  //   if (!token || token == null) throw new ApiError(403, "Forbidden");
  //   console.log(token);

  //   await auth()
  //     .verifyIdToken(token)
  //     .then(async (decodedToken) => {
  //       // * will do things with the decoded token later on
  //       router.push("/home");
  //     });
  // }

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
