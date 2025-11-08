import { ReactChildren } from "@/lib/const/types";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSideBar from "./components/sideBar";
import SideBarToggler from "./components/sideBarToggler";
const HomeLayout = ({ children }: ReactChildren) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <SidebarProvider>
        <DashboardSideBar />
        <main>
          <SideBarToggler />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default HomeLayout;
