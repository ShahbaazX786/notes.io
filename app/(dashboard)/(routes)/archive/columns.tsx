"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Note } from "@/lib/const/types";
import { formatDate, formatTime } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { FaSort } from "react-icons/fa";

// This type is used to define the shape of our data.
// I can use a Zod schema here if you want, but first lets make it simple then think about it later.

export const columns: ColumnDef<Note>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => sortingFunc("Title", column),
  },
  {
    accessorKey: "description",
    header: ({ column }) => sortingFunc("Description", column),
  },
  {
    accessorKey: "status",
    header: ({ column }) => sortingFunc("Status", column),
    cell: ({ row }) => {
      const text = row.original.status;
      return text ? (
        <p>{text?.charAt(0).toUpperCase() + "" + text?.slice(1)}</p>
      ) : (
        ""
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => sortingFunc("Date Added", column),
    cell: ({ row }) => (
      <p>
        {formatDate(row.original.createdAt) +
          " " +
          formatTime(row.original.createdAt).toUpperCase()}
      </p>
    ),
  },
];

export const sortingFunc = (title: string, column: any) => {
  return (
    <div className="flex flex-row justify-start items-center group">
      <p>{title}</p>
      <Button
        className="invisible group-hover:visible"
        variant="link"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <FaSort className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
