"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LeaveStatusData {
  status: string
  count: number
  color: string
  darkColor?: string
}

interface LeaveStatusVisualizationProps {
  data: LeaveStatusData[]
  total: number
}

export function LeaveStatusVisualization({ data, total }: LeaveStatusVisualizationProps) {
  // Calculate total width for the progress bar
  const totalWidth = data.reduce((acc, item) => acc + item.count, 0);
  
  return (
    <Card className="lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium">Leave status</CardTitle>
        <Link href="/leaves" className="text-sm text-primary hover:underline">
          View all leaves
        </Link>
      </CardHeader>
      
      <CardContent>
        {/* Progress bar */}
        <div className="mt-2 mb-6 w-full rounded-full flex gap-0.5" style={{ height: "8px" }}>
          {data.map((item, index) => {
            // Calculate percentage but ensure the total adds up to 100%
            let percentage = (item.count / totalWidth) * 100;
            
            // For the last item, adjust to ensure we reach 100%
            if (index === data.length - 1) {
              const totalSoFar = data.slice(0, index).reduce((acc, curr) => acc + (curr.count / totalWidth) * 100, 0);
              percentage = 100 - totalSoFar;
            }
            
            return (
              <div
                key={index}
                className="h-full rounded-full"
                style={{ 
                  width: `${percentage}%`, 
                  backgroundColor: `var(--color-${index})`,
                }}
                data-color={item.color}
                data-dark-color={item.darkColor || item.color}
              />
            );
          })}
        </div>
        
        {/* Status cards */}
        <div className="grid grid-cols-5 gap-0 mt-6 w-full px-0">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="py-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ 
                    backgroundColor: `var(--color-${index})`,
                  }}
                  data-color={item.color}
                  data-dark-color={item.darkColor || item.color}
                />
                <span className="font-medium">{item.status}</span>
              </div>
              <div className="flex items-baseline">
                <span 
                  className="text-4xl font-bold" 
                  style={{ 
                    color: `var(--color-${index})`,
                  }}
                  data-color={item.color}
                  data-dark-color={item.darkColor || item.color}
                >
                  {item.count}
                </span>
                <span className="ml-2 text-muted-foreground">leaves</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      
      <style jsx>{`
        :global(.dark) [data-color] {
          --color-0: ${data[0]?.darkColor || data[0]?.color};
          --color-1: ${data[1]?.darkColor || data[1]?.color};
          --color-2: ${data[2]?.darkColor || data[2]?.color};
          --color-3: ${data[3]?.darkColor || data[3]?.color};
          --color-4: ${data[4]?.darkColor || data[4]?.color};
        }
        
        [data-color] {
          --color-0: ${data[0]?.color};
          --color-1: ${data[1]?.color};
          --color-2: ${data[2]?.color};
          --color-3: ${data[3]?.color};
          --color-4: ${data[4]?.color};
        }
      `}</style>
    </Card>
  )
} 