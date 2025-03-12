import { DashboardLayout } from "@/components/dashboard-layout"

export default function EmployeesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Employees</h1>
          <p className="text-muted-foreground">
            Manage your employee information and benefits
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Employee management content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 