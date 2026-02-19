import React from "react";

const ServiceCard = ({ card, idx }) => {
  const type = idx % 3;
  const isArrowCard = idx === 2 || idx === 5;

  let cardBg = "";
  let titleBg = "";
  let serviceInfoColor = "";
  let iconWrapper = "";

  if (type === 0) {
    // 1st and 4th card
    cardBg = "bg-white";
    titleBg = "bg-lime-300 text-black";
    serviceInfoColor = "text-black";
    iconWrapper = "";
  } else if (type === 1) {
    // 2nd and 5th card
    cardBg = "bg-lime-300";
    titleBg = "bg-white text-black";
    serviceInfoColor = "text-black";
    iconWrapper = "";
  } else {
    // 3rd and 6th card
    cardBg = "bg-gray-900";
    titleBg = "bg-white text-black";
    serviceInfoColor = "text-white";
    iconWrapper =
      "bg-white rounded-full w-9 h-9 flex items-center justify-center";
  }

  return (
    <div
      className={`${cardBg} relative border border-black rounded-[45px] 
      shadow-[0px_6px_0px_#191a23]`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 sm:p-12 items-center">
        <div className="flex flex-col justify-end lg:justify-between h-full">
          <h3 className="flex flex-col mt-2">
            <span
              className={`${titleBg} px-2 py-1 w-fit rounded-md font-light`}
            >
              {card.titleTop}
            </span>
            <span
              className={`${titleBg} px-2 py-1 w-fit rounded-md font-light`}
            >
              {card.titleBottom}
            </span>
          </h3>

          <div className="mt-10">
            <a
              href={card.link}
              className={`flex items-center gap-3 ${serviceInfoColor}`}
            >
              <div className={iconWrapper}>
                <img
                  src={card.icon}
                  alt="Icon"
                  className={` ${
                    isArrowCard ? "w-5 h-5" : "w-10 h-10"
                  }`}
                />
              </div>
              <p className="hidden sm:block">Service Info</p>
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center mt-6 mr-6 lg:mt-0">
          <img
            src={card.img}
            alt="Card Image"
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-36 h-36 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
