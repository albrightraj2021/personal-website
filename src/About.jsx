import AboutImg from "./assets/img/about-img.jpg";
import Signature from "./assets/img/signature.png";

export default function About() {
  return (
    <>
      <div className="flex flex-col xl:flex-row w-full">
        <div className="xl:w-6/12 xl:ml-14 my-10 xl:my-24  lg:px-0 w-full px-8 md:px-28 ">
          <img src={AboutImg} alt="about" className="w-full rounded-lg" />
        </div>
        <div className="xl:mt-32 xl:mr-12 xl:ml-12 xl:mb-32 mt-5 pb-5 w-full px-5">
          <p className="xl:text-4xl text-3xl font-semibold ml-3">ABOUT ME</p>
          <p className="text-3xl font-semibold text-cyan-800 mt-4 pl-2">
            Creating Websites That Drive Success
          </p>
          <p className="mt-4 xl:ml-3 ml-3 mr-2 text-xl">
            I'm Albright Raj, a passionate web designer dedicated to crafting
            visually appealing and highly functional websites. With a keen eye
            for detail and a focus on user experience.
          </p>
          <div className="pt-4 pb-8 mt-4 ml-2 w-full">
            <div className="flex flex-wrap">
              <div className="xl:w-1/2 w-full">
                <ul className="about-info flex">
                  <li className="pr-6">
                    <p className="font-medium mb-3 text-lg">Name</p>
                    <p className="font-medium mb-3 text-lg">Age</p>
                    <p className="font-medium mb-3 text-lg">Occupation</p>
                  </li>
                  <li>
                    <p className="mb-3 text-lg">Albright Raj S J</p>
                    <p className="mb-3 text-lg">21 Years</p>
                    <p className="mb-3 text-lg">System Engineer</p>
                  </li>
                </ul>
              </div>
              <div className="xl:w-1/2 w-full">
                <ul className="about-info flex">
                  <li className="pr-7">
                    <p className="font-medium mb-3 text-lg">Phone</p>
                    <p className="font-medium mb-3 text-lg">Email</p>
                    <p className="font-medium mb-3 text-lg break-words">Nationality</p>
                  </li>
                  <li>
                    <p className="mb-3 text-lg">+91 9751243528</p>
                    <p className="mb-3 text-lg break-words">albrightraj1211@gmail.com</p>
                    <p className="mb-3 text-lg">Indian</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-1 dark:bg-gray-700 mt-4 ml-6" />
          <div className="flex xl:mt-10  xl:gap-4 gap-x-1 xl:w-full w-11/12 mt-5 pl-8">
            <div >
              <img src={Signature} alt="signature" className="w-24" />
            </div>
            <div className="flex-1 xl:flex xl:ml-20 *:mt-5 justify-start  xl:gap-6 mt-4 xl:mt-0">
              <div className="text-xl">WEB DESIGNER</div>
              <div className="text-gray-500 xl:pt-1">Tamil Nadu, India</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
