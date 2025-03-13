"use client"

import * as React from "react"
import { Legend, Tooltip } from "recharts"

import { cn } from "@/lib/utils"

export type ChartConfig = Record<
  string,
  {
    label: string
    color: string
  }
>

interface ChartContextValue {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextValue | null>(null)

function useChartContext() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChartContext must be used within a ChartProvider")
  }

  return context
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({
  children,
  config,
  className,
  ...props
}: ChartContainerProps) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn("h-[350px] w-full", className)}
        style={
          {
            "--color-std": config.std?.color,
            "--color-ltd": config.ltd?.color,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
}

interface ChartLegendContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChartLegendContent({
  className,
  ...props
}: ChartLegendContentProps) {
  const { config } = useChartContext()

  return (
    <div
      className={cn("flex items-center justify-center gap-8", className)}
      {...props}
    >
      {Object.entries(config).map(([key, value]) => (
        <div key={key} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: value.color }}
          />
          <span className="text-sm text-muted-foreground">{value.label}</span>
        </div>
      ))}
    </div>
  )
}

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  payload?: Array<{
    name: string
    value: number
    payload: Record<string, any>
  }>
  hideLabel?: boolean
}

export function ChartTooltipContent({
  className,
  payload,
  label,
  hideLabel = false,
  ...props
}: ChartTooltipContentProps) {
  const { config } = useChartContext()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-2 shadow-sm",
        className
      )}
      {...props}
    >
      {!hideLabel && (
        <div className="mb-1 text-sm font-medium text-foreground">{label}</div>
      )}
      <div className="flex flex-col gap-0.5">
        {payload.map((item, index) => {
          const { name, value } = item
          const itemConfig = config[name]

          if (!itemConfig) {
            return null
          }

          return (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <div
                  className="h-2 w-2 rounded-sm"
                  style={{ backgroundColor: itemConfig.color }}
                />
                <span>{itemConfig.label}</span>
              </div>
              <div className="text-sm font-medium text-foreground">{value}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Legend as ChartLegend, Tooltip as ChartTooltip } 