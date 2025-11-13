"use client";

import CustomChart from "@/components/customShadcn/customChart";
import { chartConfig } from "@/lib/const/constants";
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
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <section className="w-full h-fit relative flex flex-col justify-start items-center border rounded-lg hover:shadow-lg py-4 gap-8">
        <h2 className="text-center font-bold">Completion Status</h2>
        <CustomChart variant="pie" data={pieData} />
        <div className="absolute bottom-4 left-2 flex flex-col flex-wrap justify-center text-xs">
          {pieData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2 text-xs">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    chartConfig.COLORS[index % chartConfig.COLORS.length],
                }}
              />
              <span>
                {item.name}: {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-fit flex flex-col justify-start items-center gap-8 border rounded-lg hover:shadow-lg py-4">
        <h2 className="text-center font-bold">Notes Trend</h2>
        <CustomChart variant="line" data={chartData} />
      </section>

      <section className="w-full h-fit flex flex-col justify-start items-center gap-8 border rounded-lg hover:shadow-lg py-4">
        <h2 className="text-center font-bold">Popular Tags</h2>
        <CustomChart variant="bar" data={chartData} />
      </section>
    </section>
  );
};

export default DashboardPage;
