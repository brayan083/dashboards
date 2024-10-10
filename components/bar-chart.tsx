"use client"

import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Organic", value: 45 },
  { name: "Direct", value: 30 },
  { name: "Referral", value: 15 },
  { name: "Social", value: 10 },
]

export function CustomBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsBarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
        <Bar dataKey="value" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Tooltip />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}