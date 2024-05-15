import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import RevealComponent from "./RevealComponent";

const SkillsComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const skillsData = [
    {
      title: "Software Developer",
      heading: "Builds Various Softwares",
      Date: "June 2022 - 2024",
      Works: ["Design", "SEO Implemented", "Optimized Site"],
    },
    {
      title: "FullStack Developer",
      heading: "Works on Various FullStack Projects.",
      Date: "June 2022 - May 2024",
      Works: [
        "Developed RESTful APIs and integrated third-party services to ingest and process large volumes of data",
        "Designed and implemented responsive user interfaces using React.js and Bootstrap",
        "Optimized database queries and improved overall system performance",
        "Conducted unit tests and participated in peer code reviews to ensure code quality",
      ],
    },
    {
      title: "App Developer",
      heading: "Build Various Application",
      Date: "May 2023 - Jan 2024",
      Works: [
        "Utilized Flutter to develop cross-platform mobile applications, ensuring seamless performance across both Android and iOS devices",
        "Integrated various third-party APIs and services to enhance app functionality, such as geolocation services, payment gateways, and social media integrations",
        "Designed and implemented sleek and intuitive user interfaces using Flutter's widget library, resulting in a highly engaging user experience",
        "Employed Kotlin for Android app development, leveraging its concise syntax and powerful features to streamline code development and maintenance",
        "Conducted rigorous testing procedures, including unit tests and UI testing, to identify and address bugs early in the development cycle, ensuring high-quality and robust applications",
      ],
    },
    {
      title: "Backend Developer",
      heading: "",
      Date: "June 2023 - May 2024 ",
      Works: [
        "Developed scalable backend services using Python and Django framework",
        "Implemented user authentication and authorization using OAuth 2.0 and JWT tokens",
        "Designed and optimized database schemas for performance and scalability",
        "Architected and developed scalable RESTful APIs using Node.js and Express.js, providing robust backend solutions for tracking and analyzing user interactions, such as URL redirections in Linktester and app downloads in AdsSdk",
      ],
    },
  ];

  const lightColors = ["#f5f5f5", "#e1f5fe", "#e8f5e9", "#fff9c4", "#fce4ec"];

  return (
    <div className="text-white pt-16 w-full grid grid-cols-5 font-marlinGeoSQlight">
      {skillsData.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
          <div
            key={index}
            className={`w-full transition-all my-1  border-b border-[#64bbcd] border-opacity-35 transform-cpu ease-in duration-1000 col-span-5 sm:col-span-3`}
          >
            
            <div className="flex justify-between">
              <RevealComponent>
                <div className="flex space-x-4 items-center">
                  <h1 className="text-[20px]">0{index + 1}</h1>
                  <h1 className="text-xl sm:text-3xl font-marlinGeoSQBold">
                    {item.title}
                  </h1>
                </div>
              </RevealComponent>
              <RevealComponent>
                <div onClick={() => toggleExpand(index)}>
                  {isExpanded ? (
                    <FaMinus className="text-[#64bbcd] text-xl sm:text-3xl" />
                  ) : (
                    <FaPlus className="text-[#64bbcd] text-xl sm:text-3xl" />
                  )}
                </div>
              </RevealComponent>
            </div>
            <motion.div
              animate={{ height: isExpanded ? "auto" : "16px" }}
              initial={{ height: "16px" }}
              variants={{
                expanded: { height: "auto", transition: { duration: 0.5 } },
                // collapsed: { height: "16px", transition: { duration: 0.5 } },
              }}
              className="w-full  col-span-5 sm:col-span-3"
            >
              {isExpanded && (
                <div className="flex col-span-5 transition-all transform-cpu duration-1000 ease-linear items-center justify-between h-fit mt-8">
                  <RevealComponent>
                    <p>{item.heading}</p>
                    <p>{item.Date}</p>
                  </RevealComponent>
                </div>
              )}
              {isExpanded && (
                <div className=" flex col-span-5 items-center mb-4 justify-between h-fit mt-8">
                  <RevealComponent>
                    <ol className="list-none">
                      {item.Works.map((work, i) => (
                        <li key={i} className="flex items-center">
                          <span
                            className="rounded-full h-2 w-2 mr-2"
                            style={{
                              backgroundColor:
                                lightColors[
                                  Math.floor(Math.random() * lightColors.length)
                                ],
                            }}
                          ></span>
                          <h1 className=" font-marlinGeoSQlight">{work}</h1>
                        </li>
                      ))}
                    </ol>
                  </RevealComponent>
                </div>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsComponent;
