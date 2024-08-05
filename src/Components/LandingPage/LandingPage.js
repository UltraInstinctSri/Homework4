import React, { useState, useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import profilepic from "../../assets/face-removebg-preview.png";

const LandingPage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 lg:mx-20">
      <div className="text-gray-200 mt-10 mb-10 text-sm font-serif">
        Frontend Developer
        <div className="grid grid-cols-1 text-5xl font-mono">Hello I'm</div>
        <div className="grid grid-cols-1 text-5xl font-mono text-green-300">
          Srijan Majumder
        </div>
        <div className="grid grid-cols-1 text-sm mt-5 text-gray-300 leading-loose font-serif tracking-widest">
          I am a fresher frontend developer passionate about creating
          user-friendly web interfaces using HTML, CSS, and JavaScript. I am
          eager to apply my skills and learn new technologies in real-world
          projects. In addition to my frontend expertise, I am currently a
          beginner at Spring Boot and have a foundational understanding of its
          core concepts. I am enthusiastic about expanding my knowledge in
          backend development and integrating it with my frontend skills to
          build comprehensive web applications.
        </div>
        <div className="flex mt-5">
          <button className="border border-green-300 px-3 py-1 text-green-300 rounded-full flex hover:bg-green-400 hover:text-white">
            Download CV
            <MdOutlineFileDownload
              className="ml-2 hover:animate-bounce"
              size={20}
            />
          </button>
          <button className="border-green-300">
            <VscGithub className="ml-5" size={25} color="#68d391" />
          </button>
          <button className="border-green-300">
            <CiLinkedin className="ml-5" size={25} color="#68d391" />
          </button>
          <button className="border-green-300">
            <SiLeetcode className="ml-5" size={25} color="#68d391" />
          </button>
          <button className="border-green-300">
            <FaTwitter className="ml-5" size={25} color="#68d391" />
          </button>
        </div>
      </div>
      <div className="ml-40 mt-3">
        {showImage && (
          <img
            src={profilepic}
            className="rounded-full h-[400px] w-[350px] animate-fadeIn"
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
