import Admin_Layout from "@/components/Admin_Layout";
import Button from "@/components/common/buttons";
import Link from "next/link";
import React, { useState } from "react";

interface state {
  button_id: String;
}

const Admin = () => {
  const [editContact, setEditContact] = useState(false);
  const [editAuthorNote, setEditAuthorNote] = useState(false);
  const [editAboutAuthor, setAboutAuthor] = useState(true);

  const changeButtonState = (button_id: any) => {
    if (button_id === "CONTACT_ME") {
      setEditContact(true);
      setAboutAuthor(false);
      setEditAuthorNote(false);
    } else if (button_id === "AUTHOR_NOTE") {
      setEditContact(false);
      setAboutAuthor(false);
      setEditAuthorNote(true);
    } else if (button_id === "ABOUT_AUTHOR") {
      setEditContact(false);
      setAboutAuthor(true);
      setEditAuthorNote(false);
    }
  };

  return (
    <Admin_Layout>
      <div className="pt-2">
        <div className="flex">
          <div
            className={`ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400 hover:cursor-pointer ${
              editAboutAuthor ? "bg-white" : "text-white"
            }`}
            onClick={(e) => changeButtonState("ABOUT_AUTHOR")}
          >
            Edit About Me
          </div>
          <div
            className={`ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400 hover:cursor-pointer ${
              editContact ? "bg-white" : "text-white"
            }`}
            onClick={(e) => changeButtonState("CONTACT_ME")}
          >
            Edit Contact Me
          </div>
          <div
            className={`ml-2 text-base border-[1px] border-slate-600 p-2 rounded-md hover:border-slate-400 hover:cursor-pointer ${
              editAuthorNote ? "bg-white" : "text-white"
            }`}
            onClick={(e) => {
              changeButtonState("AUTHOR_NOTE");
            }}
          >
            Edit Author Note
          </div>
        </div>
        {editAboutAuthor ? (
          <form className="border-[1px] border-slate-600 rounded-md p-2 mt-4">
            <textarea
              id=""
              className="w-full rounded-lg p-4 outline-none"
              contentEditable="true"
            >
              About Author
            </textarea>
            <div className="mt-2">
              <Button id="SAVE_BUTTON" className="" title="SAVE" />
              <Button id="CANCEL_BUTTON" className="" title="CANCEL" />
            </div>
          </form>
        ) : editContact ? (
          <form className="border-[1px] border-slate-600 rounded-md p-2 mt-4">
            <textarea
              id=""
              className="w-full rounded-lg p-4 outline-none"
              contentEditable="true"
            >
              Contact Me
            </textarea>
            <div className="mt-2">
              <Button id="SAVE_BUTTON" className="" title="SAVE" />
              <Button id="CANCEL_BUTTON" className="" title="CANCEL" />
            </div>
          </form>
        ) : (
          <form className="border-[1px] border-slate-600 rounded-md p-2 mt-4">
            <textarea
              id=""
              className="w-full rounded-lg p-4 outline-none"
              contentEditable="true"
            >
              Author Note
            </textarea>
            <div className="mt-2">
              <Button id="SAVE_BUTTON" className="" title="SAVE" />
              <Button id="CANCEL_BUTTON" className="" title="CANCEL" />
            </div>
          </form>
        )}
      </div>
    </Admin_Layout>
  );
};

export default Admin;
