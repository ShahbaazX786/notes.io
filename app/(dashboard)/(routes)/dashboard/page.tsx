"use client";

import useNotes from "@/lib/hooks/useNotes";
import { Note } from "@/lib/const/types";
import HomeHeader from "../../components/homeHeader";
import CreateNote from "../../components/CreateNote";
import NoteCard from "../../components/NoteCard";
import NoNotes from "../../components/NoNotes";

const HomePage = () => {
  const { notesQuery } = useNotes();

  if (notesQuery.isLoading) return <p>Loading...</p>;
  if (notesQuery.isError) return <p>Error fetching notes.</p>;

  return (
    <div className="w-full h-full flex justify-start items-start flex-col relative">
      <HomeHeader />
      <div className="absolute bottom-0 right-0">
        <CreateNote />
      </div>
      <div className="flex justify-center items-start flex-wrap gap-6 w-[99%] mx-auto overflow-y-auto pb-10 pt-8">
        {notesQuery.data?.data.length > 0 ? (
          notesQuery.data?.data?.map((note: Note) => (
            <NoteCard key={note._id} note={note} />
          ))
        ) : (
          <NoNotes />
        )}
      </div>
    </div>
  );
};

export default HomePage;
