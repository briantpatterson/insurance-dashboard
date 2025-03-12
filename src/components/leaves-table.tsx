"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Leave, LeaveStatus, formatDateRange } from "@/data/leaves"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Clock, 
  X, 
  CheckCircle2, 
  XCircle 
} from "lucide-react"

interface LeavesTableProps {
  leaves: Leave[]
}

export function LeavesTable({ leaves }: LeavesTableProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  
  // Filter leaves based on search query
  const filteredLeaves = leaves.filter((leave) => {
    const searchString = searchQuery.toLowerCase()
    return (
      leave.employeeName.toLowerCase().includes(searchString) ||
      leave.type.toLowerCase().includes(searchString) ||
      leave.status.toLowerCase().includes(searchString) ||
      leave.reason.toLowerCase().includes(searchString)
    )
  })
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredLeaves.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedLeaves = filteredLeaves.slice(startIndex, startIndex + itemsPerPage)
  
  // Handle row click to navigate to leave details
  const handleRowClick = (id: string) => {
    router.push(`/leaves/${id}`)
  }
  
  // Get status badge variant
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Leave Requests</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search leaves..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Leave Dates</TableHead>
              <TableHead>Leave Status</TableHead>
              <TableHead>Leave Reason</TableHead>
              <TableHead>FMLA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLeaves.length > 0 ? (
              paginatedLeaves.map((leave) => (
                <TableRow 
                  key={leave.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleRowClick(leave.id)}
                >
                  <TableCell className="font-medium">{leave.employeeName}</TableCell>
                  <TableCell>{formatDateRange(leave.startDate, leave.endDate)}</TableCell>
                  <TableCell>{getStatusBadge(leave.status)}</TableCell>
                  <TableCell>{leave.reason}</TableCell>
                  <TableCell>
                    {leave.isFmla ? (
                      <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                        FMLA
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredLeaves.length)} of {filteredLeaves.length}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 