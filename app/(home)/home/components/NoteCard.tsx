
"use client";

import { CardBody, CardContainer, CardItem } from "@/components/3d_card";
import { NoteCardProps } from "@/const/types";

const NoteCard = ({ note }: NoteCardProps) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {note.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {note.description}
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default NoteCard;