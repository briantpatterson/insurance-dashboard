import { DashboardLayout } from "@/components/dashboard-layout"

export default function PoliciesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Policies</h1>
          <p className="text-muted-foreground">
            View and update company policies
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Policies content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 