'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

const NotesContainer = () => {

    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetchAllNotes();
    }, [])

    const fetchAllNotes = async () => {
        const res = await fetch('http://localhost:3000/notes');
        const Notes = await res.json();
        if (Notes.success) {
            setNotes(Notes.data);
        }
        console.log(Notes);
    }

    return (
        <div className="container flex flex-col justify-center items-center my-8">
            <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "tween",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }} className="box mb-4 text-4xl font-bold"
            >Notes
            </motion.h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
                {notes && notes.length > 0 ? (
                    notes.map((note) => (
                        <motion.div
                            key={note._id}
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                        >
                            <NoteCard note={note} />
                        </motion.div>
                    ))
                ) : (
                    <h3 className="text-center">No Notes Found!</h3>
                )}
            </div>
            <div className="fixed bottom-8 right-8">
                <CreateNote />
            </div>
        </div>
    )
}

export default NotesContainer;