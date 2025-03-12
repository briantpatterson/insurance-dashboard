"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { format, isSameDay, isWithinInterval, parseISO } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Leave, LeaveStatus } from "@/data/leaves"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface LeavesCalendarProps {
  leaves: Leave[]
}

export function LeavesCalendar({ leaves }: LeavesCalendarProps) {
  const router = useRouter()
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  
  // Function to get status color
  const getStatusColor = (status: LeaveStatus): string => {
    switch (status) {
      case "approved":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "denied":
        return "bg-red-500"
      case "completed":
        return "bg-blue-500"
      case "cancelled":
        return "bg-slate-400"
      default:
        return "bg-slate-300"
    }
  }
  
  // Function to check if a date has leaves
  const getLeavesForDate = (date: Date) => {
    return leaves.filter((leave) => {
      const startDate = parseISO(leave.startDate)
      const endDate = parseISO(leave.endDate)
      return isWithinInterval(date, { start: startDate, end: endDate })
    })
  }
  
  // Function to render day contents with leave indicators
  const renderDayContents = (day: Date) => {
    const dayLeaves = getLeavesForDate(day)
    
    if (dayLeaves.length === 0) return null
    
    // Group leaves by status
    const statusGroups: Record<LeaveStatus, Leave[]> = {
      approved: [],
      pending: [],
      denied: [],
      completed: [],
      cancelled: []
    }
    
    dayLeaves.forEach(leave => {
      statusGroups[leave.status].push(leave)
    })
    
    return (
      <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-0.5">
        {Object.entries(statusGroups).map(([status, statusLeaves]) => {
          if (statusLeaves.length === 0) return null
          
          return (
            <TooltipProvider key={status}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div 
                    className={`h-1.5 w-1.5 rounded-full ${getStatusColor(status as LeaveStatus)}`}
                    aria-label={`${statusLeaves.length} ${status} leave(s)`}
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center" className="p-0">
                  <div className="p-2">
                    <div className="font-medium">{statusLeaves.length} {status} leave(s)</div>
                    <ul className="mt-1 text-xs">
                      {statusLeaves.slice(0, 3).map(leave => (
                        <li key={leave.id}>{leave.employeeName} - {leave.type}</li>
                      ))}
                      {statusLeaves.length > 3 && (
                        <li className="italic">+{statusLeaves.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </div>
    )
  }
  
  // Handle month navigation
  const handlePreviousMonth = () => {
    const previousMonth = new Date(currentMonth)
    previousMonth.setMonth(previousMonth.getMonth() - 1)
    setCurrentMonth(previousMonth)
  }
  
  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    setCurrentMonth(nextMonth)
  }
  
  // Handle day click to show leaves for that day
  const handleDayClick = (day: Date) => {
    const dayLeaves = getLeavesForDate(day)
    if (dayLeaves.length === 1) {
      // If only one leave, navigate directly to it
      router.push(`/leaves/${dayLeaves[0].id}`)
    } else if (dayLeaves.length > 1) {
      // If multiple leaves, show them in a modal or navigate to a filtered view
      // For now, we'll just log them
      console.log(`${dayLeaves.length} leaves on ${format(day, 'MMM dd, yyyy')}`)
    }
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Leave Calendar</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousMonth}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <div className="font-medium">
            {format(currentMonth, 'MMMM yyyy')}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextMonth}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-4">
          <div className="mb-4 flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Click on a day with leave indicators to view details
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-xs">Approved</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="text-xs">Pending</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-xs">Denied</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-xs">Completed</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-slate-400" />
              <span className="text-xs">Cancelled</span>
            </div>
          </div>
          
          <Calendar
            mode="single"
            month={currentMonth}
            onDayClick={handleDayClick}
            className="rounded-md border"
            modifiers={{
              hasLeave: (date) => getLeavesForDate(date).length > 0
            }}
            modifiersClassNames={{
              hasLeave: "relative"
            }}
            selected={undefined}
            onSelect={() => {}}
          />
          
          {/* Render leave indicators separately */}
          <div className="relative">
            {Array.from({ length: 31 }, (_, i) => {
              const day = new Date(currentMonth)
              day.setDate(i + 1)
              if (day.getMonth() !== currentMonth.getMonth()) return null
              
              const dayLeaves = getLeavesForDate(day)
              if (dayLeaves.length === 0) return null
              
              // Find the position of the day cell
              const dayOfWeek = day.getDay()
              const weekOfMonth = Math.floor((i + (new Date(day.getFullYear(), day.getMonth(), 1).getDay())) / 7)
              
              return (
                <div 
                  key={i}
                  className="absolute"
                  style={{
                    top: `calc(${weekOfMonth * 2.5 + 3.5}rem)`,
                    left: `calc(${dayOfWeek * 14.28}% + 7.14%)`,
                    width: '14.28%',
                    height: '2.5rem',
                    pointerEvents: 'none'
                  }}
                >
                  {renderDayContents(day)}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 