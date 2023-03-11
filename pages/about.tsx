import Layout from "@/components/Layout";
import React from "react";

const About = () => {
  return (
    <Layout>
      <div className="w-full min-h-[600px] flex justify-center items-center pt-2 pb-2 text-lg">
        <div
          className="flex flex-col border-[1px] border-slate-600 rounded-2xl bg-[url('/background_Image/author-note-bg.png')] bg-center"
          id="author-contact-box"
        >
          <div className="h-10 border-b-[1px] border-slate-600 flex items-center justify-start pl-2">
            <div className="rounded-full border-8 border-slate-400"></div>
            <div className="rounded-full border-8 border-slate-400 ml-2"></div>
            <div className="rounded-full border-8 border-slate-400 ml-2"></div>
          </div>
          <div
            id="author-contact-content"
            className="text-sky-400 p-2 min-w-[1000px] pb-4"
          >
            Hey Guys,
            <br />
            <br />
            I am Rupesh Nandan Yadav, People Commonly call me nandan. I am very glad that you came upto here to know about me. And
            I am really very excited to connect to you as you are. So one can
            connect with me at any social media platform. Weather it is
            Instagram, Facebook, Linkedin, Twitter, YouTube, Quora everywhere.
            Or You can post your queries at my email rnyadav@gmail.com. I am
            attaching all my handles and links bellow.`
            <br />
            <br />
            Thank You
            <br />
            <br />
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
