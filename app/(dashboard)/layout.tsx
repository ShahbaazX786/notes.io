import { ReactChildren } from "@/lib/const/types";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSideBar from "./components/sideBar";
const HomeLayout = ({ children }: ReactChildren) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <SidebarProvider>
        <DashboardSideBar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default HomeLayout;
