import { DashboardLayout } from "@/components/dashboard-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Accessibility, PenSquare, RefreshCw, ArrowUp, Users, ChevronRight, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Brian!</h1>
          <p className="text-muted-foreground">
            WillowTree, LLC | Group ID: 12345678
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Enrollment Card */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-slate-800">Enrollment</h3>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full flex items-center text-sm font-medium">
                <ArrowUp className="h-4 w-4 mr-1" />
                17
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-slate-800">342</span>
                <span className="ml-2 text-slate-600">Employees</span>
              </div>
              <div className="mt-2 text-slate-600">123 Dependents</div>
              <div className="mt-6">
                <Link href="/enrollment/employees" className="text-blue-600 hover:underline font-medium">
                  View employees
                </Link>
              </div>
            </div>
          </div>
          
          {/* Active Leaves Card */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Active leaves</h3>
            <div className="mt-4 text-3xl font-bold">18</div>
            <div className="mt-2 text-sm text-muted-foreground">
              4 returning this week
            </div>
          </div>
          
          {/* Unapproved Leaves Card */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Unapproved leaves</h3>
            <div className="mt-4 text-3xl font-bold">3</div>
            <div className="mt-2 text-sm text-muted-foreground">
              Requires your review
            </div>
          </div>
          
          {/* Billing Statement Card - spans 2 columns on smaller screens */}
          <div className="rounded-lg border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-slate-800">Monthly statement</h3>
              <Link href="/billing" className="text-blue-600 hover:underline">
                Manage billing
              </Link>
            </div>
            
            <div className="mb-4">
              <div className="text-4xl font-bold text-slate-800">$408,732.43</div>
              <div className="text-slate-600 mt-2">Payment due 01/28/2025</div>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-3 flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-slate-700" />
              <span className="text-slate-800">Autopay on 01/15/2025</span>
            </div>
          </div>
        </div>

        {/* Action Items Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Your action items</h2>
            <Link href="/actions" className="text-blue-600 hover:underline font-medium">
              View all action items
            </Link>
          </div>

          <div className="space-y-4">
            {/* Action Item 1 */}
            <div className="bg-blue-50 rounded-lg p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <Calendar className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Open Enrollment starts in 14 days</h3>
                  <p className="text-slate-600">
                    Prepare for enrollment starting on 01/15/2025 with our{" "}
                    <Link href="/enrollment/checklist" className="text-blue-600 font-medium hover:underline inline-flex items-center">
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
            <div className="bg-white rounded-lg p-6 border flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">3 employee leave requests require approval</h3>
                </div>
              </div>
              <Button className="bg-slate-800 hover:bg-slate-700">Review</Button>
            </div>

            {/* Action Item 3 */}
            <div className="bg-white rounded-lg p-6 border flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <Accessibility className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">2 ADA accommodation requests require approval</h3>
                </div>
              </div>
              <Button className="bg-slate-800 hover:bg-slate-700">Review</Button>
            </div>

            {/* Action Item 4 */}
            <div className="bg-white rounded-lg p-6 border flex items-start justify-between">
              <div className="flex gap-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <PenSquare className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">New policy documents require signature</h3>
                </div>
              </div>
              <Button className="bg-slate-800 hover:bg-slate-700">Review</Button>
            </div>
          </div>
        </div>

        {/* Active Benefits Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Active benefits</h2>
            <Link href="/benefits/manage" className="text-blue-600 hover:underline font-medium">
              Manage benefits
            </Link>
          </div>

          <div className="divide-y">
            {/* Dental Benefit */}
            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Dental</h3>
                <p className="text-slate-600">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Vision Benefit */}
            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Vision</h3>
                <p className="text-slate-600">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Short Term Disability */}
            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Short term disability</h3>
                <p className="text-slate-600">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Long Term Disability */}
            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Long term disability</h3>
                <p className="text-slate-600">01/01/2025 - 12/31/2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </span>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </div>

            {/* Enhance Benefits Banner */}
            <div className="py-4">
              <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <Shield className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                    Enhance your benefits package
                    <ChevronRight className="h-5 w-5 ml-2 text-blue-600" />
                  </h3>
                  <p className="text-slate-600">
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