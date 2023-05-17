import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

type NextPageWithLayout = NextPage & {
  GetLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function BlindDate({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const GetLayout = Component.GetLayout ?? ((page: any) => page);
  return (
    <SessionProvider session={session}>
      <SWRConfig>{GetLayout(<Component {...pageProps} />)}</SWRConfig>
    </SessionProvider>
  );
}

export default BlindDate;
