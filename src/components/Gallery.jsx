import React from "react";
import Help from "../assets/images/Help.png";
import Frame from "../assets/images/Frame.png";
import random from "../assets/images/random.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Gallery = () => {
  return (
    <div className="w-[calc(50vw-4rem)] h-[calc(50vh-3rem)] flex flex-nowrap rounded-[19px] bg-custom-dark-gray shadow-2xl">
      <div className="w-[2vw] mx-[1rem] mt-[1rem] h-[calc(100%-1rem)] flex flex-col justify-between items-between">
        <div>
          <img
            src={Help}
            alt="help-logo"
            style={{ width: "24px", height: "24px" }}
          />
        </div>
        <div>
          <img
            src={Frame}
            alt="frame-logo"
            style={{ width: "24px", height: "30px" }}
          />
        </div>
        <div></div>
      </div>
      <div className="mt-[1rem] w-full mx-[1rem]">
        <div className="rounded-[23px] w-[36vw] h-[62px] flex justify-between items-center">
          <button className="text-white text-[18px] bg-custom-black-one px-[38px] py-[16px] rounded-[20px]">
            Gallery
          </button>
          <div>
            <button className="text-white text-[18px] rounded-l-full rounded-r-full mx-5 gallery-addBtn-inner gb-[#6F787C]">
              <p className="px-4 py-4 rounded-r-full uppercase rounded-l-full gallery-addBtn-drop text-[12px] font-semibold">
                + Add Image
              </p>
            </button>
            <button className="w-[45px] h-[45px]  rounded-full mx-5 hover:bg-custom-black-one gallery-addBtn-dropTwo">
              <ArrowLeftOutlined className="text-custom-light-gray text-[24px] shadow-md" />
            </button>
            <button className="w-[45px] h-[45px]  rounded-full hover:bg-custom-black-one gallery-addBtn-dropTwo">
              <ArrowRightOutlined className="text-custom-light-gray text-[24px] shadow-md" />
            </button>
          </div>
        </div>
        <div className="w-[36vw] my-2">
          <div className="flex justify-between">
            <div className="w-[180px] h-[180px]">
              <img
                src={random}
                alt="image-1"
                className="rounded-[24px] gallery-image"
              />
            </div>
            <div className="w-[180px] h-[180px]">
              <img
                src={random}
                alt="image-2"
                className="rounded-[24px] gallery-image"
              />
            </div>
            <div className="w-[180px] h-[180px]">
              <img
                src={random}
                alt="image-3"
                className="rounded-[24px] gallery-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
