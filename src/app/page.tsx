import { DashboardLayout } from "@/components/dashboard-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  FileText, 
  Accessibility, 
  PenSquare, 
  RefreshCw, 
  ArrowUp, 
  Users, 
  ChevronRight, 
  Shield,
  ArrowRight
} from "lucide-react"
import { LeaveStatusVisualization } from "@/components/leave-status-visualization"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome, Brian!</h1>
          <p className="text-muted-foreground">
            WillowTree, LLC | Group ID: 12345678
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Employees Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-medium">Employees</CardTitle>
              <Link href="/employees" className="text-sm text-primary hover:underline">
                View all employees
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">342</span>
                  <span className="ml-2 text-muted-foreground">enrolled employees</span>
                </div>
                <div className="text-muted-foreground">123 enrolled dependents</div>
              </div>
            </CardContent>
          </Card>
          
          {/* Leave Status Visualization - spans 2 columns */}
          <LeaveStatusVisualization data={leaveStatusData} total={totalLeaves} />
          
          {/* Billing Statement Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-medium">Your last bill</CardTitle>
              <Link href="/billing" className="text-sm text-primary hover:underline">
                Manage billing
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-4xl font-bold">$4,732.43</div>
                <div className="text-muted-foreground">Billing period: 01/01/2025 - 01/31/2025</div>
                <div className="text-muted-foreground">Payment due 01/28/2025</div>
              </div>
              
              <div className="flex items-center gap-3 rounded-md bg-muted p-3">
                <RefreshCw className="h-5 w-5 text-muted-foreground" />
                <span>Autopay on 01/15/2025</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items Section */}
        <Card>
          <CardHeader>
            <CardTitle>Your action items</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Action Item 1 */}
            <div className="rounded-lg bg-accent p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Open Enrollment starts in 14 days</h3>
                  <p className="text-muted-foreground">
                    Prepare for enrollment starting on 01/15/2025 with our{" "}
                    <Link href="/employees/checklist" className="text-primary font-medium hover:underline inline-flex items-center">
                      Enrollment Checklist
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Item 2 */}
            <div className="rounded-lg border p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950">
                  <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">3 employee leave requests require approval</h3>
                  <p className="text-muted-foreground">
                    Review and respond to pending leave requests from your team members.
                  </p>
                </div>
              </div>
              <Button variant="default">Review</Button>
            </div>

            {/* Action Item 3 */}
            <div className="rounded-lg border p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950">
                  <Accessibility className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">2 ADA accommodation requests require approval</h3>
                  <p className="text-muted-foreground">
                    Address accommodation requests to ensure workplace accessibility compliance.
                  </p>
                </div>
              </div>
              <Button variant="default">Review</Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Benefits Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Active benefits</CardTitle>
            <Link href="/benefits/manage" className="text-sm text-primary hover:underline">
              Manage benefits
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {/* Dental Benefit */}
              <div className="flex items-center justify-between p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <div>
                  <h3 className="font-medium">Dental</h3>
                  <p className="text-sm text-muted-foreground">01/01/2025 - 12/31/2025</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                    Active
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Vision Benefit */}
              <div className="flex items-center justify-between p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <div>
                  <h3 className="font-medium">Vision</h3>
                  <p className="text-sm text-muted-foreground">01/01/2025 - 12/31/2025</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                    Active
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Short Term Disability */}
              <div className="flex items-center justify-between p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <div>
                  <h3 className="font-medium">Short term disability</h3>
                  <p className="text-sm text-muted-foreground">01/01/2025 - 12/31/2025</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                    Active
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Long Term Disability */}
              <div className="flex items-center justify-between p-4 hover:bg-accent/50 cursor-pointer transition-colors">
                <div>
                  <h3 className="font-medium">Long term disability</h3>
                  <p className="text-sm text-muted-foreground">01/01/2025 - 12/31/2025</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                    Active
                  </Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Enhance Benefits Banner */}
              <div className="p-4">
                <div className="rounded-lg bg-accent p-4 flex items-center gap-4 cursor-pointer">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center">
                      Enhance your benefits package
                      <ChevronRight className="h-4 w-4 ml-2 text-primary" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Find cost-friendly benefits for your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
} 