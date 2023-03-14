import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "../.././node_modules/react-quill/dist/quill.snow.css";

const TextEditor = ({data}: any) => {
  const [content, setContent] = useState(data);

  const handleChange = (e: any) => {
    setContent(e);
    console.log(content);
  };

  return (
    <div>
      <ReactQuill
        className="bg-white rounded-md min-h-[200px]"
        theme="snow"
        placeholder="Write Here..."
        modules={modules}
        value={content}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: ["#ff006e", "#38bdf8"] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
    ["code-block"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default TextEditor;
