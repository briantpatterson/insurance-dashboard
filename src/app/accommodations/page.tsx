import { DashboardLayout } from "@/components/dashboard-layout"

export default function AccommodationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Accommodations</h1>
          <p className="text-muted-foreground">
            Manage workplace accommodations
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Accommodations content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 