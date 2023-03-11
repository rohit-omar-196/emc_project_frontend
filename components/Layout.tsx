import React, { Children } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import Image from "next/image";

// export default function Layout({ children }:any) {
//     return (
//       <>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </>
//     )
//   }

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Navbar />
      <div className="px-28 min-h-screen bg-[url('/background_Image/backgroundImage.png')] bg-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
