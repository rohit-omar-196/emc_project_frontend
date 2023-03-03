import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="h-20 w-full text-xl bg-black px-28 border-b-[5px] border-pink-700">
      <div className="h-full w-auto flex items-center justify-between">
        <div
          id="website-title"
          className="text-white text-2xl p-2 rounded-xl"
        >
          <i><Link href={"/"}>rupeshnandan.in</Link></i>
        </div>
        <div className="text-white"><Link href={"/blogs"}>My Blogs</Link></div>
        <div className="flex w-[175px] h-[50px] rounded-full relative bg-cyan-600">
          <div className="text-white text-base absolute left-3.5 top-3 ">
            About Author
          </div>
          <div className="h-[50px] w-[50px] absolute right-0 rounded-full bg-pink-700 flex justify-center items-center text-white"><b>N</b></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
