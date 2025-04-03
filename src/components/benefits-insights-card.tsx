"use client"

import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BenefitsInsightsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Benefits Insights</CardTitle>
        <CardDescription>
          Key metrics and trends for employee benefits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Enrollment Rate</p>
              <p className="text-2xl font-bold">92%</p>
              <div className="flex items-center text-xs text-emerald-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+3.8% from previous</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Avg. Benefits Cost</p>
              <p className="text-2xl font-bold">$457</p>
              <div className="flex items-center text-xs text-rose-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+5.2% from previous</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">HDHP Enrollment</p>
              <p className="text-2xl font-bold">38%</p>
              <div className="flex items-center text-xs text-emerald-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+7.2% from previous</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Wellness Programs</p>
              <p className="text-2xl font-bold">65%</p>
              <div className="flex items-center text-xs text-emerald-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                <span>+12.4% from previous</span>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">Top Benefits by Satisfaction</h4>
            <ol className="space-y-2">
              <li className="text-sm flex justify-between">
                <span className="text-muted-foreground">Health Insurance</span>
                <span className="font-medium">4.8/5</span>
              </li>
              <li className="text-sm flex justify-between">
                <span className="text-muted-foreground">401(k) Plan</span>
                <span className="font-medium">4.6/5</span>
              </li>
              <li className="text-sm flex justify-between">
                <span className="text-muted-foreground">Paid Time Off</span>
                <span className="font-medium">4.5/5</span>
              </li>
              <li className="text-sm flex justify-between">
                <span className="text-muted-foreground">Dental Coverage</span>
                <span className="font-medium">4.3/5</span>
              </li>
              <li className="text-sm flex justify-between">
                <span className="text-muted-foreground">Vision Coverage</span>
                <span className="font-medium">4.2/5</span>
              </li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 