import React, { useState } from "react";
// import from ''
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Carousel = ({ children, curr, prevSlide, nextSlide }) => {
  // const [curr, setCurr] = useState(0);

  // const prevSlide = () => {
  //   setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  // };
  // const nextSlide = () => {
  //   setCurr((curr) => (curr === children.length - 1 ? 0 : curr - 1));
  // };
  return (
    <div>
      {children}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white/800 text-gray-800 hover:bg-white"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/800 text-gray-800 hover:bg-white"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-black/30 rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
