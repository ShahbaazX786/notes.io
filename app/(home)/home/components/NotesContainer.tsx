'use client';

import { Notes } from "@/lib/const/constants";
import { motion } from "framer-motion";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

const NotesContainer = () => {
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
                {Notes.map((note) => (
                    <motion.div key={note.id} className="box" initial={{ opacity: 0, scale: 0.5 }}
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
                        }}>
                        <NoteCard note={note} />
                    </motion.div>
                ))}
            </div>
            <div className="fixed bottom-8 right-8">
                <CreateNote />
            </div>
        </div>
    )
}

export default NotesContainer;