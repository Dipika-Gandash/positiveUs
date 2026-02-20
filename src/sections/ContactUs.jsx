import { useState } from "react";

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("sayHi");
  return (
    <section className="bg-white py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
          <h1 className="bg-lime-300 text-black font-light rounded-md px-3 py-1 text-4xl w-fit">
            Contact Us
          </h1>

          <div className="text-gray-800 max-w-xs px-3 text-center md:text-left">
            <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
          </div>
        </div>

        <div className="bg-gray-200 flex rounded-[45px] overflow-hidden">
          <form className="flex  flex-1 flex-col gap-6 p-12 w-full md:w-1/2">
            <div className="flex max-w-xl gap-10">
              <div
                onClick={() => setSelectedOption("sayHi")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                  {selectedOption === "sayHi" && (
                    <div className="w-3 h-3 bg-lime-300 rounded-full"></div>
                  )}
                </div>
                <span>Say Hi</span>
              </div>

              <div
                onClick={() => setSelectedOption("quote")}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                  {selectedOption === "quote" && (
                    <div className="w-3 h-3 bg-lime-300 rounded-full"></div>
                  )}
                </div>
                <span>Get a Quote</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Name"
                className="border rounded-md p-3 bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email*</label>
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-3 bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Message*</label>
              <textarea
                placeholder="Message"
                rows="4"
                className="border rounded-md p-3 bg-white resize-none"
              />
            </div>

            <button className="bg-black text-white py-3 rounded-md hover:bg-lime-300 hover:text-black transition">
              Send Message
            </button>
          </form>

          <div className=" hidden md:block w-1/2 -mr-72">
            <img
              src="/images/contact-pic.png"
              alt="Contact"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
