import React, { ReactNode } from "react";
import "../styles/globals.css";
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">{children}</main>
    </body>
  </html>
);

export default RootLayout;
