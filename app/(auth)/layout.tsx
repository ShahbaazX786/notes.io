"use client";

import { ReactChildren } from "@/lib/const/types";

const AuthLayout = ({ children }: ReactChildren) => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-300">
      {children}
    </div>
  );
};

export default AuthLayout;
