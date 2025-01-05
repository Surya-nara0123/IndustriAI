"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { monthlyPerformance } from "@/lib/mockData";

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={monthlyPerformance}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="esgScore" fill="#adfa1d" radius={[4, 4, 0, 0]} />
        <Bar dataKey="roi" fill="#2563eb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
