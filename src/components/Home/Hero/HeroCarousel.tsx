"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "Welcome Home",
    title: "Senior Living, Designed Around You",
    description:
      "Comfortable residences, compassionate care, and a vibrant community where every day brings something to look forward to.",
    cta: "Schedule a Tour",
    href: "/contact",
    img: "/images/hero/hero-01.png",
  },
  {
    eyebrow: "Care That Grows With You",
    title: "From Independent Living to Memory Care",
    description:
      "A full continuum of care means peace of mind for you and your family — today and for years to come.",
    cta: "Explore Our Community",
    href: "/community",
    img: "/images/hero/hero-01.png",
  },
];

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      {slides.map((slide, key) => (
        <SwiperSlide key={key}>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-custom-1 text-blue">
                  {slide.eyebrow}
                </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <Link href={slide.href}>{slide.title}</Link>
              </h1>

              <p>{slide.description}</p>

              <Link
                href={slide.href}
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
              >
                {slide.cta}
              </Link>
            </div>

            <div>
              <Image
                src={slide.img}
                alt={slide.title}
                width={351}
                height={358}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
