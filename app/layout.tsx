import "./globals.css";
import Link from "next/link";
import Ham from "./hamburger";
import Image from "next/image";
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
        <div className="flex flex-col-reverse lg:flex-row p-10 justify-between bg-white font-light">
          <div>made with ❤️ by Hemant</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:text-center gap-y-5 my-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Call</h3>
              <p className="text-sm">9897635804</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Write</h3>
              <p className="text-sm">hemantnegi708@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2 w-[50%] lg:w-full">
              <h3 className="text-sm font-medium">Follow</h3>
              <div className="flex justify-between lg:justify-evenly lg:mx-4">
                <a href="#" target="blank">
                  <Image alt="fb" src={"/fb.png"} height={19} width={19} />
                </a>
                <a href="https://www.instagram.com/__max.42/" target="blank">
                  <Image
                    alt="insta"
                    src={"/insta.png"}
                    height={19}
                    width={19}
                  />
                </a>
                <a href="https://github.com/HemantNegi42" target="blank">
                  <Image
                    alt="github"
                    src={"/github.png"}
                    height={19}
                    width={19}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/hemant-negi-b2623127b/"
                  target="blank"
                >
                  <Image
                    alt="linkedin"
                    src={"/linkedin.png"}
                    height={19}
                    width={19}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
