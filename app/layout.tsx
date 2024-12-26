import "./globals.css";
import Link from "next/link";
import Ham from "./hamburger";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex p-14 justify-between bg-white lg:sticky lg:top-0 lg:z-10">
          <h1 className="font-bold text-3xl">
            <Link href="/">Hemant Negi</Link>
          </h1>
          <Ham />
          <ul className="space-x-10 hidden lg:flex">
            <li>
              <Link href="/">ABOUT ME</Link>
            </li>
            <li>
              <Link href="/resume">RESUME</Link>
            </li>
            <li>
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        {children}
        <div className="flex flex-col-reverse lg:flex-row p-14 justify-between bg-white">
          <div>made with ❤️ by Hemant</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:text-center gap-y-5 my-3">
            <div className="flex flex-col gap-2">
              <h3>Call</h3>
              <p className="text-sm">9897635804</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Write</h3>
              <p className="text-sm">hemantnegi708@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2 w-[50%] lg:w-full">
              <h3>Follow</h3>
              <div className="flex justify-between lg:justify-evenly">
                <a href="#" className="text-gray-500">
                  <i className="fab fa-facebook">fb</i>
                </a>
                <a href="#" className="text-gray-500">
                  <i className="fab fa-twitter">tw</i>
                </a>
                <a href="#" className="text-gray-500">
                  <i className="fab fa-linkedin">li</i>
                </a>
                <a href="#" className="text-gray-500">
                  <i className="fab fa-instagram">in</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
