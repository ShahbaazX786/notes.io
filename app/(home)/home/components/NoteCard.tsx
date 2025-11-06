"use client";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d_card";
import { NoteCardProps } from "@/lib/const/types";
import NoteCardOptions from "./NoteCardOptions";
import { SlCalender } from "react-icons/sl";

import { formatDate, formatTime } from "@/lib/utils";

const NoteCard = ({ note }: NoteCardProps | any) => {
  return (
    <CardContainer className="inter-var flex flex-row justify-center items-center drop-shadow-lg relative group">
      <CardBody className="bg-gray-50 relative group/card h-auto dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-8 border ">
        <CardItem
          translateZ="50"
          className="absolute text-sm text-gray dark:text-white right-5 top-5"
        >
          <div className="flex justify-center items-center gap-2 ">
            <SlCalender />{" "}
            <p className="text-sm">
              {formatDate(note.createdAt) + " | " + formatTime(note.createdAt)}
            </p>
          </div>
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white first-letter:capitalize"
        >
          {note.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-800 text-sm max-w-sm mt-2 dark:text-neutral-300 first-letter:capitalize"
        >
          {note.description}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-800 text-sm max-w-sm mt-2 dark:text-neutral-300 first-letter:capitalize"
        >
          {"Tags: " + note.tags}
        </CardItem>
      </CardBody>
      <div className="absolute top-0 right-0  h-full group-hover:flex hidden group-hover:transition-all group-hover:ease-linear group-hover:duration-500 group-hover:delay-150">
        <NoteCardOptions uniqueId={note._id} />
      </div>
    </CardContainer>
  );
};

export default NoteCard;
