import { globeConfig, globeSampleArcs } from "@/lib/const/constants";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(
  () => import("../../../components/aceternity/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function About() {
  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto bg-[#111827] dark:bg-black relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-gray-200 dark:text-white">
            Add notes from anywhere around the world
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-400 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share :)
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black rounded-lg z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10 my-8">
          <World data={globeSampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  );
}
