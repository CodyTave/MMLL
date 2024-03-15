import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mena Legends",
  description: "...",
  icons: { icon: "/logo.png" },
};

const legendist = localFont({
  src: [
    { path: "../fonts/Legendist-Light.ttf", weight: "200" },
    { path: "../fonts/Legendist-Regular.ttf", weight: "400" },
    { path: "../fonts/Legendist-Medium.ttf", weight: "500" },
    { path: "../fonts/Legendist-Bold.ttf", weight: "700" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={legendist.className}>
        {children}
        <div className="absolute inset-0 -z-50 w-screen">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-[80vh] opacity-20 object-cover"
            src="/MainBG.png"
            alt="bg"
          />
        </div>
      </body>
    </html>
  );
}
