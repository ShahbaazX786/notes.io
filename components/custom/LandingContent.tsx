"use client";

import { Testimonials } from "@/lib/const/constants";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        What our customers say..
      </h2>
      <div className="w-full h-full rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={Testimonials.map((item) => ({
            name: item.name,
            title: item.title,
            quote: item.description,
            avatar: item.avatar,
            image: item.src,
          }))}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default LandingContent;
