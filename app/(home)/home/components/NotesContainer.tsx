import { Notes } from "@/const/constants";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

const NotesContainer = () => {
    return (
        <div className="container relative flex flex-col justify-center items-center">
            <h2 className="my-5 text-4xl font-bold">Notes</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
                {Notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
            <div className="absolute bottom-5 right-5">
                <CreateNote />
            </div>
        </div>
    )
}

export default NotesContainer;