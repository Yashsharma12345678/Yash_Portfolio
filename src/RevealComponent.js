import React, { useEffect, useRef } from "react";
import { motion,useInView,useAnimation,useIsPresent } from "framer-motion";

const RevealComponent = ({ children }) => {

  const ref = useRef(null)
  const isInview = useInView(ref)

  const maincontrols = useAnimation()


  useEffect(() => {
    if(isInview){
      maincontrols.start("visible")
    }
    else{
      maincontrols.start("hidden")
    }
  }, [isInview])
  

  return (
    <div ref={ref} style={{ position:"relative",overflow:"hidden"}}>
      
    <motion.div
      variants={{
        hidden: { opacity: 0.4, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={maincontrols}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
    </div>
  );
};

export default RevealComponent;
