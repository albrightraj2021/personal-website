export default function Contact() {
    return(
        <>
        <div id="contact" className="contact pt-20">
      <div className="cnt-container p-4 md:p-8">
        <div className="cnt-header text-center mb-4">
          <span className="head text-2xl font-bold">CONTACT ME</span>
          <h2 className="text-3xl font-bold">Let’s Start A New Project</h2>
        </div>
        <div className="cnt-details-container flex flex-wrap justify-between mt-4">
          <div className="cnt-details flex flex-col gap-4">
            <div className="cnt-item flex items-center">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="cnt-item-text">
                <span className="text font-semibold">Address</span>
                <p className="text-gray-700">Kanniyakumari, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="cnt-item flex items-center">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="cnt-item-text">
                <span className="text font-semibold">Phone</span>
                <p className="text-gray-700">+91 9876543210</p>
              </div>
            </div>
            <div className="cnt-item flex items-center">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="cnt-item-text">
                <span className="text font-semibold">Email</span>
                <p className="text-gray-700">abr@abr.com</p>
              </div>
            </div>
          </div>
          <div className="form-container w-full md:w-1/2">
            <form className="form-content">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid-item">
                  <input type="text" placeholder="Your Name" className="form-input w-full p-2" name="name" />
                </div>
                <div className="grid-item">
                  <input type="email" placeholder="Your Email" className="form-input w-full p-2" name="email" />
                </div>
                <div className="grid-item">
                  <input type="tel" placeholder="Your Phone" className="form-input w-full p-2" name="Phone" />
                </div>
                <div className="grid-item">
                  <input type="text" placeholder="Your Subject" className="form-input w-full p-2" name="Subject" />
                </div>
              </div>
              <textarea className="msg w-full p-2" cols="65" rows="8" placeholder="Start writing message here" name="message"></textarea>
              <button className="btn mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}