import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex my-5 py-8 justify-evenly bg-white">
        <div className="leftbox flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/32588495?v=4"
            alt="Linkan"
            className="rounded-full shadow-2xl w-2/3 "
          />
        </div>
        <div className="rightbox flex flex-col justify-start">
          <h1 className="text-5xl text-blue-600 tracking-widest">Hi , <br />I am Linkan Kumar Sahu</h1>
          <h1 className="text-2xl text-blue-600 tracking-widest text-end">( Python Developer,ML & NLP Engineer )</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
