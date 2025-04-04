import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css";
import Header from "@/components/Header"
import { Container } from "react-bootstrap";
import BootstrapClient from '@/components/BootstrapClient'
import {FilterContextProvider} from "@/context/FilterContext";

const InterSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning  >
      <body suppressHydrationWarning  className={`${InterSans.variable} ${geistMono.variable}`}>
        <FilterContextProvider>
        <BootstrapClient />  {/* Bootstrap Client Component */}
        <div className="filterLayoutPage">
          <Container fluid>
            <Header />
            {children}
          </Container> 
        </div>
        </ FilterContextProvider>  
      </body>
    </html>
  );
}
