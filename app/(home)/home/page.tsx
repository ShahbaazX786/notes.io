"use client";

import useNotes from "@/lib/hooks/useNotes";
import CreateNote from "./components/CreateNote";
import HomeHeader from "./components/homeHeader";
import NoteCard from "./components/NoteCard";

const HomeComponent = () => {
  const { notesQuery, deleteNoteMutation } = useNotes();

  if (notesQuery.isLoading) return <p>Loading...</p>;
  if (notesQuery.isError) return <p>Error fetching notes.</p>;

  const handleDelete = (id: string) => {
    deleteNoteMutation.mutate(id);
  };

  return (
    <div className="w-full h-full flex justify-start items-start flex-col relative">
      <HomeHeader />
      <div className="absolute bottom-0 right-0">
        <CreateNote />
      </div>
      <div className="flex justify-center items-start flex-wrap gap-6 w-[99%] mx-auto overflow-y-auto pb-10 pt-8">
        {notesQuery.data?.data?.map((note: any) => (
          <NoteCard key={note._id} note={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
