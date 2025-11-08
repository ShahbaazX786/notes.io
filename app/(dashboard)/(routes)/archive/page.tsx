"use client";
import { Note } from "@/lib/const/types";
import { useNoteStore } from "@/lib/store/noteStore";
import NoteCard from "../../components/NoteCard";

const ArchivePage = () => {
  const { notes } = useNoteStore();

  return (
    <div className="flex justify-center items-start flex-wrap gap-6 w-[99%] mx-auto overflow-y-auto pb-10 pt-8">
      {notes.length > 0 &&
        notes.map((note: Note) => <NoteCard key={note._id} note={note} />)}
    </div>
  );
};

export default ArchivePage;
