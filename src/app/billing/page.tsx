import { DashboardLayout } from "@/components/dashboard-layout"

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Billing</h1>
          <p className="text-muted-foreground">
            Manage billing and payments
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Billing content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 