"use client"

import * as React from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Mock data for benefits usage
const benefitsData = [
  { benefit: "dental", enrollments: 824, fill: "hsl(221 83% 53%)" }, // Blue-600
  { benefit: "vision", enrollments: 765, fill: "hsl(201 94% 37%)" }, // Cyan-700
  { benefit: "std", enrollments: 612, fill: "hsl(262 83% 58%)" },    // Purple-600
  { benefit: "ltd", enrollments: 487, fill: "hsl(330 81% 60%)" },    // Pink-500
]

// Chart configuration with color overrides
const chartConfig = {
  dental: {
    label: "Dental",
    color: "hsl(221 83% 53%)", // Blue-600
  },
  vision: {
    label: "Vision",
    color: "hsl(201 94% 37%)", // Cyan-700
  },
  std: {
    label: "Short-term disability",
    color: "hsl(262 83% 58%)", // Purple-600
  },
  ltd: {
    label: "Long-term disability",
    color: "hsl(330 81% 60%)", // Pink-500
  },
} satisfies ChartConfig

export function BenefitsUsageChart() {
  const totalEnrollments = React.useMemo(() => {
    return benefitsData.reduce((acc, curr) => acc + curr.enrollments, 0)
  }, [])

  // Calculate year-over-year change (mock data)
  const previousYearTotal = 2475; // Previous year total enrollments
  const percentageChange = ((totalEnrollments - previousYearTotal) / previousYearTotal) * 100;
  const isIncreasing = percentageChange > 0;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Benefits Usage</CardTitle>
        <CardDescription>Employee Enrollments 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[320px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <ChartTooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0];
                    // Ensure data name is a valid key in the chartConfig
                    const benefitType = data.name as keyof typeof chartConfig;
                    const value = data.value as number;
                    
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-sm">
                            <div
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: data.payload?.fill || chartConfig[benefitType]?.color }}
                            />
                            <span className="font-medium">
                              {chartConfig[benefitType]?.label || benefitType}:
                            </span>
                            <span className="font-bold">{value}</span>
                            <span className="text-muted-foreground text-xs">
                              ({((value / totalEnrollments) * 100).toFixed(1)}%)
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Pie
                data={benefitsData}
                dataKey="enrollments"
                nameKey="benefit"
                innerRadius={80}
                outerRadius={120}
                strokeWidth={2}
                paddingAngle={2}
                fill="#8884d8"
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {totalEnrollments.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 28}
                            className="fill-muted-foreground text-base"
                          >
                            Total Enrolled
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {isIncreasing ? (
            <>
              Trending up by {Math.abs(percentageChange).toFixed(1)}% year-over-year <TrendingUp className="h-4 w-4 text-emerald-500" />
            </>
          ) : (
            <>
              Trending down by {Math.abs(percentageChange).toFixed(1)}% year-over-year <TrendingDown className="h-4 w-4 text-rose-500" />
            </>
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing current benefit enrollments across all plans
        </div>
      </CardFooter>
    </Card>
  )
} 