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
          <div className=" flex flex-wrap  xl:m-10 xl:pt-14 px-7 mt-8   gap-20 w-full">
            <div className=" flex flex-col gap-4 ">
              <div className=" flex items-center">
                <div className="icon text-2xl px-5 py-3 m-4 bg-cyan-900 text-white rounded-3xl" >
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="">
                  <span className="text-xl font-semibold">Address</span>
                  <p className="text-gray-700">Kanniyakumari, Tamil Nadu, India</p>
                </div>
              </div>
              <div className=" flex items-center">
                <div className="icon text-2xl px-4 py-3 m-4 bg-cyan-900 text-white rounded-3xl">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="">
                  <span className="text-xl font-semibold">Phone</span>
                  <p className="text-gray-700">+91 9751243528</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="icon text-2xl px-4 py-3 m-4 bg-cyan-900 text-white rounded-3xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <span className="text-xl font-semibold">Email</span>
                  <p className="text-gray-700">albrightraj1211@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="xl:ml-14 w-full xl:w-7/12 lg:w-8/12 sm:w-11/12">
         <Form/>

         </div>
          </div>
        </div>
      </div>
    </>
  );
}
