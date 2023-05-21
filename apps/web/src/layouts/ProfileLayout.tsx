import Header from "@/components/navigation/Header";
import Head from "next/head";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children, ...props }: BaseLayoutProps) {
  return (
    <>
      <Head>
        <title>Blind Date App</title>
      </Head>
      <div className="flex h-screen flex-col bg-slate-50">
        <Header />
        <div className="mx-20 flex  ">
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
