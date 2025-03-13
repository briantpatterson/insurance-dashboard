"use client"

import { leaves } from "@/data/leaves"
import { LeavesTable } from "@/components/leaves-table"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"

export default function LeavesPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Leave Management</h1>
          <p className="text-muted-foreground">
            View and manage employee leave requests and time off.
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Export
            </Button>
            <Button size="sm">
              New Leave Request
            </Button>
          </div>
        </div>
        
        <LeavesTable leaves={leaves} />
      </div>
    </DashboardLayout>
  )
} 