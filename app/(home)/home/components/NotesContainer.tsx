import { Notes } from "@/lib/const/constants";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

const NotesContainer = () => {
    return (
        <div className="container flex flex-col justify-center items-center my-8">
            <h2 className="mb-4 text-4xl font-bold">Notes</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
                {Notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
            <div className="fixed bottom-8 right-8">
                <CreateNote />
            </div>
        </div>
    )
}

export default NotesContainer;