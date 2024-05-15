import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import RevealComponent from "./RevealComponent";
import { motion } from "framer-motion";
// import Image from "./Images/yashtv.png"
import { LuDownload } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { GiTireIronCross } from "react-icons/gi";

const SixthSection = ({ setProjectHover, projectHover }) => {
  const ProjectData = [
    {
      title: "Yash-TV",
      Image: "yashtv.png",
      Heading:
        "Embark on an immersive journey through cinematic realms with Yash-TV",
      Subheading:
        "Explore a vast universe of movies and TV shows, powered by the TMDB API, where every click unveils new adventures. Dive into a seamless blend of React's dynamic interface and Tailwind CSS's sleek design, crafting an unparalleled viewing experience. Welcome to Yash-TV, where entertainment knows no bounds.",
      status: "Web",
      tags: ["React JS", "Next JS", "TMDB Api", "Tailwind CSS"],
      github: true,
      githubLink: "https://github.com/Yashsharma12345678/tv",
      link: "https://tv-phi.vercel.app/",
    },
    {
      title: "Gamehub",
      Image: "gamehub.png",
      Heading:
        "Immerse Yourself in a World of Endless Fun and Excitement with Gamehub",
      Subheading:
        "Dive into a captivating collection of six JavaScript-based games, all in one place. Experience the thrill of classic and modern gaming adventures right in your browser. Gamehub brings together the best of React technology to deliver a seamless and enjoyable gaming experience for every player.",
      status: "Web",
      tags: ["React JS", "Firebase", "Tailwind CSS", "UI UX"],
      github: true,
      githubLink: "https://github.com/Yashsharma12345678/gamehub",
      link: "https://gamebits.vercel.app/",
    },
    {
      title: "Portfolio",
      Image: "oldPortfolio.png",
      Heading:
        "Crafting Connections: Your Personal Journey through My Portfolio",
      Subheading:
        "Step into a digital realm where my experiences, projects, and passions converge. Built with Next.js, Firebase, and powered by Recoil for state management, this portfolio is more than just a collection of work; it's a narrative of growth and creativity. Explore, connect, and embark on a journey through my world of web development.",
      status: "Web",
      tags: ["React JS", "Next JS", "Firebase", "Recoil", "Three JS"],
      github: true,
      githubLink: "https://github.com/Yashsharma12345678/MyPortfolio",
      link: "https://yashsharma.vercel.app/",
    },
    {
      title: "Linktester",
      Image: "linktester.png",
      Heading:
        "Streamlining Your Link Testing Workflow: Introducing Linktester",
      Subheading:
        "Simplify the process of testing links and ensuring their reliability with Linktester, a powerful web tool designed for businesses. Tailored to meet the needs of companies, Linktester functions seamlessly, akin to Affilitest, to verify links efficiently. Enhance your productivity and confidence in your links with Linktester, setting a new standard in link testing.",
      status: "Web",
      tags: [
        "React JS",
        "Tailwind CSS",
        "Axios",
        "Django",
        "My-SQL",
        "Selenium",
      ],
      github: false,
      link: "https://linktester.appanalytics.in/",
    },
    {
      title: "yashCart",
      Image: "yashCartAmazon.png",
      Heading: "YashCart: Your Gateway to Seamless Online Shopping Experience",
      Subheading:
        "Experience the convenience and reliability of online shopping with YashCart, an Amazon clone meticulously crafted to deliver the ultimate shopping experience. Explore a vast selection of products, intuitive navigation, and secure transactions, all within a familiar interface reminiscent of the industry leader. Shop smarter, shop with YashCart.",
      status: "Web",
      tags: ["React JS", "Next Js", "Firebase", "SAAS", "Redux"],
      github: false,
      link: "",
    },
    {
      title: "AppAnalytics",
      Image: "AppanalyticsDashboard.png",
      Heading: "Unlock the Power of Data Insights with AppAnalytics",
      Subheading:
        "Empower your app's success with AppAnalytics, a sophisticated web frontend designed to provide comprehensive insights into your application's performance. Dive deep into user behavior, engagement metrics, and app performance indicators through intuitive dashboards and analytics tools. With AppAnalytics, transform raw data into actionable insights and drive informed decisions for your app's growth and optimization.",
      status: "Web",
      tags: ["React JS", "Chart Js", "Tailwind CSS"],
      github: false,
      link: "https://offers-adshustle.appanalytics.in/",
    },
    {
      title: "Image Generator",
      Image: "ImageFinder.png",
      Heading: "Unleash Your Creativity with Image Generator",
      Subheading:
        "Harness the power of the Unsplash API with Image Generator, a dynamic web tool that puts a vast library of high-quality images at your fingertips. Whether you're seeking inspiration, designing, or simply exploring, Image Generator offers seamless access to an endless array of stunning visuals. Elevate your projects and fuel your imagination with Image Generator's intuitive image finder.",
      status: "Web",
      tags: ["React JS", "CSS", "Unsplash API"],
      github: true,
      githubLink: "https://github.com/Yashsharma12345678/photogallery",
      link: "https://photogalleryreact.vercel.app/",
    },
    {
      title: "Pokemon Pokedex",
      Image: "pokedex.png",
      Heading: "Embark on a Journey to Catch 'Em All with the Pokemon Pokedex",
      Subheading:
        "Enter the captivating world of Pokemon with the Pokemon Pokedex, a comprehensive web tool designed for trainers and enthusiasts alike. Explore detailed information on all Pokemon species, from classic favorites to newly discovered creatures. With its user-friendly interface and extensive database, the Pokemon Pokedex is your ultimate companion in becoming a Pokemon Master.",
      status: "Web",
      tags: ["React JS", "CSS", "Pokemon API"],
      github: false,
      link: "",
    },
    {
      title: "Fighting Game",
      Image: "Fighting.png",
      Heading: "Unleash Your Inner Warrior in the Samurai Fighting Game",
      Subheading:
        "Step onto the battlefield and embrace the way of the samurai in this thrilling multiplayer web game. Engage in fierce combat, hone your skills, and challenge opponents from around the world in epic duels. With its immersive gameplay and fluid controls, the Samurai Fighting Game promises an adrenaline-fueled experience like no other.",
      status: "Web",
      tags: ["HTML", "CSS", "JS", "Sprites"],
      github: false,
      githubLink: "",
      link: "https://sastashadowfight.netlify.app/",
    },
    {
      title: "Watchwise",
      Image: "watchwiseBann.png",
      Heading: "Elevate Your Entertainment Experience with Watchwise",
      Subheading:
        "Discover a world of endless entertainment possibilities with Watchwise, a cutting-edge mobile application crafted with Flutter, Firebase, and the TMDB API. Seamlessly blend your favorite movies and TV shows into your watchlist, personalized recommendations, and more. With Watchwise, your entertainment journey is just a tap away.",
      status: "Web",
      tags: ["Flutter", "Firebase", "TMDB", "Shared Pref"],
      github: false,
      link: "https://play.google.com/store/apps/details?id=com.findmovies.watchwise&hl=en_IN&gl=US",
    },
    {
      title: "Charades",
      Image: "CharadesBanner.png",
      Heading:
        "Let the Fun Begin: Introducing Charade - The Ultimate Dumbshle Arts Game",
      Subheading:
        "Gather your friends and family for hours of laughter and entertainment with Charade, the must-have app for game nights and gatherings. Put your acting skills to the test as you mime, gesture, and communicate without words in this hilarious and engaging game. With its intuitive design and endless replay value, Charade is guaranteed to be a hit at any party.",
      status: "Web",
      tags: ["Flutter", "Firebase", "Get-X"],
      github: false,
      link: "https://play.google.com/store/apps/details?id=com.partygames.charades&hl=en_IN&gl=US",
    },
    {
      title: "Nail Saloon",
      Image: "nailSaloonBanner.png",
      Heading:
        "Express Your Style: Welcome to Nail Saloon - The Ultimate Nail Designing Game",
      Subheading:
        "Unleash your creativity and design stunning nail art with Nail Saloon, the perfect app for nail enthusiasts and fashionistas. Explore a vast collection of nail designs, colors, and accessories to create your unique masterpiece. Whether you're experimenting with new trends or showcasing your signature style, Nail Saloon offers endless possibilities for glamorous nail transformations.",
      status: "Web",
      tags: ["Flutter", "Firebase", "Provider"],
      github: false,
      link: "https://play.google.com/store/apps/details?id=com.manicuregame.nailsalon",
    },
    {
      title: "Yash-Cart",
      Image: "yashCartBanner.png",
      Heading:
        "Shop Smarter, Shop Easier with Yash-Cart - Your Ultimate Shopping Companion",
      Subheading:
        "Experience the convenience of online shopping like never before with Yash-Cart, a cutting-edge mobile app powered by Flutter and Firebase. Browse through a wide range of products, enjoy personalized recommendations, and streamline your shopping experience with secure transactions and hassle-free delivery. With Yash-Cart, shopping becomes effortless and enjoyable.",
      status: "Web",
      tags: ["Flutter", "Firebase", "Velocity X"],
      github: false,
      link: "",
    },
    {
      title: "New-Portfolio",
      Image: "NewPorfolio.png",
      Heading:
        "Elevate Your Online Presence with My Portfolio - Your Gateway to Stunning Web Experiences",

      Subheading:
        "Discover the power of Yash portfolio, crafted with passion and expertise using React and Firebase. Dive into a world of captivating animations, seamless user experiences, and cutting-edge technologies. Explore my diverse projects, innovative designs, and commitment to excellence. With Yash portfolio, your digital presence will shine like never before.",
      status: "Web",
      tags: ["React JS", "Tailwind CSS", "Firebase", "Framer-motion"],
      github: false,
      link: "",
    },
  ];

  const [isModalOpen, setisModalOpen] = useState(false);
  const modalRef = useRef(null);

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

  const [projectIndex, setProjectIndex] = useState(-1);
  const [currentProject, setCurrentProject] = useState({});

  const sortedCategories = [
    "All",
    "React JS",
    "Tailwind CSS",
    "Next Js",
    "Firebase",
    "Django",
    "Selenium",
    "SAAS",
    "CSS",
    "Flutter",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const [updatedCategories, setUpdatedCategories] = useState([]);

  useEffect(() => {
    const filteredProjects = ProjectData.filter((project) => {
      if (selectedCategory === "All") {
        return true;
      }
      return project.tags.includes(selectedCategory);
    });

    console.log(filteredProjects)
    setUpdatedCategories(filteredProjects);
  }, [selectedCategory]);

  return (
    <div className=" bg-[#000000]">
      <h3 class="text-4xl h-fit  md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto md:pl-16 pt-24">
        <span class="inline-block overflow-hidden text-white/40">Selected</span>
        <br />
        <span class="inline-block overflow-hidden text-white">works</span>
      </h3>

      <div className=" mt-4 hidden sm:flex items-center justify-center space-x-4 ">
        {sortedCategories.map((item) => {
          return (
            <div
              onClick={() => setSelectedCategory(item)}
              className={`w-fit h-10 z-50 flex items-center justify-center px-5 rounded-full  ${selectedCategory === item ? "text-black bg-[#64BBCD] border border-[#64BBCD]":" text-[#B5B5B6] border border-[#B5B5B6]"}  `}
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 md:px-4 px-2 pb-10 mx-auto md:pl-16 pt-24 gap-8">
        {updatedCategories.map((item, index) => {
          return (
            <div
              onMouseOver={() => {
                setProjectIndex(index);
                setProjectHover(true);
              }}
              onMouseOut={() => {
                setProjectIndex(-1);
                setProjectHover(false);
              }}
              onClick={() => {
                console.log(item);
                setCurrentProject(item);
                setisModalOpen(true);
              }}
              className={` bg-[#101114] col-span-1 ${
                projectIndex == index ? "h-52 sm:h-[26rem] " : " h-52 sm:h-96"
              } transition-all transform-gpu duration-500 flex flex-col justify-between text-white rounded-xl`}
            >
              <div
                className={` hidden sm:flex justify-between px-4 pt-8 ${
                  projectIndex == index
                    ? " -translate-y-2 transition-all transform-gpu duration-500 "
                    : ""
                } `}
              >
                <RevealComponent>
                  <p className=" md:text-[22px] text-[#bfbfc6] font-marlinGeoSQBold">
                    {item.title}
                  </p>
                </RevealComponent>
                <RevealComponent>
                  <div className=" text-white flex items-center space-x-4 justify-between">
                    <p>Visit</p>
                    <div className=" w-7 h-7 bg-black rounded-full flex items-center justify-center">
                      <MdOutlineArrowOutward className=" text-[20px]" />
                    </div>
                  </div>
                </RevealComponent>
              </div>
              {projectIndex == index && (
                <motion.div
                  className=" px-4  hidden sm:block"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={projectIndex !== index ? "hidden" : "visible"}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {item.Heading}
                </motion.div>
              )}
              <div className="px-0 relative sm:px-6">
                <RevealComponent>
                  {item.status == "App" ? (
                    <div className=" grid grid-cols-2 gap-4">
                      {item.Image.map((image, index) => {
                        return (
                          <img
                            src={`./Images/${image}`}
                            className=" col-span-1 object-cover bg-black rounded-2xl sm:rounded-none sm:rounded-t-2xl outline-none h-48 sm:h-[270px] w-full"
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <img
                      src={`./Images/${item.Image}`}
                      className=" bg-black rounded-2xl sm:rounded-none sm:rounded-t-2xl outline-none h-52 sm:h-[280px] w-full"
                    />
                  )}
                </RevealComponent>
                <RevealComponent>
                  <div className=" absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex sm:hidden items-center justify-center">
                    <MdOutlineArrowOutward className=" text-black text-[20px]" />
                  </div>
                </RevealComponent>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center z-30 backdrop-filter backdrop-blur-md bg-opacity-5 w-screen h-screen">
          <div
            ref={modalRef}
            className=" z-50 rounded-3xl w-[90%] sm:w-[80%] md:w-[43%] h-[80%] sm:h-[90%] flex-col space-y-2 items-center justify-start bg-black"
          >
            <div className=" h-[45%]  rounded-t-xl ">
              {currentProject.status == "App" ? (
                <div className=" grid grid-cols-2 gap-4  h-full">
                  {currentProject.Image.map((image, index) => {
                    return (
                      <img
                        className="rounded-t-xl h-[50%] object-cover"
                        src={`./Images/${image}`}
                      />
                    );
                  })}
                  <button
                    onClick={() => {
                      setisModalOpen(false);
                    }}
                    className=" w-8 h-8 border border-white/50 rounded-full bg-black flex items-center justify-center absolute  top-5 right-5"
                  >
                    <GiTireIronCross className=" text-white" />
                  </button>
                </div>
              ) : (
                <div className=" relative">
                  <div className=" w-full h-full absolute bg-gradient-to-b from-transparent to-black/70" />
                  <img
                    className=" w-full h-full rounded-t-xl "
                    src={`./Images/${currentProject.Image}`}
                  />
                  <button
                    onClick={() => {
                      setisModalOpen(false);
                    }}
                    className=" w-8 h-8 border border-white/50 rounded-full bg-black flex items-center justify-center absolute  top-5 right-5"
                  >
                    <GiTireIronCross className=" text-white" />
                  </button>
                </div>
              )}
            </div>
            <div className=" h-[55%] pt-4 rounded-b-xl bg-[#030308]  px-5">
              <div className=" text-[#bfbfc6] flex items-center justify-between">
                <p className=" text-5xl font-marlinGeoSQBold ">
                  {currentProject.title}
                </p>
                <div className=" text-2xl flex space-x-5">
                  {currentProject.github && (
                    <a href={currentProject.githubLink} target="_blank">
                      <LuGithub className=" text-white" />
                    </a>
                  )}
                  <a href={currentProject.link} target="_blank">
                    <div className=" w-6 h-6">
                      <img src="./Images/redirection.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div className=" hidden sm:flex space-x-4 pt-6">
                {currentProject.tags.map((item) => {
                  return (
                    <div className=" w-fit px-4 py-2 text-center  rounded-full h-10 text-white border border-white/40 ">
                      <h1 className="">{item}</h1>
                    </div>
                  );
                })}
              </div>
              <div className=" text-[#808080] font-marlinGeoSQlight mt-6 text-[16px]">
                {currentProject.Subheading}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SixthSection;
