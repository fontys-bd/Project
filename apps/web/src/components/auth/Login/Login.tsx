import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { SignInWithEmail } from "./SignInWithEmail";
import { SingInWithGoogle } from "./SignInWithGoogle";

export default function Login() {
  return (
    <>
      <style jsx global>{`
        body {
          background-image: url("/background.png");
          background-size: cover;
        }
      `}</style>

      <Image
        src={"/blind_date_logo(1).png"}
        alt={"Logo"}
        width={400}
        height={250}
        style={{ marginBottom: "1rem" }}
      />

      <SignInWithEmail />

      <SingInWithGoogle />

      <Link href={"/register"} className="text-blue mb-4 text-center text-xl">
        Are you a new user? Click here to register!
      </Link>
    </>
  );
}
