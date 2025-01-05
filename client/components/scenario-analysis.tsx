"use client"

import * as React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const initialData = [
  {
    name: "Scenario A",
    "ESG Score": 65,
    "ROI (%)": 10,
  },
  {
    name: "Scenario B",
    "ESG Score": 75,
    "ROI (%)": 8,
  },
  {
    name: "Scenario C",
    "ESG Score": 85,
    "ROI (%)": 6,
  },
]

export function ScenarioAnalysis() {
  const [data, setData] = React.useState(initialData)

  const handleAddScenario = () => {
    const newScenario = {
      name: `Scenario ${String.fromCharCode(65 + data.length)}`,
      "ESG Score": Math.floor(Math.random() * 30) + 60, // Random score between 60-90
      "ROI (%)": Math.floor(Math.random() * 10) + 5, // Random ROI between 5-15%
    }
    setData([...data, newScenario])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scenario Analysis</CardTitle>
        <CardDescription>
          Compare different investment scenarios based on ESG Score and ROI.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 gap-4">
              {data.map((scenario, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{scenario.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-2 items-center gap-4">
                        <Label htmlFor={`esg-score-${index}`}>ESG Score</Label>
                        <Input
                          id={`esg-score-${index}`}
                          type="number"
                          value={scenario["ESG Score"]}
                          onChange={(e) => {
                            const newData = [...data]
                            newData[index]["ESG Score"] = parseInt(e.target.value)
                            setData(newData)
                          }}
                        />
                      </div>
                      <div className="grid grid-cols-2 items-center gap-4">
                        <Label htmlFor={`roi-${index}`}>ROI (%)</Label>
                        <Input
                          id={`roi-${index}`}
                          type="number"
                          value={scenario["ROI (%)"]}
                          onChange={(e) => {
                            const newData = [...data]
                            newData[index]["ROI (%)"] = parseInt(e.target.value)
                            setData(newData)
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Button onClick={handleAddScenario}>Add Scenario</Button>
          <div className="grid gap-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Bar yAxisId="left" dataKey="ESG Score" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="ROI (%)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

