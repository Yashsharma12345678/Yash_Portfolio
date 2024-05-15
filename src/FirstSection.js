import React from "react";
import RevealComponent from "./RevealComponent";
import logo from "./logo.svg";

const FirstSection = ({scrollToRef,sectionRefs}) => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${require("./1.png")})`,
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      //   height: "100vh",
      // }}
      className=" bg-black relative w-screen h-screen scrollbar-hide  overflow-auto"
    >
      <div className=" absolute top-0 left-0">
        <img src="./Images/1.png"/>
      </div>
      <div className="flex flex-col items-center pt-[30%] sm:pt-[10%]">
        <RevealComponent>
          <div className=" w-36 h-36 rounded-full ">
            <img src={logo} />
          </div>
        </RevealComponent>
        <RevealComponent>
          <h1 className=" text-[#bfbfc6] font-marlinGeoSQBold md:text-7xl tracking-tight  text-4xl sm:text-5xl font-extrabold">
            <span className="text">H</span>
            <span className="text">e</span>
            <span className="text">l</span>
            <span className="text">l</span>
            <span className="text">o</span>
            <span className="text">!</span>
            <span className="text"> </span>
            <span className="text">I</span>
            <span className="text">{"'"}</span>
            <span className="text">m</span>
            <span className="text"> Y</span>
            <span className="text">a</span>
            <span className="text">s</span>
            <span className="text">h</span>
            <span className="text"> S</span>
            <span className="text">h</span>
            <span className="text">a</span>
            <span className="text">r</span>
            <span className="text">m</span>
            <span className="text">a</span>
            <br className="hidden sm:block" />
          </h1>
        </RevealComponent>
        <RevealComponent>
          <h1 className="text-[#bfbfc6] mt-2 font-marlinGeoSQlight  md:text-7xl tracking-tight  text-4xl sm:text-5xl">
            <span className="text">S</span>
            <span className="text">o</span>
            <span className="text">f</span>
            <span className="text">t</span>
            <span className="text">w</span>
            <span className="text">a</span>
            <span className="text">r</span>
            <span className="text">e</span>
            <span className="text"> </span>
            <span className="text">D</span>
            <span className="text">e</span>
            <span className="text">v</span>
            <span className="text">e</span>
            <span className="text">l</span>
            <span className="text">o</span>
            <span className="text">p</span>
            <span className="text">e</span>
            <span className="text">r</span>
          </h1>
        </RevealComponent>
        <RevealComponent>
          <div className="w-full mt-4">
            <p class="opacity-70 text-[#89898F] md:text-2xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
              <span>I</span>
              <span>develop</span>
              <span>Apps,</span>
              <span>user</span>
              <span>interfaces</span>
              <span>and</span>
              <span>web</span>
              <span>applications</span>
            </p>
          </div>
        </RevealComponent>
        <RevealComponent>
          <button onClick={()=>scrollToRef(sectionRefs[4])} className="w-44 border font-marlinGeoSQlight border-white/50 text-center flex items-center justify-center h-12 rounded-full text-white">
            Let's talk
          </button>
        </RevealComponent>
      </div>
    </div>
  );
};

export default FirstSection;
