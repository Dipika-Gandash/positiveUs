import React from "react";
import TeamCard from "../components/TeamCard";

const Team = () => {
  const teamData = [
    {
      image: "/team/person1.png",
      name: "John Smith",
      role: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      link: "https://linkedin.com",
    },
    {
      image: "/team/person2.png",
      name: "Jane Doe",
      role: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      link: "https://linkedin.com",
    },
    {
      image: "/team/person3.png",
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      link: "https://linkedin.com",
    },
    {
      image: "/team/person4.png",
      name: "Emily Johnson",
      role: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      link: "https://linkedin.com",
    },
    {
      image: "/team/person5.png",
      name: "Brian Williams",
      role: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      link: "https://linkedin.com",
    },
    {
      image: "/team/person6.png",
      name: "Sarah Kim",
      role: "Content Creator",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
      link: "https://linkedin.com",
    },
  ];
  return (
    <section className="bg-white py-16 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
          <h1 className="bg-lime-300 text-black font-light rounded-md px-3 py-1 text-4xl w-fit">
            Team
          </h1>

          <div className="text-gray-800 max-w-xl px-3 text-center md:text-left">
            <p>
              Meet the skilled and experienced team behind our successful
              digital marketing strategies
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamData.map((data, idx) => (
            <TeamCard key={idx} data={data} />
          ))}
        </div>
        <div className="flex justify-center sm:justify-end mt-10">
             <button
          className="bg-zinc-900 text-white px-12 md:px-20 py-5 rounded-xl
  transition-all duration-300 ease-out
  hover:scale-105
  hover:shadow-2xl
  hover:bg-lime-300 hover:text-black"
        >
          See all team
        </button>
        </div>
       
      </div>
    </section>
  );
};

export default Team;
