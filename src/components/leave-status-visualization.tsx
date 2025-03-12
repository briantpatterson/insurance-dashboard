"use client"

import Link from "next/link"

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
    <div className="rounded-lg border bg-card p-6 shadow-sm lg:col-span-2">
      <div className="flex justify-between items-start w-full">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Leave status</h3>
        <Link href="/leaves" className="text-blue-600 hover:underline dark:text-blue-400">
          View all leaves
        </Link>
      </div>
      
      {/* Progress bar */}
      <div className="mt-6 mb-4 w-full rounded-full flex gap-0.5" style={{ height: "8px" }}>
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
              <span className="font-medium text-slate-800 dark:text-slate-100">{item.status}</span>
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
              <span className="ml-2 text-slate-600 dark:text-slate-400">leaves</span>
            </div>
          </div>
        ))}
      </div>
      
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
    </div>
  )
} 