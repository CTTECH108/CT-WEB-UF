import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-ct-accent font-modern text-ct-text">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
