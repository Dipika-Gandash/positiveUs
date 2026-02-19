const CaseStudyCard = ({ description }) => {
  return (
    <div className="flex-1">
      <div className="p-6 h-full">
        <p className="text-white mb-6 max-w-62 line-clamp-5">
          {description}
        </p>
        <a
          href="#"
          className="flex items-center gap-2 text-lime-300 font-medium"
        >
          <span>Learn Info</span>
          <img src="/icons/icon3.svg" alt="arrow icon" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
