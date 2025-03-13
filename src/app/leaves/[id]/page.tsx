"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { leaves, Leave } from "@/data/leaves"
import { LeaveDetails } from "@/components/leave-details"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ChevronLeft, Home } from "lucide-react"

interface LeaveDetailsPageProps {
  params: {
    id: string
  }
}

export default function LeaveDetailsPage({ params }: LeaveDetailsPageProps) {
  const router = useRouter()
  const [leave, setLeave] = useState<Leave | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundLeave = leaves.find(l => l.id === params.id)
    setLeave(foundLeave || null)
    setLoading(false)
  }, [params.id])
  
  const handleBack = () => {
    router.push("/leaves")
  }
  
  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[50vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    )
  }
  
  if (!leave) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
          <h2 className="text-xl font-semibold">Leave Not Found</h2>
          <p className="text-muted-foreground">The leave request you're looking for doesn't exist or has been removed.</p>
          <Button onClick={handleBack}>Back to Leaves</Button>
        </div>
      </DashboardLayout>
    )
  }
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/leaves">Leaves</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Leave Details</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center justify-between">
            <div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1 mb-2" 
                onClick={handleBack}
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Leaves
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Leave Details</h1>
              <p className="text-muted-foreground">
                {leave.employeeName} - {leave.type} leave
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {leave.status === "pending" && (
                <>
                  <Button variant="outline" size="sm">
                    Deny
                  </Button>
                  <Button size="sm">
                    Approve
                  </Button>
                </>
              )}
              {leave.status !== "pending" && leave.status !== "cancelled" && (
                <Button variant="outline" size="sm">
                  Print
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <LeaveDetails leave={leave} />
      </div>
    </DashboardLayout>
  )
} 