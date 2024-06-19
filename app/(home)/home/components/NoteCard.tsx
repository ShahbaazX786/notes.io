"use client";

import { CardBody, CardContainer, CardItem } from "@/components/aceternity/3d_card";
import { NoteCardProps } from "@/lib/const/types";

const NoteCard = ({ note }: NoteCardProps) => {
    return (
        <CardContainer className="inter-var flex flex-row justify-center items-center my-4 drop-shadow-lg">
            <CardBody className="bg-gray-50 relative group/card h-auto dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-8 border ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-black dark:text-white"
                >
                    {note.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-800 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {note.description}
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default NoteCard;