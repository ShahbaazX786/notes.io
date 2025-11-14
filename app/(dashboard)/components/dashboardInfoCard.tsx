import Image from "next/image";
import React from "react";

const DashboardInfoCard = ({
  title,
  icon,
  metric1,
  metric2,
}: {
  title: string;
  icon: string;
  metric1: number;
  metric2: number;
}) => {
  return (
    <div className="w-full h-full border grid grid-cols-2 lg:grid-cols-3 p-2 lg:p-4 rounded-lg gap-4 lg:gap-8 shadow-md hover:shadow-lg cursor-default">
      <Image
        src={icon}
        alt={title}
        height={100}
        width={100}
        className="w-10 h-10 lg:w-20 lg:h-20"
      />
      <div className="flex flex-col justify-between items-center gap-4">
        <p className="text-sm lg:text-xl font-semibold">{title}</p>
        <div>
          <span className="text-4xl font-bold">{metric1}</span>
          <span className="text-lg font-bold text-gray-500">/{metric2}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfoCard;
