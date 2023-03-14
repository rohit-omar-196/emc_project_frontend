import React from "react";

interface button {
  title: String;
  id: String;
  className: String;
}

// function SaveButton  ({ title }: button) {
//   return (
//     <button className="p-2 px-4 rounded-lg bg-green-600 text-white">
//       {title}
//     </button>
//   );
// };

// function CancelButton  ({ title }: button)  {
//   return (
//     <button className="p-2 bg-gray-600 text-white rounded-lg ml-2">
//       {title}
//     </button>
//   );
// };

// export default { SaveButton, CancelButton };

export default function Button({ title, id, className }: button) {
  if (id == "SAVE_BUTTON") {
    return (
      <button
        className={`p-2 px-4 rounded-lg bg-green-600 text-white ${className}`}
      >
        {title}
      </button>
    );
  } else if (id == "CANCEL_BUTTON") {
    return (
      <button className={`p-2 bg-gray-600 text-white rounded-lg ml-2 ${className}`}>
        {title}
      </button>
    );
  } else if (id == "SUBSCRIBE_BUTTON") {
    return (
      <button className={`p-2 bg-green-600 text-white rounded-lg ${className}`}>
        {title}
      </button>
    );
  }
  return <></>;
}
