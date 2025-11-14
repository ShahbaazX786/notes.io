"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

/**
 * Custom Sidebar Button Component which is used to open and close the sidebar for Mobile.
 */

const SideBarToggler = () => {
  const { toggleSidebar, openMobile } = useSidebar();

  return (
    <div className="flex md:hidden justify-end items-end">
      <Button onClick={toggleSidebar} variant={"outline"}>
        {!openMobile ? (
          <MdOutlineMenu className="w-6 h-6" />
        ) : (
          <MdOutlineClose className="w-6 h-6" />
        )}
      </Button>
    </div>
  );
};

export default SideBarToggler;
