import React, { Children } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

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
      <div className="px-28 min-h-screen">{children}</div> 
      <Footer />
    </div>
  );
};

export default Layout;
