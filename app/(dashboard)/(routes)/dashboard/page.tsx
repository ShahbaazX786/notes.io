"use client";

import CustomChart from "@/components/customShadcn/customChart";
import { chartConfig } from "@/lib/const/constants";
import { useNoteStore } from "@/lib/store/noteStore";
import {
  filterNotesByStatus,
  getNotesCreatedByDate,
  getTagFrequency,
} from "@/lib/utils";
import DashboardInfoCard from "../../components/dashboardInfoCard";

const DashboardPage = () => {
  const { notes } = useNoteStore();
  const { completedNotes, pendingNotes, newNotes, noteMetrics } =
    filterNotesByStatus(notes);

  const pieData = [
    { name: "Completed", value: completedNotes.length },
    { name: "Pending", value: pendingNotes.length },
    { name: "New", value: newNotes.length },
  ];

  const lineChartData = getNotesCreatedByDate(notes);
  const barChartData = getTagFrequency(notes);

  return (
    <>
      {/* info cards */}
      <section className="w-full flex flex-col justify-between items-center p-6">
        <h1 className="text-3xl font-bold my-4">
          A Quick Glance over note metrics{" "}
        </h1>
        <div className="w-full h-full flex justify-center items-center gap-6  ">
          <DashboardInfoCard
            title={"Completed"}
            icon={"/images/done.svg"}
            metric1={completedNotes.length}
            metric2={noteMetrics.totalNotes}
          />
          <DashboardInfoCard
            title={"Pending"}
            icon={"/images/pending.svg"}
            metric1={pendingNotes.length}
            metric2={noteMetrics.totalNotes}
          />
          <DashboardInfoCard
            title={"New"}
            icon={"/images/new.svg"}
            metric1={newNotes.length}
            metric2={noteMetrics.totalNotes}
          />
        </div>
      </section>

      {/* info charts */}
      <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <section className="w-full h-fit relative flex flex-col justify-start items-center border rounded-lg shadow-md hover:shadow-xl py-4 gap-8">
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

        <section className="w-full h-fit flex flex-col justify-start items-center gap-8 border rounded-lg shadow-md hover:shadow-xl py-4">
          <h2 className="text-center font-bold">Notes Trend</h2>
          <CustomChart variant="line" data={lineChartData} />
        </section>

        <section className="w-full h-fit flex flex-col justify-start items-center gap-8 border rounded-lg shadow-md hover:shadow-xl py-4">
          <h2 className="text-center font-bold">Popular Tags</h2>
          <CustomChart variant="bar" data={barChartData} />
        </section>
      </section>

      {/* latest notes table. */}
      <section className="w-full flex flex-col justify-between items-center p-6"></section>
    </>
  );
};

export default DashboardPage;
