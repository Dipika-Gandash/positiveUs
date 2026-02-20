import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src="/images/404.svg"
        alt="Not Found Image"
        className="max-w-xl max-h-xl"
      />
      <div className="flex flex-col gap-10 items-center px-12 md:px-0">
        <p className="text-2xl font-bold">
          Sorry, we couldn't find the page you were looking for
        </p>
        <Link to="/">
          {" "}
          <button className="px-8 py-4 border border-black rounded-2xl bg-black text-white cursor-pointer">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
