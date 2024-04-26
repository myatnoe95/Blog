import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { SkeletonTheme } from "react-loading-skeleton";

import Footer from "@/components/app/Footer";
import Header from "@/components/app/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${inter.className}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
