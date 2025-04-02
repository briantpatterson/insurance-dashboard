// Define claim status types
export type ClaimStatus = "pending" | "approved" | "denied" | "in_review" | "processing" | "paid";

// Define claim types
export type ClaimType = "medical" | "dental" | "vision" | "pharmacy" | "hospital" | "emergency";

// Define claim interface
export interface Claim {
  id: string;
  claimNumber: string;
  patientName: string;
  type: ClaimType;
  dateReceived: string;
  status: ClaimStatus;
  paidDate?: string;
  amount: number;
  providerName: string;
  serviceDate: string;
  description: string;
}

// Helper function to get status badge variant
export const getClaimStatusColor = (status: ClaimStatus): string => {
  switch (status) {
    case "pending":
      return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800";
    case "approved":
      return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800";
    case "denied":
      return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800";
    case "in_review":
      return "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800";
    case "processing":
      return "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800";
    case "paid":
      return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800";
    default:
      return "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
  }
};

// Helper function to get formatted status display
export const getClaimStatusDisplay = (status: ClaimStatus): string => {
  switch (status) {
    case "pending":
      return "Pending";
    case "approved":
      return "Approved";
    case "denied":
      return "Denied";
    case "in_review":
      return "In Review";
    case "processing":
      return "Processing";
    case "paid":
      return "Paid";
    default:
      return status;
  }
};

// Helper function to get formatted claim type display
export const getClaimTypeDisplay = (type: ClaimType): string => {
  switch (type) {
    case "medical":
      return "Medical";
    case "dental":
      return "Dental";
    case "vision":
      return "Vision";
    case "pharmacy":
      return "Pharmacy";
    case "hospital":
      return "Hospital";
    case "emergency":
      return "Emergency";
    default:
      return type;
  }
};

// Mock data for claims
export const claims: Claim[] = [
  {
    id: "claim-001",
    claimNumber: "CLM-2024-001",
    patientName: "John Smith",
    type: "medical",
    dateReceived: "2024-03-15",
    status: "paid",
    paidDate: "2024-03-28",
    amount: 320.50,
    providerName: "Dr. Sarah Johnson",
    serviceDate: "2024-03-10",
    description: "Annual physical examination"
  },
  {
    id: "claim-002",
    claimNumber: "CLM-2024-002",
    patientName: "Sarah Smith",
    type: "dental",
    dateReceived: "2024-03-18",
    status: "approved",
    amount: 175.00,
    providerName: "Bright Smile Dental",
    serviceDate: "2024-03-16",
    description: "Dental cleaning and examination"
  },
  {
    id: "claim-003",
    claimNumber: "CLM-2024-003",
    patientName: "Michael Smith",
    type: "vision",
    dateReceived: "2024-03-20",
    status: "pending",
    amount: 250.00,
    providerName: "Clear Vision Eye Care",
    serviceDate: "2024-03-18",
    description: "Eye examination and prescription update"
  },
  {
    id: "claim-004",
    claimNumber: "CLM-2024-004",
    patientName: "John Smith",
    type: "pharmacy",
    dateReceived: "2024-03-22",
    status: "in_review",
    amount: 85.75,
    providerName: "HealthPlus Pharmacy",
    serviceDate: "2024-03-22",
    description: "Prescription medication"
  },
  {
    id: "claim-005",
    claimNumber: "CLM-2024-005",
    patientName: "Sarah Smith",
    type: "medical",
    dateReceived: "2024-03-25",
    status: "processing",
    amount: 540.00,
    providerName: "Metro Medical Center",
    serviceDate: "2024-03-23",
    description: "Specialist consultation"
  },
  {
    id: "claim-006",
    claimNumber: "CLM-2024-006",
    patientName: "Michael Smith",
    type: "hospital",
    dateReceived: "2024-03-28",
    status: "denied",
    amount: 1250.00,
    providerName: "City General Hospital",
    serviceDate: "2024-03-26",
    description: "Emergency room visit"
  },
  {
    id: "claim-007",
    claimNumber: "CLM-2024-007",
    patientName: "John Smith",
    type: "medical",
    dateReceived: "2024-04-01",
    status: "pending",
    amount: 180.00,
    providerName: "Dr. Robert Williams",
    serviceDate: "2024-03-30",
    description: "Follow-up appointment"
  },
  {
    id: "claim-008",
    claimNumber: "CLM-2024-008",
    patientName: "Sarah Smith",
    type: "dental",
    dateReceived: "2024-04-05",
    status: "approved",
    amount: 350.00,
    providerName: "Bright Smile Dental",
    serviceDate: "2024-04-03",
    description: "Dental filling procedure"
  },
  {
    id: "claim-009",
    claimNumber: "CLM-2024-009",
    patientName: "Michael Smith",
    type: "emergency",
    dateReceived: "2024-04-10",
    status: "processing",
    amount: 1875.50,
    providerName: "Emergency Medical Services",
    serviceDate: "2024-04-09",
    description: "Ambulance transportation"
  },
  {
    id: "claim-010",
    claimNumber: "CLM-2024-010",
    patientName: "John Smith",
    type: "pharmacy",
    dateReceived: "2024-04-12",
    status: "paid",
    paidDate: "2024-04-18",
    amount: 125.30,
    providerName: "HealthPlus Pharmacy",
    serviceDate: "2024-04-12",
    description: "Prescription refill"
  }
]; 