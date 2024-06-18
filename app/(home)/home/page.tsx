import React from "react"

const HomeComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default HomeComponent;