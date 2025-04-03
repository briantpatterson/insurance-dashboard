"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Mock data for disability leaves per month
const leavesData = [
  { month: "January", std: 12, ltd: 5 },
  { month: "February", std: 15, ltd: 6 },
  { month: "March", std: 10, ltd: 7 },
  { month: "April", std: 8, ltd: 6 },
  { month: "May", std: 14, ltd: 5 },
  { month: "June", std: 18, ltd: 4 },
  { month: "July", std: 16, ltd: 5 },
  { month: "August", std: 13, ltd: 7 },
  { month: "September", std: 11, ltd: 8 },
  { month: "October", std: 9, ltd: 7 },
  { month: "November", std: 12, ltd: 6 },
  { month: "December", std: 14, ltd: 5 },
]

// Chart configuration
const chartConfig = {
  std: {
    label: "Short-Term Disability",
    color: "hsl(221 83% 53%)", // Blue-600
  },
  ltd: {
    label: "Long-Term Disability",
    color: "hsl(213 94% 68%)", // Blue-400
  },
} satisfies ChartConfig

export function DisabilityLeavesChart({ hideTitle = false }: { hideTitle?: boolean }) {
  // Calculate total leaves for current and previous month
  const currentMonth = new Date().getMonth()
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1
  
  const currentMonthTotal = leavesData[currentMonth].std + leavesData[currentMonth].ltd
  const previousMonthTotal = leavesData[previousMonth].std + leavesData[previousMonth].ltd
  
  const percentageChange = ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100
  const isIncreasing = percentageChange > 0
  
  return (
    <Card>
      {!hideTitle && (
        <CardHeader>
          <CardTitle>Disability Leaves</CardTitle>
          <CardDescription>January - December 2024</CardDescription>
        </CardHeader>
      )}
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leavesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="flex flex-col gap-1">
                          {payload.map((entry, index) => (
                            <div
                              key={`item-${index}`}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: entry.color }}
                              />
                              <span className="font-medium">
                                {entry.name}:
                              </span>
                              <span className="font-bold">{entry.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                isAnimationActive={true}
              />
              <Bar
                dataKey="std"
                stackId="a"
                fill="hsl(221 83% 53%)"
                radius={[0, 0, 4, 4]}
                name="Short-term disability"
                isAnimationActive={true}
              />
              <Bar
                dataKey="ltd"
                stackId="a"
                fill="hsl(213 94% 68%)"
                radius={[4, 4, 0, 0]}
                name="Long-term disability"
                isAnimationActive={true}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {isIncreasing ? (
            <>
              Trending up by {Math.abs(percentageChange).toFixed(1)}% this month <TrendingUp className="h-4 w-4 text-destructive" />
            </>
          ) : (
            <>
              Trending down by {Math.abs(percentageChange).toFixed(1)}% this month <TrendingDown className="h-4 w-4 text-primary" />
            </>
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total disability leaves for the last 12 months
        </div>
      </CardFooter>
    </Card>
  )
} 