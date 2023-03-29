import Header from "@/components/navigation/Header";
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
      <div className="flex h-screen flex-col bg-orange-100">
        <Header />
        <div className=" mx-56 flex bg-white">
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
