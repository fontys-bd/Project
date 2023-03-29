import Header from "@/components/navigation/Header";
import Topics from "@/components/navigation/Topics";
import Head from "next/head";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children, ...props }: BaseLayoutProps) {
  return (
    <>
      <Head>
        <title>Blind Date App</title>
      </Head>
      <div className="flex h-screen flex-col">
        <Header />
        <div className=" mx-56 flex">
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
