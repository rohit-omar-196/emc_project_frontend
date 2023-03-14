import React from "react";

interface Dialog {
    isVisible: Boolean,
    children: any,
    onClose: Function
}

export default function Dialog({ isVisible, children, onClose }:Dialog) {
    const handleDialog = (e:any)=>{
        if(e.target.id==="wrapper"){
            onClose();
        }
    }
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md flex items-center justify-center" id="wrapper" onClick={e=>handleDialog(e)}>
      <div>{children}</div>
    </div>
  );
}
