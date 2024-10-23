import React from "react";
import imgB from "../assets/img_0.png";
import searchImageIcon from "../assets/search-image-icon.svg";
import bottomSearch from "../assets/bottomSearch_selected.svg";
import myquestion from "../assets/myquestions.webp";
import VerifiedImage from "../assets/VerifiedImage.png";
import BookImage from "../assets/BookImage.png";
import QuestionImage from "../assets/QuestionImage.png";
import question_paper_container from "../assets/question_paper_container.png";
import question_paper from "../assets/question_paper.svg";
import textbook from "../assets/textbook.svg";
import textbook_container from "../assets/textbook_container.png";
import app_desktop from "../assets/app-download-desktop.png";

const HeroSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-14">
      <div className="flex  mb-6 items-center justify-center gap-3 ">
        <img src={imgB} alt="" className="h-7" />
        <h1 className="text-2xl font-semibold text-[#6c84ff] ">
          Welcome to BYJU’S AI Tutor!
        </h1>
      </div>

      <div className="flex justify-center items-center gap-5">
        <div className="flex items-center bg-white rounded-full shadow-lg p-2 w-[650px]  ">
          <div className="ml-2">
            <img src={searchImageIcon} alt="" className="h-6" />
          </div>
          <input
            type="search"
            placeholder="Find your solutions with AI Tutor "
            className="  px-4 py-2 bg-transparent focus:outline-none text-gray-700"
          />
          <div className=" rounded-full bg-[#6c84ff] h-9 w-9 flex items-center justify-end ml-80">
            <img
              src={bottomSearch}
              alt=""
              className="h-5 object-cover mt-1 mr-3  "
            />
          </div>
        </div>

        <div className="rounded-full bg-white shadow-lg p-3">
          <img src={myquestion} alt="" className="h-9" />
        </div>
      </div>

      <div className="flex flex-wrap gap-1 justify-center mt-16">
        <div className="flex items-center flex-col justify-start p-2 w-64">
          <img src={QuestionImage} alt="" />
          <h2 className="font-semibold">35 Lakh Questions</h2>
          <p className="text-gray-500 text-sm">
            View answers to all your questions without any hassle
          </p>
        </div>

        <div className="flex items-center flex-col justify-start p-2 w-64">
          <img src={VerifiedImage} alt="" />
          <h2 className="font-semibold">Verified Answers</h2>
          <p className="text-gray-500 text-sm">
            Get expert verified answers so you don’t waste time
          </p>
        </div>

        <div className="flex items-center flex-col justify-start p-2 w-64">
          <img src={BookImage} alt="" />
          <h2 className="font-semibold">500+ Textbook Solutions</h2>
          <p className="text-gray-500 text-sm">
            Browse questions from all popular textbooks of your grade
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center space-x-7 mt-12">
        <div
          className="relative mt-12 "
          style={{
            width: "230px",
            height: "200px",
          }}
        >
          <div className="absolute inset-0 z-10">
            <img
              src={question_paper_container}
              alt=""
              className="w-full h-full object-cover rounded-xl "
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center mb-20">
            <img src={textbook} alt="" className=" object-cover" />
            <h2 className="mt-8 text-[#675d7b] font-bold">Textbooks</h2>
          </div>
        </div>

        <div
          className="relative mt-12"
          style={{ width: "230px", height: "200px" }}
        >
          <div className="absolute inset-0 z-10">
            <img
              src={textbook_container}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center  mb-20">
            <img src={question_paper} alt="" className=" object-cover" />
            <h2 className="mt-8 text-[#675d7b] font-bold">Question Papers</h2>
          </div>
        </div>
      </div>

      <div className="mt-12  w-[756px] h-[337px]">
       <img src={app_desktop} alt="" />
      </div>


    </div>
  );
};

export default HeroSection;
