import { DashboardLayout } from "@/components/dashboard-layout"

export default function EnrollmentPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Enrollment</h1>
          <p className="text-muted-foreground">
            Manage employee benefit enrollments
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Enrollment content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 