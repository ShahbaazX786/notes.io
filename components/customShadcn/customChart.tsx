import { chartConfig } from "@/lib/const/constants";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const CustomChart = ({ variant, data }: { variant: string; data: any }) => {
  return (
    <>
      {variant === chartConfig.VARIANT.BAR && <CustomBarChart data={data} />}
      {variant === chartConfig.VARIANT.PIE && <CustomPieChart data={data} />}
      {variant === chartConfig.VARIANT.LINE && <CustomLineChart data={data} />}
    </>
  );
};

export const CustomBarChart = ({ data }: { data: any }) => {
  return (
    <ChartContainer
      config={chartConfig.CONFIG}
      className={"min-h-64 w-full h-full"}
    >
      <BarChart width={250} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Bar dataKey="value" fill="#8884d8" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

export const CustomLineChart = ({ data }: { data: any }) => {
  return (
    <ChartContainer
      config={chartConfig.CONFIG}
      className={"min-h-64 w-full h-full"}
    >
      <LineChart width={250} height={200} data={data}>
        <XAxis
          dataKey="name"
          label={{ value: "Date", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          allowDecimals={false}
          label={{
            value: "Number Of Notes created",
            angle: -90,
            position: "outsideLeft",
          }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line dataKey="value" fill="#8884d8" />
      </LineChart>
    </ChartContainer>
  );
};

export const CustomPieChart = ({ data }: { data: any }) => {
  return (
    <ChartContainer
      config={chartConfig.CONFIG}
      className={"min-h-64 w-full h-full"}
    >
      <PieChart
        width={250}
        height={200}
        className="w-full max-w-[500px] max-h-[80vh] aspect-square"
      >
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={70}
          cornerRadius={50}
          dataKey="value"
          paddingAngle={5}
        >
          {data.map((_item: any, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={chartConfig.COLORS[index % chartConfig.COLORS.length]}
            />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
      </PieChart>
    </ChartContainer>
  );
};

export default CustomChart;
