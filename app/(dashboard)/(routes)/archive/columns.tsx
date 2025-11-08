"use client";

import { Note } from "@/lib/const/types";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// I can use a Zod schema here if you want, but first lets make it simple then think about it later.

export const columns: ColumnDef<Note>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "dateAdded",
    header: "Date Added",
  },
];
