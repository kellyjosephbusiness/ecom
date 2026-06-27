import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import PromoBanner from "./PromoBanner";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";

// NOTE: NewArrival and BestSeller render priced product cards from the
// e-commerce catalog (shopData). They're intentionally left out of the senior
// living home for now — repurpose them into "Featured Floor Plans" or
// "Featured Amenities" before adding them back.

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <PromoBanner />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
