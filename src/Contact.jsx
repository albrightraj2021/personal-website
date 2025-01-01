import '@fortawesome/fontawesome-free/css/all.min.css';
import Form from './Form';
export default function Contact() {
  return (
    <>
      <div className="w-full xl:pb-1 xl:p-10  bg-cyan-300 pt-20 ">
        <div className=" xl:px-8  bg-cyan-300  ">
          <div className=" text-center mb-4 xl:mt-11 ">
            <span className=" text-3xl font-bold xl:mt-5 ">CONTACT ME</span>
            <h2 className="text-3xl font-bold xl:mt-5 mt-5 text-cyan-950">Let’s Start A New Project</h2>
          </div>
          <div className=" flex flex-wrap  xl:m-10 pt-2 px-7 mt-8   gap-4 w-full">
            <div className=" flex flex-col gap-4 ">
              <div className=" flex items-center">
                <a href="https://www.google.com/maps/place/Kanniyakumari,+Tamil+Nadu,+India" target="_blank" rel="noopener noreferrer" className="icon text-2xl px-5 py-2 m-4 bg-cyan-900 text-white rounded-3xl border-2 border-transparent hover:border-cyan-500 transition duration-300 ease-in-out animate-pulse" style={{ animationDuration: '3s' }}>
                  <i className="fas fa-location-dot"></i>
                </a>
                <div className="">
                  <span className="text-xl font-semibold">Address</span>
                  <p className="text-gray-700">Kanniyakumari, Tamil Nadu, India</p>
                </div>
              </div>
              <div className=" flex items-center">
                <a href="tel:+919751243528" className="icon text-2xl px-4 py-2 m-4 bg-cyan-900 text-white rounded-3xl border-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out animate-pulse" style={{ animationDuration: '3s' }}>
                  <i className="fas fa-phone"></i>
                </a>
                <div className="">
                  <span className="text-xl font-semibold">Phone</span>
                  <p className="text-gray-700">+91 9751243528</p>
                </div>
              </div>
              <div className="flex items-center">
                <a href="mailto:albrightraj1211@gmail.com" className="icon text-2xl px-4 py-2 m-4 bg-cyan-900 text-white rounded-3xl border-2 border-transparent hover:border-cyan-500 transition duration-300 ease-in-out animate-pulse" style={{ animationDuration: '3s' }}>
                  <i className="fas fa-envelope"></i>
                </a>
                <div>
                  <span className="text-xl font-semibold">Email</span>
                  <p className="text-gray-700">albrightraj1211@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <a href="https://www.linkedin.com/in/albrightraj2021" target="_blank" rel="noopener noreferrer" className="icon text-2xl px-4 py-2 m-4 bg-cyan-900 text-white rounded-3xl border-2 border-transparent hover:border-cyan-500 transition duration-300 ease-in-out animate-pulse" style={{ animationDuration: '3s' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <div>
                  <span className="text-xl font-semibold">LinkedIn</span>
                  <p className="text-gray-700">www.linkedin.com/in/albrightraj2021</p>
                </div>
              </div>
              <div className="flex items-center">
                <a href="https://www.youtube.com/@abr.360" target="_blank" rel="noopener noreferrer" className="icon text-2xl px-4 py-2 m-4 bg-cyan-900 text-white rounded-3xl border-2 border-transparent hover:border-cyan-500 transition duration-300 ease-in-out animate-pulse" style={{ animationDuration: '3s' }}>
                  <i className="fab fa-youtube"></i>
                </a>
                <div>
                  <span className="text-xl font-semibold">YouTube</span>
                  <p className="text-gray-700">@abr.360</p>
                </div>
              </div>
            </div>
            <div className="xl:ml-14 w-full xl:w-7/12 lg:w-8/12 sm:w-full">
         <Form/>

         </div>
          </div>
        </div>
      </div>
    </>
  );
}
