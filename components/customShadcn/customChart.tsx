import { chartConfig } from "@/lib/const/constants";
import { Bar, BarChart, Cell, Pie, PieChart, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Tooltip } from "../ui/tooltip";

const CustomChart = ({ variant, data }: { variant: string; data: any }) => {
  return (
    <>
      {variant === chartConfig.VARIANT.BAR && <CustomBarChart data={data} />}
      {variant === chartConfig.VARIANT.PIE && <CustomPieChart data={data} />}
    </>
  );
};

export const CustomBarChart = ({ data }: { data: any }) => {
  return (
    <ChartContainer config={chartConfig.CONFIG} className={"border, min-h-52"}>
      <BarChart width={250} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};
export const CustomPieChart = ({ data }: { data: any }) => {
  return (
    <ChartContainer config={chartConfig.CONFIG} className={"border, min-h-52"}>
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={80}
          label={(item) => `${item.name}: ${item.value}`}
          dataKey="value"
        >
          {data.map((_item: any, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={chartConfig.COLORS[index % chartConfig.COLORS.length]}
            />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </PieChart>
    </ChartContainer>
  );
};

export default CustomChart;
