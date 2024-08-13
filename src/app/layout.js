import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Guitar",
  description: "Guitar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh" className="h-screen select-none">
      <body className="h-screen">
        <main className="p-6 h-screen">
          <header className="h-50 text-base/[50px] grid grid-cols-7">
            <div className="col-span-3">
              <div className="">
                <a href="/">
                  <Image
                    src="/guitar.svg"
                    className="dark:invert"
                    width={50}
                    height={24}
                    priority
                  />
                </a>
              </div>
              <div className="flex text-center">
                <div className="w-28 cursor-pointer transition ease-in-out delay-250 hover:scale-110 hover:shadow-md">
                  谱
                </div>
                <div className="w-28 cursor-pointer transition ease-in-out delay-250 hover:scale-110 hover:shadow-md">
                  导入
                </div>
              </div>
            </div>
            <div className="col-span-1">Home</div>
          </header>
          <article>{children}</article>
        </main>
      </body>
    </html>
  );
}
