import React from 'react'
import RevealComponent from './RevealComponent'
import SkillsComponent from './SkillsComponent'

const SecondSection = () => {
  return (
    <div  className=" bg-[#000000] w-full h-fit px-2">
          <RevealComponent>
            <section className="  grid grid-cols-5  px-[2rem] text-white">
              <div className=" col-span-5 sm:col-span-3 ">
                <RevealComponent>
                  <h2 className=" text-[#bfbfc6] font-marlinGeoSQBold md:text-5xl tracking-tight  text-2xl sm:text-3xl">
                    LIVE THE LIFE AS YOU WANT
                  </h2>
                </RevealComponent>
                <RevealComponent>
                  <h2 className=" text-[#616166] mt-9 font-marlinGeoSQlight md:text-4xl tracking-tight  text-xl sm:text-2xl">
                    As a developer with 1 years of experience, I have honed my
                    skills in Various languages like Javascript, Flutter, React
                    Native, Node JS, Django,SQL, MongoDB. I am currently
                    learning TypeScript and Kotlin to expand my expertise. I
                    pride myself on being a quick learner and attentive
                    listener, which allows me to collaborate effectively with
                    clients to create efficient and scalable solutions. My focus
                    is on developing user-friendly applications that solve
                    real-world problems.
                  </h2>
                </RevealComponent>
              </div>
              <div className=" hidden sm:col-span-2 bg-gray-400">
                here image
              </div>
            </section>
          </RevealComponent>
          <div className=' px-8'>
          <SkillsComponent/>
          </div>
        </div>
  )
}

export default SecondSection