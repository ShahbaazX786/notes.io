import React from "react"
import NotesContainer from "./components/NotesContainer";

const HomeComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NotesContainer />
        </div>
    )
}

export default HomeComponent;