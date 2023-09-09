import "./style/style.scss";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "kandle",
  description: "40x more rewarding than being a crypto exchange’s affiliate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="main-bg">
        <header className="header">
          <Image
            className="header-logo"
            src="/assets/branding/logo.svg"
            alt="kandle Logo"
            width={180}
            height={28}
            priority
          />
          <button className="headerButton">Track Commission</button>
        </header>

        {children}
      </body>
    </html>
  );
}
