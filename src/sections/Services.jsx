import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const cards = [
    {
      titleTop: "Search Engine",
      titleBottom: "Optimization",
      icon: "/icons/icon6.svg",
      img: "/cardImages/card-image1.png",
      link: "https://google.com",
    },
    {
      titleTop: "Pay-per-click",
      titleBottom: "advertising",
      icon: "/icons/icon6.svg",
      img: "/cardImages/card-image2.png",
      link: "https://google.com",
    },
    {
      titleTop: "Social Media",
      titleBottom: "Marketing",
      icon: "/icons/icon1.svg",
      img: "/cardImages/card-image3.png",
      link: "https://google.com",
    },
    {
      titleTop: "Email",
      titleBottom: "Marketing",
      icon: "/icons/icon6.svg",
      img: "/cardImages/card-image4.png",
      link: "https://google.com",
    },
    {
      titleTop: "Content",
      titleBottom: "Creation",
      icon: "/icons/icon6.svg",
      img: "/cardImages/card-image5.png",
      link: "https://google.com",
    },
    {
      titleTop: "Analytics and",
      titleBottom: "Tracking",
      icon: "/icons/icon1.svg",
      img: "/cardImages/card-image6.png",
      link: "https://google.com",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
          <h1 className="bg-lime-300 text-black font-light rounded-md px-3 py-1 text-4xl w-fit">
            Services
          </h1>

          <div className="text-gray-800 max-w-xl px-3 text-center md:text-left">
            <p>
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include 
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10">
          {cards.map((card, idx) => <ServiceCard key={idx} card={card} idx={idx} />)}
        </div>

      </div>
    </section>
  );
};

export default Services;
