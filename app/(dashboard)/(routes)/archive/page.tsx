"use client";
import { useNoteStore } from "@/lib/store/noteStore";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const ArchivePage = () => {
  const { notes } = useNoteStore();

  return (
    <section className="w-[90%] mx-auto mt-4 border rounded-xl px-2 lg:px-8 py-10">
      <h1 className="font-semibold text-lg mb-2">Archived Notes</h1>
      <DataTable columns={columns} data={notes} />
    </section>
  );
};

export default ArchivePage;
