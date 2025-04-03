import { format } from "date-fns"

export type DocumentCategory = 
  | "claim-forms" 
  | "enrollment-kits" 
  | "member-guides" 
  | "benefit-summaries" 
  | "legal-notices"

export interface Document {
  id: string
  title: string
  description: string
  category: DocumentCategory
  fileUrl: string
  fileType: "pdf" | "docx" | "xlsx"
  fileSize: string
  uploadDate: string
  version?: string
  isRequired?: boolean
}

// Helper function to format date
export function formatDate(date: string): string {
  return format(new Date(date), "MMM d, yyyy")
}

// Mock data for documents
export const documents: Document[] = [
  // Claim Forms
  {
    id: "doc-001",
    title: "Dental Claim Form",
    description: "Standard form for dental insurance reimbursement claims.",
    category: "claim-forms",
    fileUrl: "/documents/forms/dental-claim-form.pdf",
    fileType: "pdf",
    fileSize: "245 KB",
    uploadDate: "2024-01-15",
    version: "2024-v1"
  },
  {
    id: "doc-002",
    title: "Vision Claim Form",
    description: "Form for vision care expenses including exams and materials.",
    category: "claim-forms",
    fileUrl: "/documents/forms/vision-claim-form.pdf",
    fileType: "pdf",
    fileSize: "210 KB",
    uploadDate: "2024-01-15",
    version: "2024-v1"
  },
  {
    id: "doc-003",
    title: "Short-Term Disability Claim Form",
    description: "Form for filing short-term disability benefits.",
    category: "claim-forms",
    fileUrl: "/documents/forms/std-claim-form.pdf",
    fileType: "pdf",
    fileSize: "320 KB",
    uploadDate: "2024-01-20",
    version: "2024-v1"
  },
  {
    id: "doc-004",
    title: "Long-Term Disability Claim Form",
    description: "Form for filing long-term disability claims.",
    category: "claim-forms",
    fileUrl: "/documents/forms/ltd-claim-form.pdf",
    fileType: "pdf",
    fileSize: "350 KB",
    uploadDate: "2024-01-20",
    version: "2024-v1"
  },
  {
    id: "doc-005",
    title: "Dependent Care Claim Form",
    description: "Form for dependent care expense reimbursement.",
    category: "claim-forms",
    fileUrl: "/documents/forms/dependent-care-claim-form.pdf",
    fileType: "pdf",
    fileSize: "230 KB",
    uploadDate: "2024-01-25",
    version: "2024-v1"
  },
  
  // Enrollment Kits
  {
    id: "doc-006",
    title: "Dental Insurance Enrollment Kit",
    description: "Information package for dental insurance enrollment.",
    category: "enrollment-kits",
    fileUrl: "/documents/enrollment/dental-enrollment-kit.pdf",
    fileType: "pdf",
    fileSize: "1.2 MB",
    uploadDate: "2023-11-01",
    version: "2024"
  },
  {
    id: "doc-007",
    title: "Vision Insurance Enrollment Kit",
    description: "Enrollment materials for vision insurance.",
    category: "enrollment-kits",
    fileUrl: "/documents/enrollment/vision-enrollment-kit.pdf",
    fileType: "pdf",
    fileSize: "950 KB",
    uploadDate: "2023-11-01",
    version: "2024"
  },
  {
    id: "doc-008",
    title: "Disability Insurance Enrollment Kit",
    description: "Guide to disability insurance enrollment options.",
    category: "enrollment-kits",
    fileUrl: "/documents/enrollment/disability-enrollment-kit.pdf",
    fileType: "pdf",
    fileSize: "1.5 MB",
    uploadDate: "2023-11-05",
    version: "2024"
  },
  {
    id: "doc-009",
    title: "New Employee Benefits Enrollment Guide",
    description: "Overview of benefits for new employees.",
    category: "enrollment-kits",
    fileUrl: "/documents/enrollment/new-employee-benefits-guide.pdf",
    fileType: "pdf",
    fileSize: "2.8 MB",
    uploadDate: "2023-12-10",
    version: "2024",
    isRequired: true
  },
  
  // Member Guides
  {
    id: "doc-010",
    title: "Dental Plan Member Guide",
    description: "Guide for dental plan members with coverage details.",
    category: "member-guides",
    fileUrl: "/documents/guides/dental-member-guide.pdf",
    fileType: "pdf",
    fileSize: "1.8 MB",
    uploadDate: "2024-01-05",
    version: "2024"
  },
  {
    id: "doc-011",
    title: "Vision Plan Member Guide",
    description: "Information for vision plan members on benefits and claims.",
    category: "member-guides",
    fileUrl: "/documents/guides/vision-member-guide.pdf",
    fileType: "pdf",
    fileSize: "1.5 MB",
    uploadDate: "2024-01-05",
    version: "2024"
  },
  {
    id: "doc-012",
    title: "Disability Insurance Member Guide",
    description: "Guide for disability insurance coverage and claims.",
    category: "member-guides",
    fileUrl: "/documents/guides/disability-member-guide.pdf",
    fileType: "pdf",
    fileSize: "2.1 MB",
    uploadDate: "2024-01-10",
    version: "2024"
  },
  {
    id: "doc-013",
    title: "Online Portal User Guide",
    description: "Instructions for using the online member portal.",
    category: "member-guides",
    fileUrl: "/documents/guides/portal-user-guide.pdf",
    fileType: "pdf",
    fileSize: "1.2 MB",
    uploadDate: "2024-01-15",
    version: "2.1"
  },
  
  // Benefit Summaries
  {
    id: "doc-014",
    title: "Dental Plan Benefits Summary",
    description: "Overview of dental plan benefits and coverage.",
    category: "benefit-summaries",
    fileUrl: "/documents/summaries/dental-benefits-summary.pdf",
    fileType: "pdf",
    fileSize: "420 KB",
    uploadDate: "2024-01-02",
    version: "2024"
  },
  {
    id: "doc-015",
    title: "Vision Plan Benefits Summary",
    description: "Summary of vision plan benefits and allowances.",
    category: "benefit-summaries",
    fileUrl: "/documents/summaries/vision-benefits-summary.pdf",
    fileType: "pdf",
    fileSize: "380 KB",
    uploadDate: "2024-01-02",
    version: "2024"
  },
  {
    id: "doc-016",
    title: "Short-Term Disability Benefits Summary",
    description: "Overview of short-term disability coverage.",
    category: "benefit-summaries",
    fileUrl: "/documents/summaries/std-benefits-summary.pdf",
    fileType: "pdf",
    fileSize: "410 KB",
    uploadDate: "2024-01-03",
    version: "2024"
  },
  {
    id: "doc-017",
    title: "Long-Term Disability Benefits Summary",
    description: "Summary of long-term disability benefits.",
    category: "benefit-summaries",
    fileUrl: "/documents/summaries/ltd-benefits-summary.pdf",
    fileType: "pdf",
    fileSize: "430 KB",
    uploadDate: "2024-01-03",
    version: "2024"
  },
  {
    id: "doc-018",
    title: "Annual Benefits Overview",
    description: "Comprehensive summary of all employee benefits.",
    category: "benefit-summaries",
    fileUrl: "/documents/summaries/annual-benefits-overview.pdf",
    fileType: "pdf",
    fileSize: "1.1 MB",
    uploadDate: "2024-01-05",
    version: "2024",
    isRequired: true
  },
  
  // Legal Notices
  {
    id: "doc-019",
    title: "Customer Privacy Notice",
    description: "Information about customer personal data protection.",
    category: "legal-notices",
    fileUrl: "/documents/legal/privacy-notice.pdf",
    fileType: "pdf",
    fileSize: "320 KB",
    uploadDate: "2023-12-01",
    version: "2023-v2",
    isRequired: true
  },
  {
    id: "doc-020",
    title: "HIPAA Privacy Notice",
    description: "Notice explaining personal health information rights.",
    category: "legal-notices",
    fileUrl: "/documents/legal/hipaa-privacy-notice.pdf",
    fileType: "pdf",
    fileSize: "450 KB",
    uploadDate: "2023-12-01",
    version: "2023",
    isRequired: true
  },
  {
    id: "doc-021",
    title: "Summary Plan Description",
    description: "Legal document describing insurance plan terms.",
    category: "legal-notices",
    fileUrl: "/documents/legal/summary-plan-description.pdf",
    fileType: "pdf",
    fileSize: "2.5 MB",
    uploadDate: "2023-12-15",
    version: "2024",
    isRequired: true
  }
]

// Group documents by category
export function getDocumentsByCategory(): Record<DocumentCategory, Document[]> {
  return {
    "claim-forms": documents.filter(doc => doc.category === "claim-forms"),
    "enrollment-kits": documents.filter(doc => doc.category === "enrollment-kits"),
    "member-guides": documents.filter(doc => doc.category === "member-guides"),
    "benefit-summaries": documents.filter(doc => doc.category === "benefit-summaries"),
    "legal-notices": documents.filter(doc => doc.category === "legal-notices")
  }
} 