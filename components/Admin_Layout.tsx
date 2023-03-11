import React, { Children } from "react";
import Footer from "./common/Footer";
import Image from "next/image";
import AdminNavbar from "./adminComponents/AdminNavbar";


const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <AdminNavbar />
      <div className="px-28 min-h-screen bg-[url('/background_Image/backgroundImage.png')]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
