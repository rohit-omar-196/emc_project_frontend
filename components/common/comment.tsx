import React from "react";
import Button from "./buttons";

const Comment = ({ comment }: any) => {
  return (
    <div className="mt-8 flex flex-col">
      <div id="add-comment" className="border-[1px] border-slate-600 py-2 px-2 rounded-md bg-[url('/background_Image/author-note-bg.png')]">
        <form>
          <label id="add-comment heading" className="text-lg font-semibold text-slate-200">
            Add Comment:
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="mt-2 rounded-sm bg-gray-300 border-none p-2 w-[300px] outline-none"
          />
          <textarea
            placeholder="Add Comment"
            className="w-full h-20 mt-2 rounded-sm bg-gray-300 border-none p-2 outline-none"
          />
          <div className="flex mt-2">
            <Button title="Save" id="SAVE_BUTTON" className=""/>
            <Button title="Cancel" id="CANCEL_BUTTON" className=""/>
          </div>
        </form>
      </div>
      <div
        id="old-comments"
        className="flex flex-col mt-4 w-full px-2 border-[1px] border-slate-600 rounded-md pb-2"
      >
        <div id="comment" className="flex flex-col mt-2 rounded-md border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')]">
          <div className="font-medium pl-2 text-slate-200">Rohan Gupta</div>
          <div className="pl-4 text-slate-200 pb-2">I loved your article :-{")"}.</div>
        </div>
        <div id="comment" className="flex flex-col mt-2 rounded-md border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')]">
          <div className="font-medium pl-2 text-slate-200">Rohan Gupta</div>
          <div className="pl-4 text-slate-200 pb-2">I loved your article :-{")"}.</div>
        </div>
        <div id="comment" className="flex flex-col mt-2 rounded-md border-[1px] border-slate-600 bg-[url('/background_Image/author-note-bg.png')]">
          <div className="font-medium pl-2 text-slate-200">Rohan Gupta</div>
          <div className="pl-4 text-slate-200 pb-2">I loved your article :-{")"}.</div>
        </div>
        
      </div>
    </div>
  );
};

export default Comment;
