import Image from "next/image";
import React from "react";

const NoNotes = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Image
        src={"/images/empty.gif"}
        alt="tumbleweed"
        height={100}
        width={100}
        className="rounded-lg h-auto w-80 md:w-[80%]"
      />
      <p className="text-lg lg:text-3xl font-bold ">
        There are no notes!, Let&apos; Create a note now.
      </p>
    </div>
  );
};

export default NoNotes;
