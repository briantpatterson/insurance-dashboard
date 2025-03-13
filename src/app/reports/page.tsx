"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            View and generate reports for your insurance data.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Leave Reports</CardTitle>
              <CardDescription>
                Generate reports for employee leaves and absences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View detailed reports on employee leaves, including duration, type, and status.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Billing Reports</CardTitle>
              <CardDescription>
                Generate reports for billing and payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View detailed reports on billing statements, payments, and outstanding balances.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Benefits Reports</CardTitle>
              <CardDescription>
                Generate reports for employee benefits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View detailed reports on employee benefits, including enrollment status and coverage details.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 