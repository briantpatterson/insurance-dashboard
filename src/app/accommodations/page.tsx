"use client"

import { accommodations } from "@/data/accommodations"
import { AccommodationsTable } from "@/components/accommodations-table"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function AccommodationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Accommodations</h1>
            <p className="text-muted-foreground mt-2">
              Manage and track employee accommodation requests under the Americans with Disabilities Act (ADA).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="h-9">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Accommodation
            </Button>
          </div>
        </div>
        
        <div>
          <AccommodationsTable accommodations={accommodations} />
        </div>
      </div>
    </DashboardLayout>
  )
} 