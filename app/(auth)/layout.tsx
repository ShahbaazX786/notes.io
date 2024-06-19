'use client';

import { AuroraBackground } from "@/components/aceternity/aurora_background";
import { Vortex } from "@/components/aceternity/vortex";
import { AuthLayoutProps } from "@/lib/const/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import AuthToggleButton from "./components/AuthToggleButton";

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 w-full min-h-screen relative">
            <div className="col-span-1 relative w-full h-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={100}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full" />
                <motion.div initial={{ opacity: 0.0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }} className="absolute flex flex-col justify-center items-center gap-5 bottom-[20%] left-[15%]">
                    <Image src={'/LoginLogo.png'} width={500} height={500} priority alt="Notes.io Logo" className={cn("md:text-4xl text-xl text-white relative z-20")} />
                    <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                        Create Notes & Reminders
                    </h1>
                    <p className="text-center mt-2 text-neutral-300 relative z-20">
                        Lorem ipsum dolor sit amet.
                    </p>
                </motion.div>
            </div>
            <div className="col-span-1 w-full h-full">
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                        <div className="border-2 dark:border-white bg-white text-black drop-shadow-lg p-10 w-full h-full rounded-lg">
                            {children}
                        </div>
                        <div className="mt-5">
                            <AuthToggleButton />
                        </div>
                    </motion.div>
                </AuroraBackground>
            </div>
        </div>
    )
}

export default AuthLayout;