"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactChildren } from "@/lib/const/types";
import useNotes from "@/lib/hooks/useNotes";
import { useNoteStore } from "@/lib/store/noteStore";
import { useEffect } from "react";
import DashboardHeader from "./components/dashboardHeader";
import DashboardSideBar from "./components/sideBar";
import { badToast, goodToast } from "@/lib/api/api-status";

const DashboardLayout = ({ children }: ReactChildren) => {
  const { notesQuery } = useNotes();
  const { setNotes } = useNoteStore();

  useEffect(() => {
    if (notesQuery.isSuccess && notesQuery.data?.data) {
      setNotes(notesQuery?.data?.data);
    }
  }, [notesQuery.isSuccess, notesQuery?.data, setNotes]);

  if (notesQuery.isLoading) return goodToast("Loading, Please Wait...");
  if (notesQuery.isError) return badToast("Error, Please try again.");

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
