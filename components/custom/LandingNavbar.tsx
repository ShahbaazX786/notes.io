'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({
    weight: '600',
    subsets: ['latin']
});

const LandingNavbar = () => {
    return (
        <div className="p-4 bg-transparent flex items-center justify-between">
            <Link href={'/'} className="flex items-baseline">
                <div className="relative h-15 w-15 mr-2">
                    <Image alt="Logo" src={'/Logo.png'} width={35} height={35} priority />
                </div>
                <h1 className={cn('text-2xl font-bold text-white -ml-1 leading-3 tracking-wide', font.className)}>otes.<b className="text-purple-700">io</b></h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={true ? '/dashboard' : '/sign-up'}>
                    <Button variant={"outline"} className="rounded-full">Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingNavbar;