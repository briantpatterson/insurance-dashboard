"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { DisabilityLeavesChart } from "@/components/disability-leaves-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, PieChart, LineChart, Activity } from "lucide-react"

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
        
        <Tabs defaultValue="leaves">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="leaves" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>Leaves</span>
            </TabsTrigger>
            <TabsTrigger value="benefits" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              <span>Benefits</span>
            </TabsTrigger>
            <TabsTrigger value="employees" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              <span>Employees</span>
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              <span>Financial</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaves" className="space-y-6 mt-6">
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
          </TabsContent>
          
          <TabsContent value="benefits" className="mt-6">
            <div className="flex items-center justify-center h-[400px] bg-muted rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Benefits Insights Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  We're working on adding detailed benefits enrollment and utilization charts.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="employees" className="mt-6">
            <div className="flex items-center justify-center h-[400px] bg-muted rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Employee Insights Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  We're working on adding detailed employee demographics and turnover charts.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="financial" className="mt-6">
            <div className="flex items-center justify-center h-[400px] bg-muted rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">Financial Insights Coming Soon</h3>
                <p className="text-muted-foreground max-w-md">
                  We're working on adding detailed financial and cost analysis charts.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 