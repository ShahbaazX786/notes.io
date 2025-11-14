"use client";

import { Button } from "@/components/ui/button";
import { INITIAL_COUNT, LOAD_MORE_COUNT } from "@/lib/const/constants";
import { Note } from "@/lib/const/types";
import { useNoteStore } from "@/lib/store/noteStore";
import { useState } from "react";
import NoNotes from "../../components/NoNotes";
import NoteCard from "../../components/NoteCard";

const NotesPage = () => {
  const { notes } = useNoteStore();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleNotes = notes.slice(0, visibleCount);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div className="w-full h-full flex justify-start items-start flex-col relative">
      <div className="flex justify-center items-start flex-wrap gap-6 w-[99%] mx-auto overflow-y-auto pb-10 pt-8">
        {notes.length > 0 ? (
          visibleNotes.map((note: Note) => (
            <NoteCard key={note._id} note={note} />
          ))
        ) : (
          <NoNotes />
        )}
      </div>

      {visibleCount <= notes.length ? (
        <Button
          variant={"link"}
          onClick={handleLoadMore}
          className="flex justify-center items-center text-center mx-auto"
        >
          Load More...
        </Button>
      ) : notes.length >= 10 ? (
        <p className="text-center w-fit mx-auto border-2 rounded-lg px-4 shadow-sm">
          You have reached the bottom, Stop Digging!
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default NotesPage;
