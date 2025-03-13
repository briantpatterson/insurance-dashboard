"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Accommodation, AccommodationStatus, formatDate } from "@/data/accommodations"
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
  AlertCircle,
  Loader2
} from "lucide-react"

interface AccommodationsTableProps {
  accommodations: Accommodation[]
}

export function AccommodationsTable({ accommodations }: AccommodationsTableProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  
  // Filter accommodations based on search query
  const filteredAccommodations = accommodations.filter((accommodation) => {
    const searchString = searchQuery.toLowerCase()
    return (
      accommodation.employeeName.toLowerCase().includes(searchString) ||
      accommodation.type.toLowerCase().includes(searchString) ||
      accommodation.status.toLowerCase().includes(searchString) ||
      accommodation.description.toLowerCase().includes(searchString)
    )
  })
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredAccommodations.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedAccommodations = filteredAccommodations.slice(startIndex, startIndex + itemsPerPage)
  
  // Handle row click to navigate to accommodation details
  const handleRowClick = (id: string) => {
    router.push(`/accommodations/${id}`)
  }
  
  // Format accommodation type for display
  const formatAccommodationType = (type: string) => {
    return type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
  
  // Get status badge variant
  const getStatusBadge = (status: AccommodationStatus) => {
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
      case "implemented":
        return <Badge variant="outline" className="flex items-center gap-1 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
          <CheckCircle2 className="h-3 w-3" /> Implemented
        </Badge>
      case "under review":
        return <Badge variant="outline" className="flex items-center gap-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
          <AlertCircle className="h-3 w-3" /> Under Review
        </Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Accommodation Requests</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search accommodations..."
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
              <TableHead>Accommodation Type</TableHead>
              <TableHead>Requested Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedAccommodations.length > 0 ? (
              paginatedAccommodations.map((accommodation) => (
                <TableRow 
                  key={accommodation.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleRowClick(accommodation.id)}
                >
                  <TableCell className="font-medium">{accommodation.employeeName}</TableCell>
                  <TableCell>{formatAccommodationType(accommodation.type)}</TableCell>
                  <TableCell>{formatDate(accommodation.requestDate)}</TableCell>
                  <TableCell>{getStatusBadge(accommodation.status)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
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
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAccommodations.length)} of {filteredAccommodations.length}
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