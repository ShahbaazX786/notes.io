"use client";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d_card";
import { NoteCardProps } from "@/lib/const/types";
import { SlCalender } from "react-icons/sl";
import NoteCardOptions from "./NoteCardOptions";
import { cn, formatDate, formatTime } from "@/lib/utils";

const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <CardContainer className="inter-var flex flex-row justify-center items-center drop-shadow-lg relative group w-full h-full">
      <div
        className={cn(
          "absolute top-[2px] left-[2px] z-10 rounded-lg drop-shadow-lg px-1 capitalize text-sm cursor-default dark:shadow-white dark:shadow-sm",
          note.status === "completed"
            ? "bg-green-500 text-white font-bold"
            : "bg-red-400 text-black font-bold"
        )}
      >
        <p>{note?.status}</p>
      </div>
      <CardBody className="bg-gray-50 relative group/card h-auto dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-8 border max-h-40">
        <CardItem
          translateZ="50"
          className="absolute text-sm text-gray dark:text-white right-5 top-5"
        >
          <div className="flex justify-center items-center gap-2 rounded-lg border-2 px-2 bg-gray-100 dark:bg-gray-900">
            <SlCalender />{" "}
            <p className="text-sm line-clamp-1 ">
              {formatDate(note?.createdAt) +
                " | " +
                formatTime(note?.createdAt)}
            </p>
          </div>
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white first-letter:capitalize line-clamp-1 max-w-72 text-ellipsis mt-2"
        >
          {note.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-800 text-sm max-w-xs mt-2 dark:text-neutral-300 first-letter:capitalize line-clamp-2"
        >
          {note.description}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-800 text-sm max-w-sm mt-2 dark:text-neutral-300 first-letter:capitalize line-clamp-1"
        >
          {"Tags: " + note.tags}
        </CardItem>
      </CardBody>
      <div className="absolute top-0 right-0  h-full group-hover:flex hidden group-hover:transition-all group-hover:ease-linear group-hover:duration-500 group-hover:delay-150">
        <NoteCardOptions note={note} />
      </div>
    </CardContainer>
  );
};

export default NoteCard;
