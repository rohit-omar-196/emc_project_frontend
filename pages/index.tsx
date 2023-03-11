import React from "react";
import Layout from "@/components/Layout";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen w-full pt-2 pb-8">
        <div className=" text-white text-5xl flex flex-col mt-8">
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Hey I'm  R<i>U</i>P<i>E</i>S<i>H</i> N<i>A</i>N<i>D</i>A<i>N</i> Y<i>A</i>D<i>A</i>V"
                  )
                  .pauseFor(2500)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
              }}
            />
          </div>
          <div className="mt-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(5000)
                  .typeString("I'm <b>PROGRAMMER</b>")
                  .pauseFor(3000)
                  .deleteChars(10)
                  .typeString("<b>WRITER</b>")
                  .pauseFor(3000)
                  .deleteChars(6)
                  .typeString("<b>INVESTOR</b>")
                  .pauseFor(3000)
                  .deleteChars(8)
                  .typeString("<b>MOTIVATIONAL SPEAKER</b>")
                  .pauseFor(3000)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div id="author-note" className="flex mt-8">
          <div
            id="author-image"
            className="h-[400px] w-[400px] min-w-[400px] bg-[url('/background_Image/rupesh_author.JPG')] bg-cover border-[4px] border-[#ff006e] rounded-xl"
          ></div>
          <div
            id="author-note-box"
            className="ml-4 border-[1px] border-slate-600 rounded-md bg-[url('/background_Image/author-note-bg.png')] bg-center"
          >
            <div className="h-10 border-b-[1px] border-slate-600 flex items-center justify-start pl-2">
              <div className="rounded-full border-8 border-slate-400"></div>
              <div className="rounded-full border-8 border-slate-400 ml-2"></div>
              <div className="rounded-full border-8 border-slate-400 ml-2"></div>
            </div>
            <div id="author-note-content" className="text-sky-400 p-2 min-w-80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
              voluptas itaque eligendi fugiat tempora vel! Quam iure sequi
              provident porro rem tenetur? Repellat, ullam?
            </div>
          </div>
        </div>
        <div id="recent-blogs" className="mt-8">
          <div id="recent-blog-header" className="text-white text-3xl">
            Recent Blogs
          </div>
          <div className="flex flex-col">
            <Link href={"/blogs/myblog"}>
              <div className="h-[100px] w-[800px] border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')] bg-center rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
                <div id="blog-title" className="text-2xl font-bold text-white">
                  My First Year Days of Fun with Friends and ...
                </div>
                <div
                  id="blog-publish-date-time"
                  className="text-xs text-slate-300"
                >
                  03/02/2023 22:37
                </div>
                <div id="blog-tags" className="text-slate-300 mt-1">
                  #firstyear #friends #explore
                </div>
              </div>
            </Link>
            <Link href={"/blogs/myblog"}>
              <div className="h-[100px] w-[800px] border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')] bg-center rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
                <div id="blog-title" className="text-2xl font-bold text-white">
                  My First Year Days of Fun with Friends and ...
                </div>
                <div
                  id="blog-publish-date-time"
                  className="text-xs text-slate-300"
                >
                  03/02/2023 22:37
                </div>
                <div id="blog-tags" className="text-slate-300 mt-1">
                  #firstyear #friends #explore
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div id="recent-blogs" className="mt-8">
          <div id="recent-blog-header" className="text-white text-3xl">
            Most Loved Blogs
          </div>
          <div className="flex flex-col">
            <Link href={"/blogs/myblog"}>
              <div className="h-[100px] w-[800px] border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')] bg-center rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
                <div id="blog-title" className="text-2xl font-bold text-white">
                  My First Year Days of Fun with Friends and ...
                </div>
                <div
                  id="blog-publish-date-time"
                  className="text-xs text-slate-300"
                >
                  03/02/2023 22:37
                </div>
                <div id="blog-tags" className="text-slate-300 mt-1">
                  #firstyear #friends #explore
                </div>
              </div>
            </Link>
            <Link href={"/blogs/myblog"}>
              <div className="h-[100px] w-[800px] border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')] bg-center rounded-2xl flex flex-col justify-center pl-8 mt-4 shadow-md hover:shadow-lg hover:cursor-pointer">
                <div id="blog-title" className="text-2xl font-bold text-white">
                  My First Year Days of Fun with Friends and ...
                </div>
                <div
                  id="blog-publish-date-time"
                  className="text-xs text-slate-300"
                >
                  03/02/2023 22:37
                </div>
                <div id="blog-tags" className="text-slate-300 mt-1">
                  #firstyear #friends #explore
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
