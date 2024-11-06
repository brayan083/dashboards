"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Define la interfaz para los props
interface TotalSearchesChartProps {
  data: { name: string; searches: number }[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 border border-gray-300">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const TotalSearchesChart: React.FC<TotalSearchesChartProps> = ({ data }) => {

  return (
    <section>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="searches" fill="hsl(var(--chart-1))">
            <LabelList dataKey="searches" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default TotalSearchesChart;
