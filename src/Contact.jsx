import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
export default function Contact() {
  return (
    <>
      <div className="w-full xl:pb-1 xl:p-10  bg-cyan-300 pt-20  ">
        <div className=" xl:px-8 p-4 bg-cyan-300  ">
          <div className=" text-center mb-4 xl:mt-11">
            <span className=" text-3xl font-bold xl:mt-5 ">CONTACT ME</span>
            <h2 className="text-3xl font-bold xl:mt-5 mt-5 text-cyan-950">Let’s Start A New Project</h2>
          </div>
          <div className=" flex flex-wrap  xl:m-10 xl:pt-14 xl:x mt-8  gap-20 w-full">
            <div className=" flex flex-col gap-4">
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
            <div className="form-container xl:ml-20 *:-mr-20  xl:w-6/12 ml-1 w-9/12 ">
              <form>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <div>
                    <input type="text" placeholder="Your Name" className="form-input w-full p-3 bg-cyan-50  rounded border-2 border-cyan-500" name="name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="form-input w-full p-3 bg-cyan-50  rounded border-2 border-cyan-500" name="email" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Your Phone" className="form-input w-full p-4 bg-cyan-50  rounded border-2 border-cyan-500" name="Phone" />
                  </div>
                  <div>
                    <input type="text" placeholder="Your Subject" className="form-input w-full p-4 bg-cyan-50 rounded mb-5 border-2 border-cyan-500" name="Subject" />
                  </div>
                </div>
                <textarea className=" w-full p-2 bg-cyan-50  xl:mt-3 rounded border-2 border-cyan-500" cols="65" rows="8" placeholder="Start writing message here" name="message"></textarea>
                <button className="mb-3 mt-4 bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-3 px-3 rounded xl:mx-auto">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
