"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", clicks: 1000, impressions: 50000 },
  { name: "Feb", clicks: 1200, impressions: 55000 },
  { name: "Mar", clicks: 1500, impressions: 60000 },
  { name: "Apr", clicks: 1800, impressions: 65000 },
  { name: "May", clicks: 2000, impressions: 70000 },
  { name: "Jun", clicks: 2200, impressions: 75000 },
  { name: "Jul", clicks: 2500, impressions: 80000 },
]

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis yAxisId="left" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#8884d8" strokeWidth={2} />
        <Line yAxisId="right" type="monotone" dataKey="impressions" stroke="#82ca9d" strokeWidth={2} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}