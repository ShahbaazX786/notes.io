import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Note } from "./const/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatDate = (isoString: string | Date) => {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const formatTime = (timeString: string | Date) => {
  const date = new Date(timeString);
  return date
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
};

const getCompletedNotes = (notes: Note[]) => {
  return notes.filter((n) => n.status === "completed");
};

export { formatDate, formatTime }; // General Utility functions.
export { getCompletedNotes }; // Notes filtering Utility functions.
