"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { accommodations, Accommodation } from "@/data/accommodations"
import { AccommodationDetails } from "@/components/accommodation-details"
import { ADAResources } from "@/components/ada-resources"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ChevronLeft, Home, Briefcase } from "lucide-react"

interface AccommodationDetailsPageProps {
  params: {
    id: string
  }
}

export default function AccommodationDetailsPage({ params }: AccommodationDetailsPageProps) {
  const router = useRouter()
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundAccommodation = accommodations.find(a => a.id === params.id)
    setAccommodation(foundAccommodation || null)
    setLoading(false)
  }, [params.id])
  
  const handleBack = () => {
    router.push("/accommodations")
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
  
  if (!accommodation) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-4">
          <h2 className="text-xl font-semibold">Accommodation Not Found</h2>
          <p className="text-muted-foreground">The accommodation request you're looking for doesn't exist or has been removed.</p>
          <Button onClick={handleBack}>Back to Accommodations</Button>
        </div>
      </DashboardLayout>
    )
  }
  
  // Format accommodation type for display
  const formatAccommodationType = (type: string) => {
    return type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
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
                <BreadcrumbLink href="/accommodations">Accommodations</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Accommodation Details</BreadcrumbLink>
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
                Back to Accommodations
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Accommodation Details</h1>
              <p className="text-muted-foreground">
                {accommodation.employeeName} - {formatAccommodationType(accommodation.type)}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {accommodation.status === "pending" && (
                <>
                  <Button variant="outline" size="sm">
                    Deny
                  </Button>
                  <Button size="sm">
                    Approve
                  </Button>
                </>
              )}
              {accommodation.status === "under review" && (
                <Button size="sm">
                  Complete Review
                </Button>
              )}
              {accommodation.status !== "pending" && accommodation.status !== "under review" && (
                <Button variant="outline" size="sm">
                  Print
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AccommodationDetails accommodation={accommodation} />
          </div>
          
          <div className="lg:col-span-1">
            <ADAResources />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 