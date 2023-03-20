import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  GetLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function BlindDate({ Component, pageProps }: AppPropsWithLayout) {
  const GetLayout = Component.GetLayout ?? ((page: any) => page);
  return GetLayout(<Component {...pageProps} />);
}

export default BlindDate;
