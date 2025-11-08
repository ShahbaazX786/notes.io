import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import {
  MdArchive,
  MdCalendarToday,
  MdDashboard,
  MdNote,
  MdSettings,
} from "react-icons/md";

const DashboardSideBar = () => {
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "Notes",
      url: "/notes",
      icon: <MdNote />,
    },
    {
      title: "Archive",
      url: "/archive",
      icon: <MdArchive />,
    },
    {
      title: "Calendar",
      url: "/calender",
      icon: <MdCalendarToday />,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: <MdSettings />,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex justify-center items-center py-2">
        <Image
          src={"/Logo.png"}
          width={100}
          height={100}
          alt="Notes.io Logo"
          className="w-12 h-12 shadow-lg rounded-full"
        />
        <p className="text-sm md:text-lg font-bold">Notes.io</p>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSideBar;
