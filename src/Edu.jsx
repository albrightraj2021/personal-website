import React from 'react';
import EduImg from "./assets/img/edu-img.jpg";
import Cap from "./assets/img/cap.png";
import HS from "./assets/img/high-school.png";

function Edu() {
  return (
    <>
      <div className="flex flex-col xl:flex-row w-full min-h-screen bg-cyan-50">
        <div className="flex flex-col xl:w-9/12 w-full mt-10 px-8 md:px-28 pb-9 pt-12">
          <p className="text-cyan-600 text-xl font-extrabold ">EDUCATION</p>
          <p className="xl:text-4xl text-3xl font-semibold mt-2">My Education</p>
          <p className="text-xl mt-4">
            Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
          </p>
          <div className="flex flex-row mt-8">
            <div className="lg:w-18 lg:h-18 w-48 h-16 md:w-28 md:h-16 bg-cyan-200 rounded-lg flex items-center justify-center">
              <img src={HS} alt="Graduation Cap" className="w-10 h-10" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold">High school</p>
              <p className="text-lg text-gray-600">St.mary's matriculation higher secondary school, mariagiri</p>
              <p className="text-lg mt-2">
                Knowledge is the foundation upon which we build our future, guiding us through the complexities of life.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div className="lg:w-32 lg:h-20 w-48 h-16 md:w-28 md:h-16 bg-cyan-200 rounded-lg flex items-center justify-center">
              <img src={Cap} alt="Graduation Cap" className="lg:w-15 lg:h-15 w-10 h-10" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold">Bachelor in Computer Engineering</p>
              <p className="text-lg text-gray-600">St. Xavier's Catholic College of Engineering, Chunkankadai</p>
              <p className="text-lg mt-2">
                The entire structure of knowledge opens up, revealing the truths and principles that form the foundation of a fulfilling life.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-6/12 xl:ml-14 my-10 xl:my-24 lg:pr-12 w-full px-8 md:px-28">
          <img src={EduImg} alt="about" className="w-full rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default Edu;