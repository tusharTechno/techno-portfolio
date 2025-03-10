"use client";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
