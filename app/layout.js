import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb app create next app",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar c />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
