import { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      index: 1,
      name: "John Smith",
      role: "Marketing dierector at XYZ",
      comment:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      index: 2,
      name: "Jane Doe",
      role: "CEO at ABC",
      comment:
        "We chose Positivus to help us with our SEO and PPC campaigns and have been very impressed with their results. They are knowledgeable, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      index: 3,
      name: "Alice Johnson",
      role: "Owner at 123",
      comment:
        "I recently started working with Positivus and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy.",
    },
    {
      index: 4,
      name: "Bob Brown",
      role: "Dierector at XYZ",
      comment:
        "Positivus has been a great partner for our company. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
      index: 5,
      name: "Gupta Patel",
      role: "Content creator",
      comment:
        "I have been working with Positivus for the past year and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy.",
    },
    {
      index: 6,
      name: "Sara Johnson",
      role: "Freelancer",
      comment:
        "Positivus made a huge difference in our online presence. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence.",
    },
  ];

  const total = data.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const getVisibleCards = () => {
    const left = (currentIndex - 1 + total) % total;
    const right = (currentIndex + 1) % total;
    return [data[left], data[currentIndex], data[right]];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-white py-16 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
          <h1 className="bg-lime-300 text-black font-light rounded-md px-3 py-1 text-4xl w-fit">
            Testimonials
          </h1>

          <div className="text-gray-800 max-w-xl px-3 text-center md:text-left">
            <p>
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn
              More about Our Digital Marketing Services "We have been working
              with Positivus for the past year
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-[45px] py-16 px-6 overflow-hidden">

          <div className="flex items-center justify-center gap-8 mb-12">
            {visibleCards.map((item, index) => {
              const isCenter = index === 1;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 
            ${
              isCenter
                ? "scale-100 opacity-100 z-10"
                : "scale-90 opacity-50 hidden md:block"
            }
          `}
                >
                  <TestimonialCard data={item} isActive={isCenter} />
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-10">
            <button
              onClick={handlePrev}
              className="bg-gray-700 hover:bg-lime-400 hover:text-black 
                 transition w-12 h-12 rounded-full 
                 flex items-center justify-center text-white text-2xl"
            >
              ←
            </button>

            <div className="flex gap-3">
              {data.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition
            ${index === currentIndex ? "bg-lime-400 scale-125" : "bg-gray-600"}
          `}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-gray-700 hover:bg-lime-400 hover:text-black 
                 transition w-12 h-12 rounded-full 
                 flex items-center justify-center text-white text-2xl"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
