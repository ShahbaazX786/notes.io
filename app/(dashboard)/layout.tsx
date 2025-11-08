import { ReactChildren } from "@/lib/const/types";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
const HomeLayout = ({ children }: ReactChildren) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative">
      <SidebarProvider>
        <Sidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default HomeLayout;
