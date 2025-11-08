import { ReactChildren } from "@/lib/const/types";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSideBar from "./components/sideBar";
import DashboardHeader from "./components/dashboardHeader";

const DashboardLayout = ({ children }: ReactChildren) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <SidebarProvider>
        <DashboardSideBar />
        <main className="w-full">
          <DashboardHeader />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
