import React from "react";
import LeftSide from "./DetailsDesc/LeftSide";
import Middle from "./DetailsDesc/Middle";
import RightSide from "./DetailsDesc/RightSide";

const DetailsDescPage = () => {
  return (
    <div
      className="
    backdrop-blur-2xl bg-white/15 border rounded-xl border-gray-500 shadow-xl 
    w-full  max-w-[850px]
    px-5 py-4 lg:px-10 lg:py-6

    flex  gap-6          
    overflow-x-auto scroll-smooth scrollbar-hide
    snap-x snap-mandatory      
    h-[320px]  
  "
    >
      <div
        className="w-full max-w-[850px]
    px-1 lg:px-2 

    flex  gap-6          
    overflow-x-auto scroll-smooth scrollbar-hide
    snap-x snap-mandatory      
    h-[320px]"
      >
        <div className="snap-center shrink-0">
          <LeftSide />
        </div>
        <div className="snap-center shrink-0">
          <Middle />
        </div>
        <div className="snap-center shrink-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default DetailsDescPage;
