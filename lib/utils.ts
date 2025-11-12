import { Note } from "@/lib/const/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

const filterNotesByStatus = (notes: Note[]) => {
  let completedNotes: Note[] = [];
  let pendingNotes: Note[] = [];
  let newNotes: Note[] = [];
  notes.forEach((note: Note) => {
    switch (note?.status) {
      case "completed":
        completedNotes = [...completedNotes, note];
        break;
      case "pending":
        pendingNotes = [...pendingNotes, note];
        break;
      default:
        newNotes = [...newNotes, note];
        break;
    }
  });

  const noteMetrics = getNoteMetrics(
    notes.length,
    completedNotes.length,
    pendingNotes.length,
    newNotes.length
  );

  return { noteMetrics, completedNotes, pendingNotes, newNotes };
};

const getNoteMetrics = (
  total: number,
  completed: number,
  pending: number,
  latest: number
) => {
  let noteMetrics = {
    totalNotes: 0,
    completionRate: 0,
    pendingRate: 0,
    newRate: 0,
  };

  noteMetrics.totalNotes = total;
  noteMetrics.completionRate = calculatePercentage(completed, total);
  noteMetrics.pendingRate = calculatePercentage(latest, total);
  noteMetrics.newRate = calculatePercentage(pending, total);

  return noteMetrics;
};

const calculatePercentage = (current: number, total: number) => {
  return Number(Math.floor((current / total) * 100).toFixed(2));
};

export { formatDate, formatTime }; // General Utility functions.
export { filterNotesByStatus }; // Notes filtering Utility functions.
