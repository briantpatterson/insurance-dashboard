"use client"

import { useState } from "react"
import { leaves } from "@/data/leaves"
import { LeavesTable } from "@/components/leaves-table"
import { LeavesCalendar } from "@/components/leaves-calendar"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, List } from "lucide-react"

export default function LeavesPage() {
  const [view, setView] = useState<"list" | "calendar">("list")
  
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
          <Tabs defaultValue="list" className="w-full" onValueChange={(value: string) => setView(value as "list" | "calendar")}>
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  <span>List View</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>Calendar View</span>
                </TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button size="sm">
                  New Leave Request
                </Button>
              </div>
            </div>
            
            <TabsContent value="list" className="mt-6">
              <LeavesTable leaves={leaves} />
            </TabsContent>
            
            <TabsContent value="calendar" className="mt-6">
              <LeavesCalendar leaves={leaves} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
} 