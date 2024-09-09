import { useEffect, useRef, useState } from "react";
import "./App.css";

import { motion } from "framer-motion";
import RevealComponent from "./RevealComponent";
import SkillsComponent from "./SkillsComponent";
import SkillsList from "./SkillsList";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import FourthSection from "./FourthSection";
import HelpComponent from "./HelpComponent";
import SixthSection from "./SixthSection";
import ContactPage from "./ContactPage";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Toaster } from "react-hot-toast";

function App() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [projectHover, setProjectHover] = useState(false);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sectionRefs = [
    firstSectionRef,
    secondSectionRef,
    skillsSectionRef,
    projectsSectionRef,
    contactSectionRef,
  ];

  const menuIcons = ["Home", "About", "Services", "Project", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (index) => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!e) return;
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setisModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const [hoveredIndexes, setHoveredIndexes] = useState(-1);

  return (
    <div className=" h-screen overflow-y-scroll scrollbar-hide">
      <Toaster />
      <div
        className={`absolute ${
          projectHover
            ? "bg-white w-20 h-20 flex items-center justify-center transition-all transform-gpu duration-300 "
            : "w-4 h-4"
        }  hidden h sm:block rounded-full border border-white bg-center bg-no-repeat pointer-events-none z-50 transition-transform duration-1000`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y + scrollPosition,
          opacity: cursorPosition.x !== 0 && cursorPosition.y !== 0 ? 1 : 0,
        }}
      >
        {projectHover && (
          <div className=" flex items-center justify-center text-center mt-[28%]">
            <MdOutlineArrowOutward className=" text-[30px]" />
          </div>
        )}
      </div>
      <div className="fixed top-8 left-8 z-20">
        <h1 className="text-[#7C7476] font-bold text-[16px]">ThePortfolio</h1>
      </div>
      <motion.div
        className={`z-20 fixed top-8 sm:top-12 right-12 flex items-center transition-all transform-cpu ease-in duration-500 justify-center bg-[#64bbcd] ${
          isClicked
            ? "w-[70vw] sm:w-[30%] h-[100%] -right-0 -top-0 sm:right-12 sm:h-[90%] rounded-3xl"
            : "h-10 w-[100px] rounded-lg"
        }`}
        onClick={handleClick}
        whileHover={{ backgroundColor: isClicked ? "#64bbcd" : "#75dab4" }}
        whileTap={{ scale: 0.95 }}
      >
        {isClicked && (
          <div className="h-10 w-[100px] bg-black text-[#bfbfba] rounded-lg flex items-center justify-center absolute top-4 right-8">
            <h1 className="text-[17px]">Close</h1>
          </div>
        )}
        {isClicked ? (
          <div className=" h-full w-full flex flex-col justify-between">
            <div className=" h-[55%] list-none pl-[10%] pt-[25%] flex flex-col">
              {menuIcons.map((item, index) => {
                return (
                  <RevealComponent>
                    <li
                      onMouseOver={() => setHoveredIndexes(index)}
                      onMouseOut={() => setHoveredIndexes(-1)}
                      onClick={() => scrollToRef(sectionRefs[index])}
                      className="text-5xl w-fit h-fit font-marlinGeoSQlight my-1 flex items-center space-x-3"
                      style={{
                        transition: "transform 0.4s ease-in-out",
                        transform:
                          hoveredIndexes === index
                            ? "translateX(10px)"
                            : "translateX(0)",
                      }}
                    >
                      {hoveredIndexes === index && (
                        <span className=" text-2xl">
                          <IoArrowForward className=" text-black" />
                        </span>
                      )}
                      <span className=" text-3xl sm:text-5xl  font-marlinGeoSQlight ">
                        {item}
                      </span>
                    </li>
                  </RevealComponent>
                );
              })}
            </div>
            <div className=" flex space-x-28 text-xl pb-[13%] px-[8%]">
              <RevealComponent>
                <div>
                  <a
                  // href="https://www.linkedin.com/in/yashsharma2723/"
                  // target="_blank"
                  >
                    <p>Twitter</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yashsharma2723/"
                    target="_blank"
                  >
                    <p>Linkedin</p>
                  </a>
                </div>
              </RevealComponent>
              <RevealComponent>
                <div>
                  <a
                    href="https://github.com/Yashsharma12345678"
                    target="_blank"
                  >
                    <p>Github</p>
                  </a>

                  <a href="/Yash_res.pdf" target="_blank">
                    <p>Resume</p>
                  </a>
                </div>
              </RevealComponent>
            </div>
          </div>
        ) : (
          <h1 className="text-black text-[17px]">Menu</h1>
        )}
      </motion.div>

      <div>
        <div
          className=""
          // style={{ backgroundImage: `url(${require("./1.png")})` }}
          ref={firstSectionRef}
        >
          <FirstSection sectionRefs={sectionRefs} scrollToRef={scrollToRef} />
        </div>

        <div className=" relative" ref={secondSectionRef}>
          <div className=" absolute top-0 right-0">
            <img src="./Images/2.png" />
          </div>

          <SecondSection />
        </div>

        {/* 3rd section */}
        {/* <div className="bg-[#000000] relative  px-[2rem]">
        
          <SkillsComponent />
        </div> */}

        {/* 4th section */}
        <FourthSection />

        {/* 5th section */}
        <div
          ref={skillsSectionRef}
          className=" relative h-fit bg-[#000000] text-white pt-32"
        >
          <div className=" absolute top-0 left-0">
            <img className=" opacity-60" src="./Images/1.png" />
          </div>
          <div className=" absolute top-[30%] right-0">
            <img className=" opacity-70" src="./Images/2.png" />
          </div>
          <div className=" absolute top-[60%] right-0">
            <img className=" opacity-30" src="./Images/2.png" />
          </div>
          <HelpComponent sectionRefs={sectionRefs} scrollToRef={scrollToRef} />
        </div>
        {/* 6th section */}
        <div ref={projectsSectionRef}>
          <SixthSection
            setProjectHover={setProjectHover}
            projectHover={projectHover}
          />
        </div>

        {/* 7th section */}

        <div
          ref={contactSectionRef}
          className="h-fit relative bg-[#000000] text-white pt-32 px-2 sm:px-14 pb-[10%]"
        >
          <h3 class="text-4xl md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto">
            <span class=" overflow-hidden text-white/40">
              Interested in talking,
            </span>{" "}
            <br />{" "}
            <span class="inline-block overflow-hidden">let’s do it.</span>
          </h3>
          <div className=" absolute top-0 right-0">
            <img className=" opacity-70" src="./Images/2.png" />
          </div>

          <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default App;
