import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CategoryIcon from '@mui/icons-material/Category';
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="h-20 w-full text-xl bg-[#0F172A] px-28 border-b-[5px] border-[#ff006e]">
      <div className="h-full w-auto flex items-center justify-between">
        <div id="website-title" className="text-white text-xl p-2 rounded-xl">
          <i>
            <Link href={"/"}>rupeshnandan.in</Link>
          </i>
        </div>
        <div className="flex">
          {router.pathname.endsWith("/admin/write") ? (
            <div></div>
          ) : (
            <div className="flex items-center">
              <div className="flex">
                <div className="text-white ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400">
                  <DriveFileRenameOutlineIcon className="mr-2" />
                  <Link href={"/admin/write"}>Write Blog</Link>
                </div>
              </div>
            </div>
          )}
          {router.pathname.endsWith("/admin/category") ? (
            <div></div>
          ) : (
            <div className="flex items-center">
              <div className="flex">
                <div className="text-white ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400">
                  <CategoryIcon className="mr-2" />
                  <Link href={"/admin/category"}>Manage Category</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
