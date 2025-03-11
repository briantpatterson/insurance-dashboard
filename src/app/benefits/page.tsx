import { DashboardLayout } from "@/components/dashboard-layout"

export default function BenefitsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Benefits</h1>
          <p className="text-muted-foreground">
            Configure and manage benefit plans
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Benefits content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 