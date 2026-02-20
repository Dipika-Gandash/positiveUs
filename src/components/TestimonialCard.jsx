const TestimonialCard = ({ data, isActive }) => {
  return (
    <div className="text-white w-70 md:w-87">

      <div className={`rounded-[45px] p-8 transition-all duration-500
        ${isActive ? "bg-gray-800 border border-lime-400" : "bg-gray-700"}
      `}>

        <p className="text-sm md:text-base leading-relaxed">
          "{data.comment}"
        </p>
      </div>

      <div className="mt-6 text-center">
        <h4 className={`font-semibold ${isActive ? "text-lime-400" : ""}`}>
          {data.name}
        </h4>
        <p className="text-gray-400 text-sm">
          {data.role}
        </p>
      </div>

    </div>
  );
};

export default TestimonialCard;