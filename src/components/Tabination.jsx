import React, { useState } from "react";
import Help from "../assets/images/Help.png";
import Frame from "../assets/images/Frame.png";

const Tabination = () => {
  const [activeTab, setActiveTab] = useState("aboutMe");

  return (
    <div className="w-[calc(50vw-4rem)] h-[calc(50vh-3rem)] flex flex-nowrap rounded-[19px] bg-custom-dark-gray shadow-2xl">
      <div className="w-[2vw] mx-[1rem] my-[1rem] h-[calc(100%-1rem)] flex flex-col justify-between items-between">
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
      <div className="my-[1rem] w-full mx-[1rem] about-container">
        <div className="rounded-[23px] background-custom-black-one shadow-xl w-[36vw] h-[62px] flex justify-around items-center">
          <button
            className={`text-white text-[18px] ${
              activeTab === "aboutMe" && "background-custom-gray-four shadow-2xl"
            } py-3 px-10 rounded-[16px] about--button-animation w-[165px] ml-1`}
            onClick={() => setActiveTab("aboutMe")}
          >
            About Me
          </button>
          <button
            className={`text-white text-[18px] ${
              activeTab === "experiences" && "background-custom-gray-four shadow-2xl"
            } py-3 px-10 rounded-[16px] about--button-animation`}
            onClick={() => setActiveTab("experiences")}
          >
            Experiences
          </button>
          <button
            className={`text-white text-[18px] ${
              activeTab === "recommended" && "background-custom-gray-four shadow-2xl"
            } py-3 px-10 rounded-[16px] about--button-animation mr-1`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </button>
        </div>

        <div className="w-[36vw] h-[160px] overflow-y-scroll my-5 about--custom-scroll">
          {activeTab === "aboutMe" && (
            <>
              <p className="text-custom-gray-five text-[20px]">
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now.{" "}
              </p>
              <br />
              <p className="text-custom-gray-five text-[20px]">
                I was born and raised in Albany, NY & have been living in Santa
                Carla for the past 10 years with my wife Tiffany and my 4-year-old
                twin daughters - Emma and Ella. Both of them are just starting
                school, so my calendar is usually blocked between 9-10 AM. This is a...
              </p>
            </>
          )}
          {activeTab === "experiences" && (
            <p className="text-custom-gray-five text-[20px]">
              Random Experince.
            </p>
          )}
          {activeTab === "recommended" && (
            <p className="text-custom-gray-five text-[20px]">
              Recommended section
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabination;
