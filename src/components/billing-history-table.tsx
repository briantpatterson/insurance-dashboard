"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BillingItem, BillingStatus } from "@/data/billing"
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
import { Search, Download, ChevronLeft, ChevronRight } from "lucide-react"

interface BillingHistoryTableProps {
  billingHistory: BillingItem[]
}

export function BillingHistoryTable({ billingHistory }: BillingHistoryTableProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  
  // Filter billing items based on search query
  const filteredBillingItems = billingHistory.filter((item) => {
    const searchString = searchQuery.toLowerCase()
    return (
      item.invoiceNumber.toLowerCase().includes(searchString) ||
      item.period.toLowerCase().includes(searchString) ||
      item.status.toLowerCase().includes(searchString)
    )
  })
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredBillingItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredBillingItems.slice(startIndex, startIndex + itemsPerPage)
  
  // Handle row click to navigate to billing details
  const handleRowClick = (id: string) => {
    router.push(`/billing/${id}`)
  }
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }
  
  // Get status badge color
  const getStatusBadge = (status: BillingStatus) => {
    switch (status) {
      case "paid":
        return <Badge variant="success">Paid</Badge>
      case "pending":
        return <Badge variant="warning">Pending</Badge>
      case "overdue":
        return <Badge variant="destructive">Overdue</Badge>
      case "processing":
        return <Badge variant="outline">Processing</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Billing History</h2>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search invoices..."
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
              <TableHead>Invoice #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
                <TableRow 
                  key={item.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handleRowClick(item.id)}
                >
                  <TableCell className="font-medium">{item.invoiceNumber}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.period}</TableCell>
                  <TableCell>{formatCurrency(item.amount)}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click
                        // Download functionality would go here
                      }}
                    >
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
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
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredBillingItems.length)} of {filteredBillingItems.length}
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