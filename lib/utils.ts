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

const getNotesCreatedByDate = (notes: Note[]) => {
  const filteredNotesByDate = notes.reduce((acc: any, note: Note) => {
    const date = new Date(note.createdAt).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(filteredNotesByDate).map(
    ([date, count]) => ({
      name: date,
      value: count,
    })
  );

  return chartData;
};

const getTagFrequency = (notes: Note[]) => {
  const tagCount: Record<string, number> = {};

  notes.forEach((note: Note) => {
    note?.tags?.forEach((tag: string) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount).map(([name, value]) => ({ name, value }));
};

const getArchivedNotes = (notes: Note[]) => {
  const now = new Date();
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(now.getMonth() - 2);
  return notes.filter((note) => new Date(note.createdAt) < twoMonthsAgo);
};

export { formatDate, formatTime }; // General Utility functions.
export {
  filterNotesByStatus,
  getNotesCreatedByDate,
  getTagFrequency,
  getArchivedNotes,
}; // Notes filtering Utility functions.
