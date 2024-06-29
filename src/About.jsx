import AboutImg from "./assets/img/about-img.jpg";
import Signature from "./assets/img/signature.png";

export default function About() {
  return (
    <>
      <div id="About" className="m-6">
        <div className="flex flex-col xl:flex-row w-full">
          <div className="xl:w-6/12 xl:ml-14 my-18 mt-24 mb-14 w-full mx-auto">
            <img
              src={AboutImg}
              alt="about"
              className="xl:w-auto w-full rounded-lg"
            />
          </div>
          <div className="xl:mt-32 xl:mr-12 xl:ml-10 xl:mb-32  w-full">
            <p className="xl:text-4xl text-3xl font-semibold ml-3">ABOUT ME</p>
            <p className="text-3xl font-semibold text-cyan-800 mt-4 pl-2">
              Creating Websites That Drive Success
            </p>
            <p className="mt-4 xl:ml-7 ml-3 mr-2 text-xl">
              I'm Albright Raj, a passionate web designer dedicated to crafting
              visually appealing and highly functional websites. With a keen eye
              for detail and a focus on user experience.
            </p>
            <div class="pt-4 pb-8 mt-4 ml-2 w-full">
              <div class="flex flex-wrap">
                <div class="xl:w-1/2 lg:w-full md:w-1/2 w-full">
                  <ul class="about-info flex">
                    <li class="pr-6">
                      <p class="font-medium mb-3 text-lg">Name</p>
                      <p class="font-medium mb-3 text-lg">Age</p>
                      <p class="font-medium mb-3 text-lg">Occupation</p>
                    </li>
                    <li>
                      <p class="mb-3 text-lg">Albright Raj S J</p>
                      <p class="mb-3 text-lg">21 Years</p>
                      <p class="mb-3 text-lg">System Engineer</p>
                    </li>
                  </ul>
                </div>
                <div class="xl:w-1/2 lg:w-full md:w-1/2 w-full">
                  <ul class="about-info flex">
                    <li class="pr-7">
                      <p class="font-medium mb-3 text-lg">Phone</p>
                      <p class="font-medium mb-3 text-lg">Email</p>
                      <p class="font-medium mb-3 text-lg break-words">Nationality</p>
                    </li>
                    <li>
                      <p class="mb-3 text-lg">+91 9751243528</p>
                      <p class="mb-3 text-lg break-words">albrightraj1211@gmail.com</p>
                      <p class="mb-3 text-lg">Indian</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="border-1 dark:bg-gray-700 mt-4 ml-6" />
            <div className="flex xl:mt-10 align-middle xl:gap-4 gap-x-1 xl:w-5/6 w-11/12 mt-5 pl-8">
              <div>
                <img src={Signature} alt="signature" />
              </div>
              <div className="xl:flex flex-1 xl:justify-end justify-evenly xl:mt-10 xl:gap-6 ">
                <div className="text-xl ">WEB DESIGNER</div>
                {/* add the name company i work */}
                <div className="text-gray-500 xl:pt-1">Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
