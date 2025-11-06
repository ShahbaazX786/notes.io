import { ReactChildren } from "@/lib/const/types";
import SideBar from "./components/sideBar";

const HomeLayout = ({ children }: ReactChildren) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <SideBar>{children}</SideBar>
    </div>
  );
};

export default HomeLayout;
