"use client"

import { useRouter } from "next/navigation"
import { Benefit } from "@/data/benefits"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Stethoscope, 
  Eye, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Users, 
  User, 
  FileText,
  Phone,
  Globe,
  Mail,
  ChevronLeft,
  Download
} from "lucide-react"

interface BenefitDetailsProps {
  benefit: Benefit
}

export function BenefitDetails({ benefit }: BenefitDetailsProps) {
  const router = useRouter()
  
  // Format date to display month, day, and year
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }
  
  // Get icon based on benefit type
  const getBenefitIcon = () => {
    switch (benefit.type) {
      case "dental":
        return (
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
            <Stethoscope className="h-6 w-6 text-blue-600 dark:text-blue-300" />
          </div>
        )
      case "vision":
        return (
          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
            <Eye className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          </div>
        )
      case "short-term-disability":
        return (
          <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900">
            <Clock className="h-6 w-6 text-amber-600 dark:text-amber-300" />
          </div>
        )
      case "long-term-disability":
        return (
          <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
            <Calendar className="h-6 w-6 text-green-600 dark:text-green-300" />
          </div>
        )
      case "health":
        return (
          <div className="p-3 rounded-full bg-red-100 dark:bg-red-900">
            <ShieldCheck className="h-6 w-6 text-red-600 dark:text-red-300" />
          </div>
        )
      case "life":
        return (
          <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
            <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
          </div>
        )
      default:
        return (
          <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
            <FileText className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div>
        )
    }
  }
  
  // Get status badge variant
  const getStatusBadge = () => {
    switch (benefit.status) {
      case "active":
        return <Badge variant="success">Active</Badge>
      case "inactive":
        return <Badge variant="destructive">Inactive</Badge>
      case "pending":
        return <Badge variant="warning">Pending</Badge>
      default:
        return <Badge>{benefit.status}</Badge>
    }
  }
  
  // Get color accent based on benefit type
  const getAccentColor = () => {
    switch (benefit.type) {
      case "dental":
        return "border-blue-200 dark:border-blue-800"
      case "vision":
        return "border-purple-200 dark:border-purple-800"
      case "short-term-disability":
        return "border-amber-200 dark:border-amber-800"
      case "long-term-disability":
        return "border-green-200 dark:border-green-800"
      case "health":
        return "border-red-200 dark:border-red-800"
      case "life":
        return "border-indigo-200 dark:border-indigo-800"
      default:
        return "border-gray-200 dark:border-gray-700"
    }
  }
  
  return (
    <div className="flex flex-col space-y-8">
      {/* Breadcrumb navigation */}
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 gap-1"
          onClick={() => router.push("/benefits")}
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Benefits
        </Button>
      </div>
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {getBenefitIcon()}
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {benefit.title}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              {getStatusBadge()}
              <span className="text-slate-600 dark:text-slate-400">
                {formatDate(benefit.effectiveStartDate)} - {formatDate(benefit.effectiveEndDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Coverage details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic information */}
          <Card className={`border ${getAccentColor()}`}>
            <CardHeader>
              <CardTitle>Coverage Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Provider</h3>
                  <p className="text-slate-800 dark:text-slate-100">{benefit.details.provider}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Policy Number</h3>
                  <p className="text-slate-800 dark:text-slate-100">{benefit.details.policyNumber}</p>
                </div>
                {benefit.details.groupNumber && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Group Number</h3>
                    <p className="text-slate-800 dark:text-slate-100">{benefit.details.groupNumber}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Coverage Level</h3>
                  <p className="text-slate-800 dark:text-slate-100">
                    {benefit.coverageLevel === "family" ? "Family Coverage" : "Individual Coverage"}
                  </p>
                </div>
              </div>
              
              {benefit.fmlaEligible && (
                <div className="p-4 rounded-lg border bg-emerald-50 dark:bg-emerald-950/30">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900">
                      <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-emerald-800 dark:text-emerald-300">
                        FMLA Eligible
                      </h3>
                      <p className="text-sm text-emerald-700 dark:text-emerald-400">
                        This benefit is eligible for Family and Medical Leave Act (FMLA) protection.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Coverage Details</h3>
                <ul className="space-y-2 pl-4">
                  {benefit.details.coverageDetails.map((detail, index) => (
                    <li key={index} className="text-slate-800 dark:text-slate-100">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {/* Documents */}
          {benefit.details.documents && benefit.details.documents.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {benefit.details.documents.map((document, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                          <FileText className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                        </div>
                        <span className="text-slate-800 dark:text-slate-100">{document.name}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Right column - Contact information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  <Phone className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Phone</h3>
                  <p className="text-slate-800 dark:text-slate-100">
                    {benefit.details.contactInfo.phone}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  <Globe className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Website</h3>
                  <a 
                    href={benefit.details.contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {benefit.details.contactInfo.website}
                  </a>
                </div>
              </div>
              
              {benefit.details.contactInfo.email && (
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                    <Mail className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Email</h3>
                    <a 
                      href={`mailto:${benefit.details.contactInfo.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {benefit.details.contactInfo.email}
                    </a>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                If you have questions about your benefits or need to make changes to your coverage, 
                please contact your HR representative.
              </p>
              <Button variant="outline" className="w-full">
                Contact HR
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 