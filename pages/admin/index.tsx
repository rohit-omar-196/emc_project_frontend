import Admin_Layout from "@/components/Admin_Layout";
import Button from "@/components/common/buttons";
import dynamic from "next/dynamic";
import { useState } from "react";
const TextEditor = dynamic(() => import("../../components/common/TextEditor"), {
  ssr: false,
});

interface state {
  button_id: String;
}

const value = `Hey Guys,
<br />
<br />
I am glad that you came upto here to know my means of contact. And
I am really very excited to connect to you as you are. So one can
connect with me at any social media platform. Weather it is
Instagram, Facebook, Linkedin, Twitter, YouTube, Quora everywhere.
Or You can post your queries at my email rnyadav@gmail.com. I am
attaching all my handles and links bellow.
<br />
<br />
I am waiting for you message.
<br />
<br />
<i className="text-[#ff006e]">Instagram-</i> @
<a
  href="https://instagram.com/nandanjirupesh?igshid=NmE0MzVhZDY"
  target="_blank"
>
  nandanjirupesh
</a>
<br />
<i className="text-[#ff006e]">Facebook-</i> @
<a
  href="https://instagram.com/nandanjirupesh?igshid=NmE0MzVhZDY"
  target="_blank"
>
  nandanjirupesh
</a>
<br />
<i className="text-[#ff006e]">Twitter-</i> @
<a
  href="https://instagram.com/nandanjirupesh?igshid=NmE0MzVhZDY"
  target="_blank"
>
  nandanjirupesh
</a>
<br />
<i className="text-[#ff006e]">Linkedin-</i> @
<a
  href="https://instagram.com/nandanjirupesh?igshid=NmE0MzVhZDY"
  target="_blank"
>
  nandanjirupesh
</a>
<br />
<i className="text-[#ff006e]">YouTube-</i> @
<a
  href="https://instagram.com/nandanjirupesh?igshid=NmE0MzVhZDY"
  target="_blank"
>
  nandanjirupesh
</a>
<br />
<i className="text-[#ff006e]">Quora-</i> @
<a
  href="https://instagram.com/nandanjirupesh?igshid=NmE0MzVhZDY"
  target="_blank"
>
  nandanjirupesh
</a>
<br />`;

const value2 = `Hey Guys,
<br />
<br />
I am glad that you came upto here to know my means of contact. And
I am really very excited to connect to you as you are. So one can
connect with me at any social media platform. Weather it is
Instagram, Facebook, Linkedin, Twitter, YouTube, Quora everywhere.
Or You can post your queries at my email rnyadav@gmail.com. I am
attaching all my handles and links bellow.
<br />
<br />
I am waiting for you message.
<br />
<br />`;

const Admin = () => {
  const [editContact, setEditContact] = useState(false);
  const [editAuthorNote, setEditAuthorNote] = useState(false);
  const [editAboutAuthor, setAboutAuthor] = useState(true);

  const [content, setContent] = useState("");

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
            <TextEditor data={value} />
            <div className="mt-2">
              <Button id="SAVE_BUTTON" className="" title="SAVE" />
              <Button id="CANCEL_BUTTON" className="" title="CANCEL" />
            </div>
          </form>
        ) : editContact ? (
          <form className="border-[1px] border-slate-600 rounded-md p-2 mt-4">
            <TextEditor data={value2} />
            <div className="mt-2">
              <Button id="SAVE_BUTTON" className="" title="SAVE" />
              <Button id="CANCEL_BUTTON" className="" title="CANCEL" />
            </div>
          </form>
        ) : (
          <form className="border-[1px] border-slate-600 rounded-md p-2 mt-4">
            <TextEditor data={value} />
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
