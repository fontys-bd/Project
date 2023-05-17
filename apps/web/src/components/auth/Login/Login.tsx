import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { SignInWithEmail } from "./SignInWithEmail";
import { SingInWithGoogle } from "./SignInWithGoogle";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <Image
        src={"/background.png"}
        quality={50}
        fill
        sizes="100vw"
        style={{ zIndex: -40, objectFit: "cover" }}
        alt={"Background image"}
      />
      <Image
        src={"/blind_date_logo(1).png"}
        alt={"Logo"}
        width={400}
        height={250}
        style={{ marginBottom: "1rem" }}
      />

      <SignInWithEmail />

      <SingInWithGoogle />
      <button onClick={() => signIn()}> hello</button>

      <Link href={"/register"} className="text-blue mb-4 text-center text-xl">
        Are you a new user? Click here to register!
      </Link>
    </>
  );
}
