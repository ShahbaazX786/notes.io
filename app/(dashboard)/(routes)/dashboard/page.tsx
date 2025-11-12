"use client";

import CustomChart from "@/components/customShadcn/customChart";
import { useNoteStore } from "@/lib/store/noteStore";
import { cn, filterNotesByStatus } from "@/lib/utils";
import React from "react";

const DashboardPage = () => {
  const { notes } = useNoteStore();
  const { completedNotes, pendingNotes, newNotes, noteMetrics } =
    filterNotesByStatus(notes);

  const chartData = [
    { name: "Completed", value: completedNotes.length },
    { name: "Pending", value: pendingNotes.length },
    { name: "New", value: newNotes.length },
  ];

  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <section className="w-full h-full flex flex-col justify-start items-center gap-8">
        <h2 className="text-center font-bold">Status Of Notes</h2>
        <CustomChart variant="pie" data={chartData} />
        <div>
          <p>
            Total Completion:{" "}
            <span
              className={cn(
                noteMetrics.completionRate > 40
                  ? "text-green-500"
                  : "text-red-400"
              )}
            >
              {noteMetrics.completionRate}%
            </span>
          </p>
          <p>
            Total Pending:{" "}
            <span
              className={cn(
                noteMetrics.pendingRate > 30 ? "text-green-500" : "text-red-400"
              )}
            >
              {noteMetrics.pendingRate}%
            </span>
          </p>
        </div>
      </section>

      <section className="w-full h-full flex flex-col justify-start items-center gap-8">
        <h2 className="text-center font-bold">Notes created over time...</h2>
        <CustomChart variant="bar" data={chartData} />
      </section>
    </section>
  );
};

export default DashboardPage;
