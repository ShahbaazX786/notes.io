import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NavbarComponent = () => {
  return (
    <nav>
      <div className="flex flex-row justify-between items-center px-4 py-2 border-b-2 shadow-sm">
        <Link href={"/"} className="flex justify-center items-baseline">
          <Image
            src={"/Logo.png"}
            alt="Brand Logo"
            height={24}
            width={24}
            quality={100}
            priority
          />
          <p className="text-2xl font-bold">otes.io</p>
        </Link>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search Notes..." />
          <Button type="submit">Search</Button>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
