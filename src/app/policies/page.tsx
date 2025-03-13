"use client"

import { useState } from "react"
import { getPoliciesByType, InsuranceType } from "@/data/policies"
import { PolicyCard } from "@/components/policy-card"
import { EmptyPolicyState } from "@/components/empty-policy-state"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MessageSquare, Smile, Eye, Accessibility, Heart, Activity } from "lucide-react"

export default function PoliciesPage() {
  const policiesByType = getPoliciesByType()
  const [activeTab, setActiveTab] = useState<InsuranceType>("dental")
  
  // Get icon for insurance type
  const getInsuranceIcon = (type: InsuranceType) => {
    switch (type) {
      case "dental":
        return <Smile className="h-4 w-4" />
      case "vision":
        return <Eye className="h-4 w-4" />
      case "disability":
        return <Accessibility className="h-4 w-4" />
      case "life":
        return <Heart className="h-4 w-4" />
      case "supplemental":
        return <Activity className="h-4 w-4" />
      default:
        return null
    }
  }
  
  // Format insurance type for display
  const formatInsuranceType = (type: InsuranceType) => {
    return type.charAt(0).toUpperCase() + type.slice(1)
  }
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Policies</h1>
            <Button className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Request Policy Changes</span>
            </Button>
          </div>
          <p className="text-muted-foreground">
            View and manage company policies related to benefits administration.
          </p>
        </div>
        
        <Tabs defaultValue="dental" onValueChange={(value) => setActiveTab(value as InsuranceType)}>
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="dental" className="flex items-center gap-2">
              <Smile className="h-4 w-4" />
              <span>Dental</span>
            </TabsTrigger>
            <TabsTrigger value="vision" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>Vision</span>
            </TabsTrigger>
            <TabsTrigger value="disability" className="flex items-center gap-2">
              <Accessibility className="h-4 w-4" />
              <span>Disability</span>
            </TabsTrigger>
            <TabsTrigger value="life" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>Life</span>
            </TabsTrigger>
            <TabsTrigger value="supplemental" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              <span>Supplemental</span>
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(policiesByType).map(([type, policies]) => (
            <TabsContent key={type} value={type} className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                {getInsuranceIcon(type as InsuranceType)}
                <h2 className="text-2xl font-semibold">{formatInsuranceType(type as InsuranceType)} Insurance Policies</h2>
              </div>
              
              {policies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {policies.map((policy) => (
                    <PolicyCard key={policy.id} policy={policy} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {type === "life" && (
                    <EmptyPolicyState
                      title="No Life Insurance Policies"
                      description="Your organization doesn't currently have life insurance policies. Contact our sales team to learn about our life insurance offerings."
                    />
                  )}
                  {type === "supplemental" && (
                    <EmptyPolicyState
                      title="No Supplemental Health Policies"
                      description="Your organization doesn't currently have supplemental health insurance policies. Contact our sales team to learn about our supplemental health offerings."
                    />
                  )}
                  {type !== "life" && type !== "supplemental" && (
                    <EmptyPolicyState
                      title={`No ${formatInsuranceType(type as InsuranceType)} Policies`}
                      description={`There are currently no ${type} insurance policies available. Please check back later or contact the HR department.`}
                      showContactButton={false}
                    />
                  )}
                </div>
              )}
              
              {type === "disability" && (
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="text-lg font-medium mb-2">ADA Accommodations</h3>
                  <p className="text-muted-foreground mb-4">
                    Your organization has ADA Accommodation Requests enabled. Employees can request reasonable accommodations under the Americans with Disabilities Act.
                  </p>
                  <Button variant="outline" onClick={() => window.location.href = "/accommodations"}>
                    View Accommodations
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 