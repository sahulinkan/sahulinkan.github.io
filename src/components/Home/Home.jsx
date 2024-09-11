// HomePage.js
import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <div className="bg-white text-black flex fixed top-0 justify-center shadow-lg w-full mx-auto">
          <ul class="flex space-x-3 gap-3 px-3 py-1 text-xl ">
            <ScrollLink
              to="section1"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Home</li>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>About</li>
            </ScrollLink>
            <ScrollLink
              to="github"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Github</li>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li>Contact</li>
            </ScrollLink>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <Element name="section1">
        <div className="flex my-5 py-10 justify-evenly bg-white">
          <div className="leftbox flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/32588495?v=4"
              alt="Linkan"
              className="rounded-full shadow-2xl w-2/3 "
            />
          </div>
          <div className="rightbox flex flex-col justify-start">
            <h1 className="text-5xl text-blue-600 tracking-widest py-1">
              Hi , <br />I am
              <h1>Linkan Kumar Sahu</h1>
            </h1>
            <h1 className="text-2xl text-blue-600 tracking-widest text-end">
              ( Python Developer,ML & NLP Engineer )
            </h1>
          </div>
        </div>
      </Element>
      <Element name="about">
      <div className="bg-gray-400 py-10 h-[40vh] text-center">
          <h1 class="text-white text-5xl text-center">About me</h1>
        </div>
      </Element>
      <Element name="github">
        <div className="bg-green-400 py-10 h-[40vh] text-center">
          <h1 class="text-white text-5xl text-center">Github</h1>
        </div>
      </Element>
      <Element name="contact">
        <div className="bg-black py-10 h-[40vh] text-center">
          <h1 class="text-white text-5xl text-center">Get in Touch</h1>
          <a href="mailto:sahulinkan7@gmail.com">
            <h1 className="text-white py-2 my-3">sahulinkan7@gmail.com</h1>
          </a>
        </div>
      </Element>
      <Footer />
    </div>
  );
};

export default HomePage;
