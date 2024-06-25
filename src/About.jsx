import AboutImg from "./assets/img/about-img.jpg"
import aboutSignature from "./assets/img/signature.png"

export default function About() {
 return(
    <>
    <div id="about" className="p-4 md:p-8">
      <div className="flex flex-wrap justify-between x" >
        <div className="w-full xl:w-1/4 ">
          <img src={AboutImg} alt="about" className="w-full max-w-400" />
        </div>
        <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <div className="mb-4">
            <span className="text-lg font-bold text-gray-800">ABOUT ME</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">I Develop Website that Works</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum sapiente voluptate quaerat, perferendis quasi saepe veritatis qui necessitatibus ut. Odio molestias cupiditate, nemo fugit repudiandae totam! Distinctio, tempora veritatis.
            </p>
          </div>
          <hr className="border-gray-400 my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="font-semibold mr-2">Name</span>
              <span>Albright Raj</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Phone</span>
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Age</span>
              <span>21</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Email</span>
              <span>abr@abr.com</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Occupation</span>
              <span>Web Designer</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Nationality</span>
              <span>Indian</span>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-20">
              <img src={aboutSignature} alt="about-img" className="w-full" />
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold">ABR DESIGNER</div>
              <div className="text-gray-700">Tamil Nadu, India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
 )    
}