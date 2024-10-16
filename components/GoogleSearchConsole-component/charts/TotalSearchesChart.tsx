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

const data = [
  { name: "Jan", searches: 4000 },
  { name: "Feb", searches: 3000 },
  { name: "Mar", searches: 2000 },
  { name: "Apr", searches: 2780 },
  { name: "May", searches: 1890 },
  { name: "Jun", searches: 2390 },
];

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

const TotalSearchesChart: React.FC = () => {
  return (
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
  );
};

export default TotalSearchesChart;
