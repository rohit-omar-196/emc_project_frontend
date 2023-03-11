import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <div className="flex flex-col pt-8 pb-2">
        <Link href={"/blogs/myblog"}>
          <div className="h-[100px] w-[800px] border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')] bg-center rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
            <div id="blog-title" className="text-2xl font-bold text-white">
              My First Year Days of Fun with Friends and ...
            </div>
            <div id="blog-publish-date-time" className="text-xs text-slate-300">
              03/02/2023 22:37
            </div>
            <div id="blog-tags" className="text-slate-300 mt-1">#firstyear #friends #explore</div>
          </div>
        </Link>
        <Link href={"/blogs/myblog"}>
          <div className="h-[100px] w-[800px] border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')] bg-center rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
            <div id="blog-title" className="text-2xl font-bold text-white">
              My First Year Days of Fun with Friends and ...
            </div>
            <div id="blog-publish-date-time" className="text-xs text-slate-300">
              03/02/2023 22:37
            </div>
            <div id="blog-tags" className="text-slate-300 mt-1">#firstyear #friends #explore</div>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Blog;
