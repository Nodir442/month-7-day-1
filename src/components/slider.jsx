import React, { useState } from "react";
import img1 from "../assets/images/carusel1.png";
import { Button } from "./UI/button";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: img1,
      title: "CHIKAGO WEARS FOR MEN",
      buttonLabel: "VIEW NOW ALL",
    },
    {
      image: img1,
      title: "CHIKAGO WEARS FOR WOMEN",
      buttonLabel: "VIEW NOW ALL",
    },
    {
      image: img1,
      title: "CHIKAGO WEARS FOR KIDS",
      buttonLabel: "VIEW NOW ALL",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-full">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex justify-between items-center w-11/12 h-[480px] bg-darkSilver rounded-3xl overflow-hidden">
          <button
            className="p-4 bg-primary ml-4 text-white rounded-full"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <div className="w-full flex justify-center items-center">
            <div className="w-[750px] ml-16">
              <h1 className="text-[100px] font-bold tracking-widest">
                {slides[currentIndex].title}
              </h1>
              <Button
                text={slides[currentIndex].buttonLabel}
                textSize="text-3xl"
                bgColor="bg-[#E2AC8B]"
                padding="py-[25px] px-[33px]"
                iconWidth="53px"
                iconHeight="29px"
                border="border-[2px] border-black"
              />
            </div>
            <img
              src={slides[currentIndex].image}
              alt="Slide"
              className="w-[466px] h-full object-cover mb-[-50px] mt-auto mr-0 ml-auto"
            />
          </div>
          <button
            className="p-4 bg-primary mr-4 text-white rounded-full"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
