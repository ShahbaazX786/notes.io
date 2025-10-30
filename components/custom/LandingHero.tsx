"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroHighlight, Highlight } from "../aceternity/hero_highlight";
import { Button } from "../ui/button";

const LandingHero = () => {
  // const isSignedIn = useAuth();
  return (
    <HeroHighlight className="font-bold py-36 text-center">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <div className="space-y-8">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <h1 className="text-white font-bold">
              The Best&nbsp;
              <Highlight className="text-black dark:text-white">
                Note Maker
              </Highlight>
            </h1>
          </div>
          <div className="text-sm md:text-xl font-light text-white">
            Never miss out any important thing using{" "}
            <b className="font-bold">Notes.io</b>
          </div>
          <div>
            <Link href={true ? "/dashboard" : "/sign-up"}>
              <Button
                variant={"premium"}
                className="md:text-lg p-4 md:p-6 rounded-full font-semibold scale-110 hover:scale-125 transition-all ease-linear hover:rotate-1"
              >
                Start Adding Notes For Free!
              </Button>
            </Link>
          </div>
          <div className="text-gray-400 text-xs md:text-sm font-normal">
            No Credit Card Required*
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
};

export default LandingHero;
