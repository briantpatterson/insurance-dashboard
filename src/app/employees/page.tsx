import { DashboardLayout } from "@/components/dashboard-layout"
import { EmployeesTable } from "@/components/employees-table"
import { employees } from "@/data/employees"
import { Button } from "@/components/ui/button"
import { UserPlus, Download } from "lucide-react"

export default function EmployeesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Employees</h1>
            <p className="text-muted-foreground">
              Manage your employee information and benefits
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="h-9">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </div>
        
        <div>
          <EmployeesTable data={employees} />
        </div>
      </div>
    </DashboardLayout>
  )
} 