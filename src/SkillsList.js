import { motion } from 'framer-motion';

const SkillsList = ({initialDirection}) => {
  const skills = [
    "REDUX",
    "VERCEL",
    "THREE.JS",
    "GITHUB",
    "GIT",
    "MONGODB",
    "FIGMA",
    "PYTHON",
    "C++",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "TAILWIND",
    "REACT.JS",
    "NEXT.JS",
    "NODE.JS",
    "FLUTTER",
    "REACT-NATIVE",
    "KOTLIN",
    "DJANGO",
    "SQL",
    "SELENIUM",
  ];

  const containerWidth = 1000;
  const direction = initialDirection === "right" ? 1 : -1;

  return (
    <motion.div className="skills-container flex overflow-hidden w-screen">
      <motion.ul
        className="skills-list flex items-center  w-screen animate-scroll whitespace-nowrap"
        animate={{
          x: [direction * -containerWidth, direction * containerWidth, direction * -containerWidth]
        }}

        transition={{
          repeat: Infinity,
          duration:15, 
          ease: "linear", 
        }}
      >
        {skills.map((skill) => (
          <motion.li
            key={skill}
            className="skill-item md:text-7xl text-xl font-semibold uppercase text-white/30 mr-3"
          >
            {skill} •
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SkillsList;
