import React, { useRef, useState, useEffect } from "react";

const WorkingProcessAccordion = ({ item, openIndex, handleToggle }) => {
  const isOpen = item.index === openIndex;
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`border rounded-[45px] shadow-[0px_6px_0px_#191a23] overflow-hidden transition-all duration-500 p-5 sm:p-10 ${
        isOpen ? "bg-lime-300" : "bg-gray-100"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer px-2 sm:px-6 py-4 select-none"
        onClick={() => handleToggle(item.index)}
      >
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-3xl sm:text-5xl font-display">
            0{item.index}
          </span>
          <span className="text-sm sm:text-xl">{item.title}</span>
        </div>
        <img
          src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
          className="w-10 h-10 sm:w-15 sm:h-15"
        />
      </div>

      <div
        className={`border-t-2 border-black mx-2 sm:mx-6 transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        ref={contentRef}
        style={{ height }}
        className="px-6 overflow-hidden transition-all duration-500"
      >
        <p className="py-4 opacity-100 transition-opacity duration-500">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default WorkingProcessAccordion;
