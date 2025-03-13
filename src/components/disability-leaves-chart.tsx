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
    color: "hsl(var(--primary))",
  },
  ltd: {
    label: "Long-Term Disability",
    color: "hsl(var(--secondary) / 0.8)",
  },
} satisfies ChartConfig

export function DisabilityLeavesChart() {
  // Calculate total leaves for current and previous month
  const currentMonth = new Date().getMonth()
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1
  
  const currentMonthTotal = leavesData[currentMonth].std + leavesData[currentMonth].ltd
  const previousMonthTotal = leavesData[previousMonth].std + leavesData[previousMonth].ltd
  
  const percentageChange = ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100
  const isIncreasing = percentageChange > 0
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Disability Leaves by Month</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leavesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="std"
                stackId="a"
                fill="var(--color-std)"
                radius={[0, 0, 4, 4]}
                name="std"
              />
              <Bar
                dataKey="ltd"
                stackId="a"
                fill="var(--color-ltd)"
                radius={[4, 4, 0, 0]}
                name="ltd"
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