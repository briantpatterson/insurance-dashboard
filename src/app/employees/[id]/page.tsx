import { DashboardLayout } from "@/components/dashboard-layout"
import { employees } from "@/data/employees"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, User, Calendar, Users, Shield } from "lucide-react"

// Define coverage type colors for light and dark modes
const coverageColors: Record<string, string> = {
  "Dental": "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  "Vision": "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
  "Short Term Disability": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
  "Long Term Disability": "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
}

// Define leave status colors for light and dark modes
const getLeaveStatusClass = (status: string): string => {
  switch (status) {
    case "Active":
      return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
    case "On Leave":
      return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
    case "Leave Requested":
      return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
    case "Pending Return":
      return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
    default:
      return "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
  }
}

// Mock data for dependents
const mockDependents = [
  { id: "d1", name: "Sarah Smith", relationship: "Spouse", dateOfBirth: "05/12/1985", coverage: ["Dental", "Vision"] },
  { id: "d2", name: "Michael Smith", relationship: "Child", dateOfBirth: "03/22/2010", coverage: ["Dental", "Vision"] },
]

// Mock data for coverage dates
const coverageDates: Record<string, { startDate: string, endDate: string }> = {
  "Dental": { startDate: "01/01/2025", endDate: "12/31/2025" },
  "Vision": { startDate: "01/01/2025", endDate: "12/31/2025" },
  "Short Term Disability": { startDate: "01/01/2025", endDate: "12/31/2025" },
  "Long Term Disability": { startDate: "01/01/2025", endDate: "12/31/2025" }
}

export default function EmployeeDetailsPage({ params }: { params: { id: string } }) {
  // Find the employee by ID
  const employee = employees.find(emp => emp.id === params.id)
  
  // If employee not found, show 404 page
  if (!employee) {
    notFound()
  }
  
  // Get dependents for this employee (in a real app, this would come from the API)
  const dependents = employee.dependents > 0 ? mockDependents.slice(0, employee.dependents) : []
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/employees" className="hover:text-foreground">
            Employees
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{employee.name}</span>
        </nav>
        
        {/* Back Button */}
        <div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/employees">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Employees
            </Link>
          </Button>
        </div>
        
        {/* Employee Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{employee.name}</h1>
            <p className="text-muted-foreground">
              Member ID: {employee.memberId}
            </p>
          </div>
          <Badge variant="outline" className={getLeaveStatusClass(employee.leaveStatus)}>
            {employee.leaveStatus}
          </Badge>
        </div>
        
        {/* Employee Information */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Information */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Basic Information</h2>
            </div>
            <dl className="grid gap-2">
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-muted-foreground">Member ID:</dt>
                <dd className="font-medium">{employee.memberId}</dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-muted-foreground">Leave Status:</dt>
                <dd>
                  <Badge variant="outline" className={getLeaveStatusClass(employee.leaveStatus)}>
                    {employee.leaveStatus}
                  </Badge>
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-muted-foreground">Dependents:</dt>
                <dd className="font-medium">{employee.dependents}</dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-muted-foreground">Hire Date:</dt>
                <dd className="font-medium">01/15/2022</dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-muted-foreground">Department:</dt>
                <dd className="font-medium">Engineering</dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-muted-foreground">Position:</dt>
                <dd className="font-medium">Senior Developer</dd>
              </div>
            </dl>
          </div>
          
          {/* Coverage Information */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Coverage Information</h2>
            </div>
            <div className="space-y-4">
              {employee.coverage.map((coverage, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="flex justify-between items-center mb-2">
                    <Badge 
                      variant="outline" 
                      className={coverageColors[coverage] || "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"}
                    >
                      {coverage}
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                      Active
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    <span className="text-muted-foreground">Start Date:</span>
                    <span className="font-medium">{coverageDates[coverage]?.startDate || "01/01/2025"}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    <span className="text-muted-foreground">End Date:</span>
                    <span className="font-medium">{coverageDates[coverage]?.endDate || "12/31/2025"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dependents Information */}
        {dependents.length > 0 && (
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Dependents</h2>
            </div>
            <div className="space-y-4">
              {dependents.map((dependent) => (
                <div key={dependent.id} className="rounded-lg border p-4">
                  <h3 className="font-medium text-lg mb-2">{dependent.name}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-1 text-sm">
                        <span className="text-muted-foreground">Relationship:</span>
                        <span className="font-medium">{dependent.relationship}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-sm">
                        <span className="text-muted-foreground">Date of Birth:</span>
                        <span className="font-medium">{dependent.dateOfBirth}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block mb-2">Coverage:</span>
                      <div className="flex flex-wrap gap-1">
                        {dependent.coverage.map((coverage, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className={coverageColors[coverage] || "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"}
                          >
                            {coverage}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Leave History */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Leave History</h2>
          </div>
          {employee.leaveStatus !== "Active" ? (
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Personal Leave</h3>
                  <Badge variant="outline" className={getLeaveStatusClass(employee.leaveStatus)}>
                    {employee.leaveStatus}
                  </Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <span className="text-muted-foreground">Start Date:</span>
                      <span className="font-medium">03/15/2025</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <span className="text-muted-foreground">End Date:</span>
                      <span className="font-medium">04/15/2025</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium">Medical</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      <span className="text-muted-foreground">Approved By:</span>
                      <span className="font-medium">Jane Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">No leave history found.</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
} 