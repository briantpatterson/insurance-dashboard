import { DashboardLayout } from "@/components/dashboard-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Accessibility, PenSquare, RefreshCw, ArrowUp, Users, ChevronRight, Shield } from "lucide-react"
import { LeaveStatusVisualization } from "@/components/leave-status-visualization"

export default function HomePage() {
  // Sample data for leave status visualization
  const leaveStatusData = [
    { status: "Requested", count: 3, color: "#1a1c2c", darkColor: "#6e7186" },
    { status: "Denied", count: 2, color: "#7e2553", darkColor: "#d16a8e" },
    { status: "Approved", count: 5, color: "#29366f", darkColor: "#7a85c9" },
    { status: "On leave", count: 15, color: "#3b7e6b", darkColor: "#7fcfb6" },
    { status: "Returned", count: 5, color: "#5d4c2b", darkColor: "#c9a97a" },
  ];
  
  const totalLeaves = leaveStatusData.reduce((acc, item) => acc + item.count, 0);
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Welcome, Brian!</h1>
          <p className="text-muted-foreground">
            WillowTree, LLC | Group ID: 12345678
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Employees Card (formerly Enrollment Card) */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Employees</h3>
              <Link href="/employees" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all employees
              </Link>
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-slate-800 dark:text-slate-100">342</span>
                <span className="ml-2 text-slate-600 dark:text-slate-400">enrolled employees</span>
              </div>
              <div className="mt-2 text-slate-600 dark:text-slate-400">123 enrolled dependents</div>
            </div>
          </div>
          
          {/* Leave Status Visualization - replaces the two leave cards */}
          <LeaveStatusVisualization data={leaveStatusData} total={totalLeaves} />
          
          {/* Billing Statement Card - spans 2 columns on smaller screens */}
          <div className="rounded-lg border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Your last bill</h3>
              <Link href="/billing" className="text-blue-600 dark:text-blue-400 hover:underline">
                Manage billing
              </Link>
            </div>
            
            <div className="mb-4">
              <div className="text-4xl font-bold text-slate-800 dark:text-slate-100">$4,732.43</div>
              <div className="text-slate-600 dark:text-slate-400 mt-2">Billing period: 01/01/2025 - 01/31/2025</div>
              <div className="text-slate-600 dark:text-slate-400 mt-1">Payment due 01/28/2025</div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-3 flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              <span className="text-slate-800 dark:text-slate-200">Autopay on 01/15/2025</span>
            </div>
          </div>
        </div>

        {/* Action Items Section */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Your action items</h3>
          </div>

          <div className="space-y-4">
            {/* Action Item 1 */}
            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
                  <Calendar className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Open Enrollment starts in 14 days</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Prepare for enrollment starting on 01/15/2025 with our{" "}
                    <Link href="/employees/checklist" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                      Enrollment Checklist
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Item 2 */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-amber-800 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">3 employee leave requests require approval</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Review and respond to pending leave requests from your team members.
                  </p>
                </div>
              </div>
              <Button className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">Review</Button>
            </div>

            {/* Action Item 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-lg">
                  <Accessibility className="h-6 w-6 text-amber-800 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">2 ADA accommodation requests require approval</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Address accommodation requests to ensure workplace accessibility compliance.
                  </p>
                </div>
              </div>
              <Button className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">Review</Button>
            </div>
          </div>
        </div>

        {/* Active Benefits Section */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Active benefits</h3>
            <Link href="/benefits/manage" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Manage benefits
            </Link>
          </div>

          <div className="divide-y dark:divide-slate-700">
            {/* Dental Benefit */}
            <div className="py-4 flex items-center justify-between cursor-pointer">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Dental</h3>
                <p className="text-slate-600 dark:text-slate-400">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Vision Benefit */}
            <div className="py-4 flex items-center justify-between cursor-pointer">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Vision</h3>
                <p className="text-slate-600 dark:text-slate-400">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Short Term Disability */}
            <div className="py-4 flex items-center justify-between cursor-pointer">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Short term disability</h3>
                <p className="text-slate-600 dark:text-slate-400">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Long Term Disability */}
            <div className="py-4 flex items-center justify-between cursor-pointer">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Long term disability</h3>
                <p className="text-slate-600 dark:text-slate-400">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Enhance Benefits Banner */}
            <div className="py-4">
              <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 flex items-center gap-4 cursor-pointer">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
                  <Shield className="h-6 w-6 text-blue-800 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 flex items-center">
                    Enhance your benefits package
                    <ChevronRight className="h-5 w-5 ml-2 text-blue-600 dark:text-blue-400" />
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Find cost-friendly benefits for your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 