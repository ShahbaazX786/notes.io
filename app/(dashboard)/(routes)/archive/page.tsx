"use client";
import { useNoteStore } from "@/lib/store/noteStore";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const ArchivePage = () => {
  const { notes } = useNoteStore();

  return (
    <div className="w-[80%] mx-auto mt-4">
      <DataTable columns={columns} data={notes} />
    </div>
  );
};

export default ArchivePage;
