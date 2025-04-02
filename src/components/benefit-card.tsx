"use client"

import { useRouter } from "next/navigation"
import { Benefit } from "@/data/benefits"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { 
  Eye, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Users, 
  User, 
  FileText,
  Pill,
  Laugh
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface BenefitCardProps {
  benefit: Benefit
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const router = useRouter()
  
  // Format date to display month and year only
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }
  
  // Get icon based on benefit type
  const getBenefitIcon = () => {
    switch (benefit.type) {
      case "dental":
        return (
          <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
            <Laugh className="h-5 w-5 text-blue-600 dark:text-blue-300" />
          </div>
        )
      case "vision":
        return (
          <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
            <Eye className="h-5 w-5 text-purple-600 dark:text-purple-300" />
          </div>
        )
      case "short-term-disability":
        return (
          <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900">
            <Clock className="h-5 w-5 text-amber-600 dark:text-amber-300" />
          </div>
        )
      case "long-term-disability":
        return (
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
            <Calendar className="h-5 w-5 text-green-600 dark:text-green-300" />
          </div>
        )
      case "health":
        return (
          <div className="p-2 rounded-full bg-red-100 dark:bg-red-900">
            <ShieldCheck className="h-5 w-5 text-red-600 dark:text-red-300" />
          </div>
        )
      case "life":
        return (
          <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900">
            <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
          </div>
        )
      default:
        return (
          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
            <FileText className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </div>
        )
    }
  }
  
  // Get border color - now always gray for consistency with other cards
  const getBorderColor = () => {
    return "border-gray-200 dark:border-gray-700"
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
  
  return (
    <Card 
      className={`overflow-hidden cursor-pointer transition-all hover:shadow-md border ${getBorderColor()}`}
      onClick={() => router.push(`/benefits/${benefit.id}`)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {getBenefitIcon()}
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {benefit.title}
            </h3>
          </div>
          {getStatusBadge()}
        </div>
        
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {benefit.description}
        </p>
        
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-slate-600 dark:text-slate-400">
              {formatDate(benefit.effectiveStartDate)} - {formatDate(benefit.effectiveEndDate)}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            {benefit.coverageLevel === "family" ? (
              <Users className="h-4 w-4 text-muted-foreground" />
            ) : (
              <User className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-slate-600 dark:text-slate-400">
              {benefit.coverageLevel === "family" ? "Family Coverage" : "Individual Coverage"}
            </span>
          </div>
          
          {/* Network information for dental and vision */}
          {benefit.type === "dental" && (
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              <span className="text-slate-600 dark:text-slate-400">
                Dental PPO
              </span>
            </div>
          )}
          
          {benefit.type === "vision" && (
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              <span className="text-slate-600 dark:text-slate-400">
                VSP Network
              </span>
            </div>
          )}
          
          {benefit.fmlaEligible && (
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                FMLA Eligible
              </span>
            </div>
          )}
        </div>
      </div>
      
      <CardFooter className="bg-slate-50 dark:bg-slate-900 border-t p-4">
        <Button variant="ghost" size="sm" className="ml-auto">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
} 