"use client"

import { format, parseISO } from "date-fns"
import { Accommodation, AccommodationStatus, AccommodationDocument, formatDate } from "@/data/accommodations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Check, 
  Clock, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  User, 
  Calendar, 
  MessageSquare,
  Briefcase,
  ClipboardCheck
} from "lucide-react"

interface AccommodationDetailsProps {
  accommodation: Accommodation
}

export function AccommodationDetails({ accommodation }: AccommodationDetailsProps) {
  // Get status badge
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
  
  // Format accommodation type for display
  const formatAccommodationType = (type: string) => {
    return type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Accommodation information */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Accommodation Information</CardTitle>
            <CardDescription>Details about this accommodation request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Status</span>
                <div>{getStatusBadge(accommodation.status)}</div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Employee</span>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{accommodation.employeeName}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Accommodation Type</span>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>{formatAccommodationType(accommodation.type)}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Request Date</span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{formatDate(accommodation.requestDate)}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Requested By</span>
                <span>{accommodation.requestedBy}</span>
              </div>
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Medically Necessary</span>
                <span>{accommodation.medicallyNecessary ? "Yes" : "No"}</span>
              </div>
              
              {accommodation.reviewDate && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">Review Date</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{formatDate(accommodation.reviewDate)}</span>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-muted-foreground">Description</span>
                <div className="flex items-start gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span>{accommodation.description}</span>
                </div>
              </div>
              
              {accommodation.implementationDetails && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">Implementation Details</span>
                  <div className="flex items-start gap-2">
                    <ClipboardCheck className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span>{accommodation.implementationDetails}</span>
                  </div>
                </div>
              )}
              
              {accommodation.documents && accommodation.documents.length > 0 && (
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">Documents</span>
                  <ul className="space-y-2">
                    {accommodation.documents.map((doc: AccommodationDocument, index: number) => (
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
      </div>
      
      {/* Additional information */}
      {accommodation.notes && (
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{accommodation.notes}</p>
          </CardContent>
        </Card>
      )}
      
      {/* Timeline */}
      {accommodation.timeline && accommodation.timeline.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
            <CardDescription>History of this accommodation request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accommodation.timeline.map((event, index) => (
                <div key={index} className="relative pl-6">
                  {index !== accommodation.timeline!.length - 1 && (
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
                  {index !== accommodation.timeline!.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 