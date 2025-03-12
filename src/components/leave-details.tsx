"use client"

import { format, parseISO, differenceInCalendarDays } from "date-fns"
import { Leave, LeaveStatus, formatDateRange, LeaveDocument } from "@/data/leaves"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { Check, Clock, X, CheckCircle2, XCircle, FileText, Calendar as CalendarIcon, User, MessageSquare } from "lucide-react"

interface LeaveDetailsProps {
  leave: Leave
}

export function LeaveDetails({ leave }: LeaveDetailsProps) {
  const startDate = parseISO(leave.startDate)
  const endDate = parseISO(leave.endDate)
  const durationDays = differenceInCalendarDays(endDate, startDate) + 1
  
  // Get status badge
  const getStatusBadge = (status: LeaveStatus) => {
    switch (status) {
      case "approved":
        return <Badge variant="success" className="flex items-center gap-1">
          <Check className="h-3 w-3" /> Approved
        </Badge>
      case "pending":
        return <Badge variant="warning" className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> Pending
        </Badge>
      case "denied":
        return <Badge variant="destructive" className="flex items-center gap-1">
          <X className="h-3 w-3" /> Denied
        </Badge>
      case "completed":
        return <Badge variant="outline" className="flex items-center gap-1 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
          <CheckCircle2 className="h-3 w-3" /> Completed
        </Badge>
      case "cancelled":
        return <Badge variant="outline" className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800">
          <XCircle className="h-3 w-3" /> Cancelled
        </Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Leave information */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Leave Information</CardTitle>
            <CardDescription>Details about this leave request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Status</span>
                <div>{getStatusBadge(leave.status)}</div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Employee</span>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{leave.employeeName}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Leave Type</span>
                <span>{leave.type}</span>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Duration</span>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{formatDateRange(leave.startDate, leave.endDate)} ({durationDays} {durationDays === 1 ? 'day' : 'days'})</span>
                </div>
              </div>
              
              {leave.isFmla && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">FMLA Status</span>
                  <Badge variant="outline" className="w-fit bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                    FMLA Protected
                  </Badge>
                </div>
              )}
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Reason</span>
                <div className="flex items-start gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span>{leave.reason}</span>
                </div>
              </div>
              
              {leave.documents && leave.documents.length > 0 && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">Documents</span>
                  <ul className="space-y-2">
                    {leave.documents.map((doc: LeaveDocument, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <a href={doc.url} className="text-sm text-primary hover:underline">
                          {doc.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Calendar view */}
        <Card className="w-full md:w-auto">
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>Leave period visualization</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="range"
              defaultMonth={startDate}
              selected={{
                from: startDate,
                to: endDate
              }}
              className="rounded-md border"
              disabled
            />
          </CardContent>
        </Card>
      </div>
      
      {/* Additional information */}
      {leave.notes && (
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{leave.notes}</p>
          </CardContent>
        </Card>
      )}
      
      {/* Timeline */}
      {leave.timeline && leave.timeline.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
            <CardDescription>History of this leave request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leave.timeline.map((event, index) => (
                <div key={index} className="relative pl-6">
                  {index !== leave.timeline!.length - 1 && (
                    <div className="absolute top-6 bottom-0 left-[9px] w-[1px] bg-border" />
                  )}
                  <div className="absolute top-1 left-0 h-4 w-4 rounded-full border bg-background" />
                  <div className="space-y-1">
                    <div className="text-sm font-medium">{event.action}</div>
                    <div className="text-xs text-muted-foreground">
                      {format(parseISO(event.date), "MMM d, yyyy 'at' h:mm a")}
                      {event.by && ` by ${event.by}`}
                    </div>
                    {event.comment && (
                      <div className="text-sm mt-2">{event.comment}</div>
                    )}
                  </div>
                  {index !== leave.timeline!.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 