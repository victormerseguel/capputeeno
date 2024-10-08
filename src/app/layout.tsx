import { FilterContextProvider } from "../context/filter-context";
import { Header } from "../components/header/header";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "capputeeno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          <div style={{ marginTop: "80px" }}>{children}</div>
        </FilterContextProvider>
      </body>
    </html>
  );
}
