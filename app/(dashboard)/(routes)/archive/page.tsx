"use client";
import { useNoteStore } from "@/lib/store/noteStore";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getArchivedNotes } from "@/lib/utils";

const ArchivePage = () => {
  const { notes } = useNoteStore();
  const archivedNotes = getArchivedNotes(notes);

  return (
    <section className="w-full md:w-[90%] mx-auto mt-4">
      {archivedNotes.length > 0 ? (
        <>
          <h1 className="font-semibold text-lg mb-2">Archived Notes</h1>
          <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
            Notes which are older than 2 months are considered as archived!
          </p>
          <DataTable columns={columns} data={archivedNotes} />
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <h1 className="text-center text-lg lg:text-3xl">
            Great Work, There are no Archived notes.
          </h1>
        </div>
      )}
    </section>
  );
};

export default ArchivePage;
