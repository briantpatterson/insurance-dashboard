"use client"

import { accommodations } from "@/data/accommodations"
import { AccommodationsTable } from "@/components/accommodations-table"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function AccommodationsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Accommodations</h1>
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              <span>New Accommodation</span>
            </Button>
          </div>
          <p className="text-muted-foreground">
            Manage and track employee accommodation requests under the Americans with Disabilities Act (ADA).
          </p>
        </div>
        
        <div>
          <AccommodationsTable accommodations={accommodations} />
        </div>
      </div>
    </DashboardLayout>
  )
} 