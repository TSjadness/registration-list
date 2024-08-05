import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBarMenu from "@/components/sidebar";
import Providers from "@/provider";
import WelcomeScreen from "./home/pages";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Listagem de Usuário",
  description: "A list of things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen`}>
        <Providers>
          <SideBarMenu />
          <main className="flex-1 p-4  w-full"> {children}</main>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
