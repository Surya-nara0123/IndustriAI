"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { esgBreakdown } from "@/lib/mockData"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function EsgScoreChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={esgBreakdown}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {esgBreakdown.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

