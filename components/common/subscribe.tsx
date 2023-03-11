import React, { useState } from "react";
import Button from "./buttons";

const Subscribe = () => {
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const subscriberEmail = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      send_email: true,
    };
    const response = await fetch(
      "http://localhost:4000/api/v1/subscriber/newSubscriber",
      {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if(response.status===201){
      setSubscribeMessage(result.message);
    }else{
      setSubscribeMessage(result.message);
    }
  };
  return (
    <div className="flex flex-col p-2 border-[1px] border-slate-600 rounded-md mt-4 bg-[url('/background_Image/author-note-bg.png')] bg-center py-4">
      <div className="mb-2 text-green-500 font-bold">{subscribeMessage}</div>
      <form onSubmit={(e) => subscriberEmail(e)} className="flex flex-col">
        <input
          type="email"
          name="email"
          className="outline-none bg-gray-300 p-3 rounded-sm"
          placeholder="Enter Your Email"
        />
        <Button id="SUBSCRIBE_BUTTON" title="Subscribe" className="mt-4" />
      </form>
    </div>
  );
};

export default Subscribe;
