"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', clicks: 4000, impressions: 2400, position: 1 },
//   { name: 'Feb', clicks: 3000, impressions: 1398, position: 2 },
//   { name: 'Mar', clicks: 2000, impressions: 9800, position: 2.5 },
//   { name: 'Apr', clicks: 2780, impressions: 3908, position: 1.8 },
//   { name: 'May', clicks: 1890, impressions: 4800, position: 3 },
//   { name: 'Jun', clicks: 2390, impressions: 3800, position: 2.2 },
// ];

interface ClicksImpressionsChartProps {
  data: { name: string; clicks: number; position: number }[];
}


const ClicksImpressionsChart: React.FC<ClicksImpressionsChartProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="hsl(var(--chart-1))" />
        <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="hsl(var(--chart-2))" />
        <Line yAxisId="right" type="monotone" dataKey="position" stroke="hsl(var(--chart-3))" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ClicksImpressionsChart;