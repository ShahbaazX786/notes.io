"use client";
import { useNoteStore } from "@/lib/store/noteStore";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const ArchivePage = () => {
  const { notes } = useNoteStore();

  return (
    <section className="w-full md:w-[90%] mx-auto mt-4">
      <h1 className="font-semibold text-lg mb-2">Archived Notes</h1>
      <DataTable columns={columns} data={notes} />
    </section>
  );
};

export default ArchivePage;
