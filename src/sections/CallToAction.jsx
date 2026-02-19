import React from "react";

const CallToAction = () => {
  return (
    <section className="relative p-5 mt-11">
      <div className="relative max-w-7xl mx-auto bg-gray-200 rounded-[45px] p-12">

        <div className="w-full md:w-[35%]">
          <h2 className="text-3xl font-display mb-4">
            Let's make things happen
          </h2>

          <p className="text-gray-900  mb-6">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

        <button
  className="bg-zinc-900 text-white px-12 md:px-20 py-5 rounded-xl
  transition-all duration-300 ease-out
  hover:scale-105
  hover:shadow-2xl
  hover:bg-lime-300 hover:text-black"
>
  Get your free proposal
</button>

        </div>


        <img
          src="/images/proposal-pic.png"
          alt="Proposal"
          className="hidden md:block absolute right-10 -top-12 h-100 object-contain"
        />
      </div>
    </section>
  );
};

export default CallToAction;
