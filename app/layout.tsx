import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-700 antialiased">
        <div className="px-4 pt-8 sm:pt-24 pb-48">
          <div className="max-w-screen-sm mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
