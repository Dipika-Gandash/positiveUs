const Footer = () => {
  return (
    <footer className="mt-16 md:px-16">
      <div className="max-w-7xl mx-auto bg-zinc-900 md:rounded-t-[45px] text-white px-6 md:px-16 py-12">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
            <img
              src="/images/logo-alt.svg"
              alt="Positive Us Logo"
              className="w-36"
            />

            <ul className="flex flex-col md:flex-row gap-3 md:gap-6 font-light text-[18px]">
             <a href="#about"> <li className="cursor-pointer hover:text-lime-300">About Us</li></a>
             <a href="#services"> <li className="cursor-pointer hover:text-lime-300">Services</li></a>
            <a href="#useCases">  <li className="cursor-pointer hover:text-lime-300">Use Cases</li></a>
              <li className="cursor-pointer hover:text-lime-300">Pricing</li>
              <li className="cursor-pointer hover:text-lime-300">Blog</li>
            </ul>

            <div className="flex gap-5">
              <img src="/icons/linkedin.svg" alt="Linkedin" className="w-6" />
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6" />
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6" />
            </div>
          </div>

          <div className="flex flex-col justify-center md:flex-row md:justify-between gap-10">
            <div className="flex flex-col gap-3 max-w-sm">
              <h3 className="text-lime-300 font-semibold text-xl">
                Contact Us
              </h3>
              <p>Email: info@positiveus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-2xl w-full md:w-[50%]">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 rounded-lg text-white border border-white outline-none"
                />
                <button className="bg-lime-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-lime-400 transition w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <hr className="border-white" />

          <div className="flex flex-col md:flex-row items-center text-sm gap-4 text-white/80">
            <p>© 2026 Positivus. All rights reserved.</p>
            <p className="cursor-pointer hover:text-lime-300 underline">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
