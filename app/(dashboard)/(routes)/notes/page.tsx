"use client";

import { Note } from "@/lib/const/types";
import NoteCard from "../../components/NoteCard";
import NoNotes from "../../components/NoNotes";
import { useNoteStore } from "@/lib/store/noteStore";

const NotesPage = () => {
  const { notes } = useNoteStore();
  return (
    <div className="w-full h-full flex justify-start items-start flex-col relative">
      <div className="flex justify-center items-start flex-wrap gap-6 w-[99%] mx-auto overflow-y-auto pb-10 pt-8">
        {notes.length > 0 ? (
          notes.map((note: Note) => <NoteCard key={note._id} note={note} />)
        ) : (
          <NoNotes />
        )}
      </div>
    </div>
  );
};

export default NotesPage;
