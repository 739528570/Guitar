"use client";
import { useGlobalStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/config/menu";
import "./globals.css";

export default function RootLayout({ children }) {
  const title = useGlobalStore((state) => state.title);

  return (
    <html lang="zh" className="h-screen select-none">
      <head>
        <title>Guitar</title>
      </head>
      <body className="h-screen">
        <main className="p-6 h-screen">
          <header className="h-50 mb-4 text-base/[50px] flex justify-between">
            <div className="flex">
              <div className="mr-6">
                <Link href="/">
                  <Image
                    src="/guitar.svg"
                    className="dark:invert"
                    width={50}
                    height={24}
                    priority
                  />
                </Link>
              </div>
              <div className="flex text-center">
                {menu.map((item) => (
                  <Item href={item.path} key={item.path}>
                    {item.name}
                  </Item>
                ))}
              </div>
            </div>
            <div className="mr-[50%]">{title}</div>
          </header>
          <article className="h-full">{children}</article>
        </main>
      </body>
    </html>
  );
}

const Item = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="w-28 cursor-pointer transition ease-in-out delay-250 hover:scale-110 hover:shadow-md"
    >
      {children}
    </Link>
  );
};
