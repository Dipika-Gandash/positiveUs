import React from "react";

const TeamCard = ({ data }) => {
  return (
    <div className="relative rounded-[45px] border border-black shadow-[0px_6px_0px_#191a23] p-15 bg-white">
      
      <a
        href={data.link}
        target="_blank"
        className="absolute top-6 right-10 w-10 h-10 flex items-center justify-center rounded-full border-2 "
      >
        <img src="/icons/linkedin.svg" alt="Linkedin Logo" className="w-6 h-6" />
      </a>

      <div className="flex items-center gap-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold">{data.name}</h3>
          <p className="text-sm sm:text-base text-gray-700">{data.role}</p>
        </div>
      </div>

      <hr className="border-t border-black my-4 w-full" />

      <p className="text-sm sm:text-base text-gray-800">{data.description}</p>
    </div>
  );
};

export default TeamCard;
