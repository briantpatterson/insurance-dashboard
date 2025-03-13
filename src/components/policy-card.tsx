"use client"

import { Policy, formatDate } from "@/data/policies"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, CheckCircle2, AlertCircle } from "lucide-react"

interface PolicyCardProps {
  policy: Policy
}

export function PolicyCard({ policy }: PolicyCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{policy.title}</CardTitle>
          {policy.status === "active" && (
            <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
              Active
            </Badge>
          )}
          {policy.status === "pending" && (
            <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800">
              Pending
            </Badge>
          )}
          {policy.status === "archived" && (
            <Badge variant="outline" className="bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800">
              Archived
            </Badge>
          )}
        </div>
        <CardDescription>{policy.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Effective: {formatDate(policy.effectiveDate)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Last Updated: {formatDate(policy.lastUpdated)}</span>
          </div>
          
          {policy.requiresAcknowledgement && (
            <div className="flex items-center gap-2 mt-4">
              {policy.isAcknowledged ? (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Acknowledged</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <AlertCircle className="h-4 w-4" />
                  <span>Acknowledgement Required</span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        {policy.documentUrl && (
          <Button variant="outline" className="w-full flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>View Policy</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
} 