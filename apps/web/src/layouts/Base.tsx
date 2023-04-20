import Header from "@/components/navigation/Header";
import Topics from "@/components/navigation/Topics";
import Head from "next/head";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children, ...props }: BaseLayoutProps) {
  return (
    <>
      <Head>
        <title>Blind Date App</title>
      </Head>
      <div className="flex h-screen flex-col">
        <Header />
        <div className="grid grid-cols-6 overflow-clip">
          <aside className="col-span-1 m-2 text-lg">
            <Topics />
          </aside>
          <main className="col-span-4">{children}</main>
          <aside className="col-span-1 m-2 text-center text-lg">Saved</aside>
        </div>
      </div>
    </>
  );
}
