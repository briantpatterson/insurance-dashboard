import { DashboardLayout } from "@/components/dashboard-layout"

export default function ClaimsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Claims</h1>
          <p className="text-muted-foreground">
            Process and track employee claims
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Claims content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 