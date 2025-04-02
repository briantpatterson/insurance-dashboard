"use client"

import { leaves } from "@/data/leaves"
import { LeavesTable } from "@/components/leaves-table"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Download, PlusCircle } from "lucide-react"

export default function LeavesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Leaves</h1>
            <p className="text-muted-foreground mt-2">
              View and manage employee leaves and FMLA compliance.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button size="sm" className="h-9">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Leave
            </Button>
          </div>
        </div>
        
        <div>
          <LeavesTable leaves={leaves} />
        </div>
      </div>
    </DashboardLayout>
  )
} 