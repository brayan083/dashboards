"use client"

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { keyword: 'SEO', organic: 4000, paid: 2400 },
  { keyword: 'Marketing', organic: 3000, paid: 1398 },
  { keyword: 'Analytics', organic: 2000, paid: 9800 },
  { keyword: 'PPC', organic: 2780, paid: 3908 },
  { keyword: 'Content', organic: 1890, paid: 4800 },
  { keyword: 'Social', organic: 2390, paid: 3800 },
  { keyword: 'Email', organic: 3490, paid: 4300 },
];

const Top10SearchesChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="keyword" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="organic" stackId="a" fill="hsl(var(--chart-1))" />
        <Bar dataKey="paid" stackId="a" fill="hsl(var(--chart-2))" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Top10SearchesChart;