import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Jodi Swaby | UX Designer & Artist",
  description: "Jodi Swaby is an NYC-based UX designer and artist who creates immersive digital and physical experiences that challenge the ordinary and spark curiosity.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
