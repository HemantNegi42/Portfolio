import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex p-14 justify-between">
          <h1 className="font-bold text-3xl">Hemant Negi</h1>
          <div className="flex space-x-10">
            <a>ABOUT ME</a>
            <a>PROJECTS </a>
            <a>RESUME </a>
            <a>CONTACT </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
