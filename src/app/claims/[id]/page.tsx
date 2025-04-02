import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { claims, getClaimStatusColor, getClaimStatusDisplay, getClaimTypeDisplay } from "@/data/claims"
import { ArrowLeft, Download, Calendar, Clock, FileText, DollarSign, Building, User, Stethoscope } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { notFound } from "next/navigation"

export default function ClaimDetailsPage({ params }: { params: { id: string } }) {
  const claim = claims.find((c) => c.id === params.id)
  
  if (!claim) {
    notFound()
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/claims">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Claims
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Claim Summary Card */}
          <Card className="col-span-2">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                    Claim Summary
                  </CardTitle>
                  <CardDescription className="mt-1.5">
                    {claim.claimNumber} • {format(new Date(claim.dateReceived), "PPP")}
                  </CardDescription>
                </div>
                <Badge variant="outline" className={getClaimStatusColor(claim.status)}>
                  {getClaimStatusDisplay(claim.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Patient
                  </dt>
                  <dd className="mt-1 text-sm">{claim.patientName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground flex items-center">
                    <Stethoscope className="h-4 w-4 mr-2" />
                    Claim Type
                  </dt>
                  <dd className="mt-1 text-sm">{getClaimTypeDisplay(claim.type)}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Provider
                  </dt>
                  <dd className="mt-1 text-sm">{claim.providerName}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Amount
                  </dt>
                  <dd className="mt-1 text-sm font-medium">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(claim.amount)}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Service Date
                  </dt>
                  <dd className="mt-1 text-sm">{format(new Date(claim.serviceDate), "MM/dd/yyyy")}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Submission Date
                  </dt>
                  <dd className="mt-1 text-sm">{format(new Date(claim.dateReceived), "MM/dd/yyyy")}</dd>
                </div>
                {claim.paidDate && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Paid Date
                    </dt>
                    <dd className="mt-1 text-sm">{format(new Date(claim.paidDate), "MM/dd/yyyy")}</dd>
                  </div>
                )}
              </dl>
            </CardContent>
            <CardFooter className="pt-0 mt-3">
              <div className="w-full">
                <Separator className="my-4" />
                <h3 className="text-sm font-medium mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">
                  {claim.description}
                </p>
              </div>
            </CardFooter>
          </Card>

          {/* Claim Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                Claim Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">
                Review Claim
              </Button>
              {claim.status === "pending" || claim.status === "in_review" ? (
                <Button variant="outline" className="w-full">
                  Approve Claim
                </Button>
              ) : null}
              {claim.status === "approved" && !claim.paidDate ? (
                <Button variant="outline" className="w-full">
                  Mark as Paid
                </Button>
              ) : null}
              <Button variant="outline" className="w-full">
                Request Information
              </Button>
              <Button variant="outline" className="w-full">
                Add Note
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 