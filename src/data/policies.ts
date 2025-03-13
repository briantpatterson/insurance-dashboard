import { format } from "date-fns"

export type InsuranceType = "dental" | "vision" | "disability" | "life" | "supplemental"

export type PolicyStatus = "active" | "pending" | "archived"

export interface Policy {
  id: string
  title: string
  description: string
  insuranceType: InsuranceType
  status: PolicyStatus
  effectiveDate: string
  lastUpdated: string
  documentUrl?: string
  requiresAcknowledgement?: boolean
  isAcknowledged?: boolean
}

// Helper function to format date
export function formatDate(date: string): string {
  return format(new Date(date), "MMM d, yyyy")
}

// Mock data for policies
export const policies: Policy[] = [
  // Dental Policies
  {
    id: "pol-001",
    title: "Dental Coverage Policy",
    description: "Comprehensive overview of dental coverage including preventive, basic, and major services.",
    insuranceType: "dental",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-11-15",
    documentUrl: "/documents/policies/dental-coverage-policy.pdf"
  },
  {
    id: "pol-002",
    title: "Dental Provider Network Guidelines",
    description: "Information about in-network and out-of-network dental providers and coverage differences.",
    insuranceType: "dental",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-10-20",
    documentUrl: "/documents/policies/dental-provider-network.pdf"
  },
  {
    id: "pol-003",
    title: "Orthodontic Treatment Coverage",
    description: "Details about orthodontic coverage, limitations, and reimbursement procedures.",
    insuranceType: "dental",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-11-05",
    documentUrl: "/documents/policies/orthodontic-coverage.pdf"
  },
  
  // Vision Policies
  {
    id: "pol-004",
    title: "Vision Coverage Policy",
    description: "Overview of vision benefits including eye exams, frames, lenses, and contact lenses.",
    insuranceType: "vision",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-11-10",
    documentUrl: "/documents/policies/vision-coverage-policy.pdf"
  },
  {
    id: "pol-005",
    title: "Vision Provider Network",
    description: "Information about in-network vision providers, retail locations, and online options.",
    insuranceType: "vision",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-10-25",
    documentUrl: "/documents/policies/vision-provider-network.pdf"
  },
  {
    id: "pol-006",
    title: "LASIK and Corrective Surgery Benefits",
    description: "Guidelines for LASIK and other corrective eye surgery coverage and discounts.",
    insuranceType: "vision",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-11-12",
    documentUrl: "/documents/policies/lasik-benefits.pdf"
  },
  
  // Disability Policies
  {
    id: "pol-007",
    title: "Short-Term Disability Policy",
    description: "Comprehensive overview of short-term disability coverage, eligibility, and claim procedures.",
    insuranceType: "disability",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-11-18",
    documentUrl: "/documents/policies/std-policy.pdf",
    requiresAcknowledgement: true,
    isAcknowledged: true
  },
  {
    id: "pol-008",
    title: "Long-Term Disability Policy",
    description: "Details about long-term disability benefits, waiting periods, and benefit calculations.",
    insuranceType: "disability",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-11-20",
    documentUrl: "/documents/policies/ltd-policy.pdf",
    requiresAcknowledgement: true,
    isAcknowledged: false
  },
  {
    id: "pol-009",
    title: "ADA Accommodation Requests",
    description: "Guidelines for requesting and implementing reasonable accommodations under the Americans with Disabilities Act.",
    insuranceType: "disability",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-12-05",
    documentUrl: "/documents/policies/ada-accommodations.pdf",
    requiresAcknowledgement: true,
    isAcknowledged: true
  },
  {
    id: "pol-010",
    title: "Return to Work Program",
    description: "Procedures and guidelines for transitioning back to work after disability leave.",
    insuranceType: "disability",
    status: "active",
    effectiveDate: "2024-01-01",
    lastUpdated: "2023-11-25",
    documentUrl: "/documents/policies/return-to-work.pdf"
  },
  
  // Life Insurance Policies (empty for product discovery)
  
  // Supplemental Health Policies (empty for product discovery)
]

// Group policies by insurance type
export function getPoliciesByType(): Record<InsuranceType, Policy[]> {
  return {
    dental: policies.filter(policy => policy.insuranceType === "dental"),
    vision: policies.filter(policy => policy.insuranceType === "vision"),
    disability: policies.filter(policy => policy.insuranceType === "disability"),
    life: policies.filter(policy => policy.insuranceType === "life"),
    supplemental: policies.filter(policy => policy.insuranceType === "supplemental")
  }
} 