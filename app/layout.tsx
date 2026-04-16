import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "ՎԵՐՋԻՆ ԶԱՆԳԻ",
  description: "ՎԵՐՋԻՆ ԶԱՆԳԻ",
  openGraph: {
    title: "ՎԵՐՋԻՆ ԶԱՆԳԻ հրավիրատոմս",
    description: "ՎԵՐՋԻՆ ԶԱՆԳԻ հրավիրատոմս",
    url: "https://site-up-verjin-zang-1.vercel.app/",
    siteName: "ՎԵՐՋԻՆ ԶԱՆԳԻ",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 350,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="m-auto max-w-md text-[#000000CC] bg-white"
        style={{ whiteSpace: "pre-line" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
