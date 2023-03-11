import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="h-20 w-full text-xl bg-[#0F172A] px-28 border-b-[5px] border-[#ff006e]">
      <div className="h-full w-auto flex items-center justify-between">
        <div id="website-title" className="text-white text-xl p-2 rounded-xl">
          <i>
            <Link href={"/"}>rupeshnandan.in</Link>
          </i>
        </div>
        <div className="flex items-center">
          <div className="flex">
            <div className="text-white ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400">
              <Link href={"/"}>Home</Link>
            </div>
            <div className="text-white ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400">
              <Link href={"/blogs"}>Blogs</Link>
            </div>
            <div className="text-white ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400">
              <Link href={"/contact"}>Contact Me</Link>
            </div>
          </div>
          <Link href={"/about"}>
            <div className="flex w-[145px] h-[30px] rounded-full relative bg-cyan-600 hover:cursor-pointer ml-8">
              <div className="text-white text-base absolute left-3.5 top-0.5">
                About Author
              </div>
              <div className="h-[30px] w-[30px] absolute right-0 rounded-full bg-[#ff006e] flex justify-center items-center text-sm text-white">
                <b>N</b>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
