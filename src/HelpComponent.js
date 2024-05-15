import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RevealComponent from "./RevealComponent";

const HelpComponent = ({scrollToRef,sectionRefs}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const [showDiscuss, setshowDiscuss] = useState(false);

  const maincontrols = useAnimation();

  useEffect(() => {
    if (showDiscuss) {
      maincontrols.start("visible");
    } else {
      maincontrols.start("hidden");
    }
  }, [showDiscuss]);

  const HelpData = [
    {
      title: "App Development",
      Description:
        "Design direction for business. Get your business on the nextlevel. We help to create great experiences",
      Image:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp",
    },
    {
      title: "Web and App",
      Description:
        "I build brands through cultural insights & strategic vision. Custom crafted business solutions",
      Image:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg",
    },
    {
      title: "UI/UX Solutions",
      Description:
        "Design direction for business. Get your business on the next level. We help to create great experiences.",
      Image:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706290914024-725ytf",
    },
    {
      title: "Global Marketing",
      Description:
        "Custom marketing solutions. Get your business on the next level. We provide worldwide marketing",
      Image:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357668346-ke8kgt.jpeg",
    },
    {
      title: "Wordpress Development",
      Description: "Get yourself a website",
      Image:
        "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357680224-phijt.png",
    },
  ];

  const [hoveredIndexes, setHoveredIndexes] = useState(-1);

  return (
    <div>
      <h3 class="text-4xl md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto md:pl-16 overflow-hidden">
        <span class="inline-block overflow-hidden text-white/40">
          Here's how
        </span>
        <br />
        <span class="inline-block overflow-hidden">I can help you</span>
      </h3>

      {HelpData.map((item, index) => {
        return (
          <div className="group" key={index}>
            <div
              onMouseOver={() => setHoveredIndexes(index)}
              onMouseOut={() => setHoveredIndexes(-1)}
              className=" flex relative items-center justify-between h-fit border-b border-white/30 py-6 group-hover:bg-white/5 "
            >
              <RevealComponent>
                <div className="  md:px-4 px-0 md:pl-4 ml-2 sm:ml-12 z-30 ">
                  <div class="flex items-center justify-between ">
                    <h4 class="relative z-10 block text-2xl sm:text-4xl font-semibold md:font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">
                      {item.title}
                    </h4>
                  </div>
                  <p class="relative z-10 mt-2 block md:text-base text-sm transition-colors duration-500 text-neutral-500 group-hover:text-neutral-50">
                    {item.Description}
                  </p>
                </div>
              </RevealComponent>
                <img
                  src={item.Image}
                  className=" h-24 absolute right-[20%] z-0 w-32 mr-12 transition-transform transform-gpu ease-in-out duration-500 -rotate-12  group-hover:rotate-12 scale-0 group-hover:scale-125 rounded-lg object-cover md:h-48 md:w-64 max-md:hidden"
                  alt="Image representing a link for App Development"
                />
              <RevealComponent>
                <motion.div
                  ref={ref}
                  onClick={()=> scrollToRef(sectionRefs[4])}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={hoveredIndexes == index ? "visible" : "hidden"}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="w-44 border border-white/50 text-center flex items-center justify-center h-12 rounded-full text-white"
                >
                  Discuss the project
                </motion.div>
              </RevealComponent>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HelpComponent;
