import { DashboardLayout } from "@/components/dashboard-layout"

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground">
            Access and manage important documents
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <p>Documents content will go here</p>
        </div>
      </div>
    </DashboardLayout>
  )
} 