import { DashboardLayout } from "@/components/dashboard-layout"

export default function LeavesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Leaves</h1>
          <p className="text-muted-foreground">
            Manage and track employee leave requests
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Leave management content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 