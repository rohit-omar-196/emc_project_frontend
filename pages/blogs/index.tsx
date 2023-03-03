import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <div className="flex flex-col pt-8 pb-2">
        <Link href={"/blogs/myblog"}>
          <div className="h-[150px] w-full border-[3px] rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
            <div id="blog-title" className="text-3xl font-bold">
              My First Year Days of Fun with Friends and ...
            </div>
            <div id="blog-publish-date-time" className="text-sm text-slate-500">
              03/02/2023 22:37
            </div>
            <div id="blog-tags">#firstyear #friends #explore</div>
          </div>
        </Link>
        <Link href={"/blogs/myblog"}>
          <div className="h-[150px] w-full border-[3px] rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
            <div id="blog-title" className="text-3xl font-bold">
              My First Year Days of Fun with Friends and ...
            </div>
            <div id="blog-publish-date" className="text-sm text-slate-500">
              03/02/2023 22:37
            </div>
            <div id="blog-tags">#firstyear #friends #explore</div>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Blog;
