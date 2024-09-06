import React from "react";
import Tabination from "./Tabination.jsx";
import Gallary from "./Gallery.jsx";
const Sample = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] dark-gray-gradient flex gap-[4rem]">
        <div className="w-[calc(50vw-4rem)] h-[calc(100vh-4rem)] bg-custom-dark-gray shadow-2xl mt-[2rem] mb-[2rem] ml-[2rem] rounded-[27px] border border-[#96BEE7]"></div>
        <div className=" mt-[2rem] mb-[2rem] mr-[2rem] rounded-[27px] flex flex-col gap-[1rem]">
          <Tabination />
          <hr className="border-custom-dark-gray h-1 mx-5"/>
          <Gallary />
          <hr className="border-custom-dark-gray h-1 mx-5"/>
        </div>
      </div>
    </>
  );
};
export default Sample;
