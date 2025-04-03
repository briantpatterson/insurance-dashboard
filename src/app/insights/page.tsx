"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { DisabilityLeavesChart } from "@/components/disability-leaves-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsightsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Insights</h1>
          <p className="text-muted-foreground">
            View analytics and insights for your organization.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <DisabilityLeavesChart />
            
            <Card>
              <CardHeader>
                <CardTitle>Leave Insights</CardTitle>
                <CardDescription>
                  Key metrics and trends for employee leaves
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Total Active Leaves</p>
                      <p className="text-2xl font-bold">42</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Average Duration</p>
                      <p className="text-2xl font-bold">18 days</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">FMLA Leaves</p>
                      <p className="text-2xl font-bold">15</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Return Rate</p>
                      <p className="text-2xl font-bold">94%</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">Top Leave Reasons</h4>
                    <ol className="space-y-2">
                      <li className="text-sm flex justify-between">
                        <span className="text-muted-foreground">Medical (Self)</span>
                        <span className="font-medium">38%</span>
                      </li>
                      <li className="text-sm flex justify-between">
                        <span className="text-muted-foreground">Parental</span>
                        <span className="font-medium">24%</span>
                      </li>
                      <li className="text-sm flex justify-between">
                        <span className="text-muted-foreground">Family Care</span>
                        <span className="font-medium">18%</span>
                      </li>
                      <li className="text-sm flex justify-between">
                        <span className="text-muted-foreground">Work Injury</span>
                        <span className="font-medium">12%</span>
                      </li>
                      <li className="text-sm flex justify-between">
                        <span className="text-muted-foreground">Other</span>
                        <span className="font-medium">8%</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 