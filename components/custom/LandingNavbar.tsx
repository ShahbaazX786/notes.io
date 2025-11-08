import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  return (
    <div className="p-4 bg-transparent flex items-center justify-between">
      <Link href={"/"} className="flex items-baseline">
        <div className="relative h-15 w-15 mr-2">
          <h1
            className={cn(
              "text-2xl font-bold text-white -ml-1 leading-3 tracking-wide",
              font.className
            )}
          >
            Notes.<b className="text-green-500">io</b>
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={false ? "/home" : "/signup"}>
          <Button variant={"premium"} className="rounded-full font-semibold">
            {false ? "Notes" : "Get Started"}
          </Button>
        </Link>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default LandingNavbar;
