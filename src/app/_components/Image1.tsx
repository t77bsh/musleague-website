"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Image1() {
  useEffect(() => {
    AOS.init({
        once: true,
    });
  }, []);

  return (
    <div data-aos="zoom-out-left" className="relative">
      <div className="absolute top-0 left-0 w-full h-full rotate-[5deg] -z-10 bg-[#e4cf9b] rounded-2xl"></div>
      <Image
        className="rounded-2xl"
        src={"/couple.jpg"}
        alt={"Muslim couple on a picnic"}
        width={500}
        height={500}
      />
    </div>
  );
}

export default Image1;
