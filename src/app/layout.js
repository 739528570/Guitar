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
          <header className="flex justify-start h-50">
            <div className="w-2/4">
              <div className="mr-15">
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
              <div className="grid grid-cols-2">
                <div className="text-center text-base/[50px] cursor-pointer transition ease-in-out delay-250 hover:scale-110 hover:shadow-md">
                  吉他谱
                </div>
                <div className="text-center text-base/[50px] cursor-pointer transition ease-in-out delay-250 hover:scale-110 hover:shadow-md">
                  导入
                </div>
              </div>
            </div>
            <div className="text-base/[50px] w-2/4">Home</div>
          </header>
          <article>{children}</article>
        </main>
      </body>
    </html>
  );
}
