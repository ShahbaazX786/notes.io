import { Notes } from "@/const/constants";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

const NotesContainer = () => {
    return (
        <div className="container relative">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {Notes.map((note)=>(
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