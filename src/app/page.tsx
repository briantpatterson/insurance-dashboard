"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import Link from "next/link"
import { 
  Users, 
  UserPlus,
  Calendar, 
  Briefcase, 
  CreditCard, 
  ArrowRight, 
  Eye,
  SmilePlus,
  Clock
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ClaimsUsageChart } from "@/components/claims-usage-chart"

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of WillowTree, LLC insurance benefits
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Employees */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,342</div>
              <p className="text-xs text-muted-foreground">
                +12 from last month
              </p>
            </CardContent>
          </Card>

          {/* Total Dependents */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Dependents</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">586</div>
              <p className="text-xs text-muted-foreground">
                +24 from last month
              </p>
            </CardContent>
          </Card>

          {/* Active Leaves */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Leaves</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">31</div>
              <p className="text-xs text-muted-foreground">
                +3 from last month
              </p>
            </CardContent>
          </Card>

          {/* Active Accommodations */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Accommodations</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
              <p className="text-xs text-muted-foreground">
                +3 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Billing Summary */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Consolidated Benefits */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Benefits</CardTitle>
              <CardDescription>Summary of your organization's active benefits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SmilePlus className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium">Dental</div>
                    <div className="text-xs text-muted-foreground">PPO • Dental Pro Network</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-300">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-cyan-600" />
                  <div>
                    <div className="font-medium">Vision</div>
                    <div className="text-xs text-muted-foreground">Administered by VSP</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-300">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-medium">Short-term Disability</div>
                    <div className="text-xs text-muted-foreground">Paid leave up to 26 weeks</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-300">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-600" />
                  <div>
                    <div className="font-medium">Long-term Disability</div>
                    <div className="text-xs text-muted-foreground">Paid leave up to 52 weeks</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-300">Active</Badge>
              </div>
            </CardContent>
            <CardFooter className="mt-auto pt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/benefits">
                  Manage Benefits
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Billing Summary */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Last Billing Statement</CardTitle>
              <CardDescription>Summary of your most recent bill</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">$42,586.78</div>
                  <p className="text-xs text-muted-foreground">
                    For coverage period: April 2025
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dental</span>
                    <span className="font-medium">$31,542.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Vision</span>
                    <span className="font-medium">$5,842.25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Short-term Disability</span>
                    <span className="font-medium">$1,256.78</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Long-term Disability</span>
                    <span className="font-medium">$3,945.75</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto pt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/billing">
                  Manage Billing
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Claims Usage Chart */}
        <div className="mt-8">
          <ClaimsUsageChart />
        </div>
        
      </div>
    </DashboardLayout>
  )
} 