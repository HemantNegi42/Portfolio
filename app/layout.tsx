import "./globals.css";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex p-14 justify-between">
          <h1 className="font-bold text-3xl">
            <Link href="/">Hemant Negi</Link>
          </h1>
          <ul className="flex space-x-10">
            <li>
              <Link href="/about">ABOUT ME</Link>
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
      </body>
    </html>
  );
}
