"use client";

import CustomChart from "@/components/customShadcn/customChart";
import { useNoteStore } from "@/lib/store/noteStore";
import { filterNotesByStatus, getNotesCreatedByDate } from "@/lib/utils";
import React from "react";

const DashboardPage = () => {
  const { notes } = useNoteStore();
  const { completedNotes, pendingNotes, newNotes } = filterNotesByStatus(notes);

  const pieData = [
    { name: "Completed", value: completedNotes.length },
    { name: "Pending", value: pendingNotes.length },
    { name: "New", value: newNotes.length },
  ];

  const chartData = getNotesCreatedByDate(notes);

  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 border border-black">
      <section className="w-full h-fit flex flex-col justify-start items-center gap-8 border rounded-lg hover:shadow-lg py-4">
        <h2 className="text-center font-bold">Notes by completion status</h2>
        <CustomChart variant="pie" data={pieData} />
      </section>

      <section className="w-full h-fit flex flex-col justify-start items-center gap-8 border rounded-lg hover:shadow-lg py-4">
        <h2 className="text-center font-bold">Notes created over time...</h2>
        <CustomChart variant="line" data={chartData} />
      </section>

      <section className="w-full h-fit flex flex-col justify-start items-center gap-8 border rounded-lg hover:shadow-lg py-4">
        <h2 className="text-center font-bold">Notes by popular tags</h2>
        <CustomChart variant="bar" data={chartData} />
      </section>
    </section>
  );
};

export default DashboardPage;
