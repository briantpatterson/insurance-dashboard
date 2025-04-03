"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"

// Mock data for paid claims by benefit type over time (last 12 months)
const chartData = [
  { month: "2023-07", dental: 32540, std: 18750, ltd: 12400 },
  { month: "2023-08", dental: 29870, std: 22150, ltd: 14300 },
  { month: "2023-09", dental: 34250, std: 19600, ltd: 13800 },
  { month: "2023-10", dental: 31780, std: 23400, ltd: 12900 },
  { month: "2023-11", dental: 27650, std: 25800, ltd: 15700 },
  { month: "2023-12", dental: 38920, std: 21300, ltd: 14200 },
  { month: "2024-01", dental: 42650, std: 19700, ltd: 13600 },
  { month: "2024-02", dental: 36780, std: 24500, ltd: 16800 },
  { month: "2024-03", dental: 39450, std: 22300, ltd: 15200 },
  { month: "2024-04", dental: 41230, std: 20600, ltd: 14700 },
  { month: "2024-05", dental: 44870, std: 23400, ltd: 16300 },
  { month: "2024-06", dental: 47250, std: 21800, ltd: 15500 }
]

const chartConfig = {
  dental: {
    label: "Dental",
    color: "hsl(221 83% 53%)", // Blue-600
  },
  std: {
    label: "Short-term Disability",
    color: "hsl(262 83% 58%)", // Purple-600
  },
  ltd: {
    label: "Long-term Disability",
    color: "hsl(330 81% 60%)", // Pink-600
  },
} satisfies ChartConfig

export function ClaimsUsageChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("dental")

  const total = React.useMemo(
    () => ({
      dental: chartData.reduce((acc, curr) => acc + curr.dental, 0),
      std: chartData.reduce((acc, curr) => acc + curr.std, 0),
      ltd: chartData.reduce((acc, curr) => acc + curr.ltd, 0),
    }),
    []
  )

  // Format currency for display
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Benefits Usage</CardTitle>
          <CardDescription>
            Total paid claims by benefit type over the past 12 months
          </CardDescription>
        </div>
        <div className="flex flex-wrap">
          {(Object.keys(chartConfig) as Array<keyof typeof chartConfig>).map((chart) => {
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-6 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-2xl">
                  {formatCurrency(total[chart])}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 py-6 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                  })
                }}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
              />
              <ChartTooltip 
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const date = new Date(label)
                    const formattedLabel = date.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                    
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="mb-1 text-sm font-medium text-foreground">{formattedLabel}</div>
                        <div className="flex flex-col gap-1">
                          {payload.map((entry, index) => (
                            <div key={index} className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <div
                                  className="h-2 w-2 rounded-sm"
                                  style={{ backgroundColor: chartConfig[entry.name as keyof typeof chartConfig]?.color }}
                                />
                                <span>{chartConfig[entry.name as keyof typeof chartConfig]?.label}</span>
                              </div>
                              <div className="text-sm font-medium text-foreground">
                                {formatCurrency(entry.value as number)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar 
                dataKey={activeChart} 
                fill={chartConfig[activeChart].color}
                radius={[4, 4, 0, 0]}
                isAnimationActive={true}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
} 