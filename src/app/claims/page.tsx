import { DashboardLayout } from "@/components/dashboard-layout"
import { ClaimsTable } from "@/components/claims-table"
import { claims } from "@/data/claims"
import { Button } from "@/components/ui/button"
import { Download, PlusCircle, FileText } from "lucide-react"

export default function ClaimsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Claims</h1>
            <p className="text-muted-foreground mt-2">
              Manage and track insurance claims for employees
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="h-9">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Claim
            </Button>
          </div>
        </div>
        
        <div>
          <ClaimsTable data={claims} />
        </div>
      </div>
    </DashboardLayout>
  )
} 