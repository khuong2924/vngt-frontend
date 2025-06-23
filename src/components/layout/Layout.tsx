import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className = "" }: LayoutProps): JSX.Element => {
  return (
    <div className={`bg-white min-h-screen ${className}`}>
      {/* Header section - Full width */}
      <Header />

      {/* Main content */}
      {children}

      {/* Footer section - Full width */}
      <Footer />
    </div>
  );
}; 