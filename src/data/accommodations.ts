import { format } from "date-fns"

export type AccommodationStatus = "pending" | "approved" | "denied" | "implemented" | "under review"

export type AccommodationType = 
  | "physical" 
  | "schedule" 
  | "equipment" 
  | "service animal" 
  | "remote work" 
  | "communication" 
  | "environmental" 
  | "other"

export interface AccommodationDocument {
  name: string
  url: string
  uploadDate: string
}

export interface TimelineEvent {
  date: string
  action: string
  by?: string
  comment?: string
}

export interface Accommodation {
  id: string
  employeeId: string
  employeeName: string
  type: AccommodationType
  status: AccommodationStatus
  requestDate: string
  description: string
  requestedBy: string
  medicallyNecessary: boolean
  documents?: AccommodationDocument[]
  notes?: string
  timeline?: TimelineEvent[]
  implementationDetails?: string
  reviewDate?: string
}

// Helper function to format date
export function formatDate(date: string): string {
  return format(new Date(date), "MMM d, yyyy")
}

// Helper function to get status badge styling
export const getAccommodationStatusColor = (status: AccommodationStatus): string => {
  switch (status) {
    case "pending":
      return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800";
    case "approved":
      return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800";
    case "denied":
      return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800";
    case "implemented":
      return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800";
    case "under review":
      return "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800";
    default:
      return "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
  }
};

// Helper function to get formatted status display
export const getAccommodationStatusDisplay = (status: AccommodationStatus): string => {
  switch (status) {
    case "pending":
      return "Pending";
    case "approved":
      return "Approved";
    case "denied":
      return "Denied";
    case "implemented":
      return "Implemented";
    case "under review":
      return "Under Review";
    default:
      return status;
  }
};

// Helper function to get formatted accommodation type display
export const getAccommodationTypeDisplay = (type: AccommodationType): string => {
  return type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Mock data
export const accommodations: Accommodation[] = [
  {
    id: "acc-001",
    employeeId: "emp-001",
    employeeName: "John Smith",
    type: "equipment",
    status: "implemented",
    requestDate: "2024-09-15",
    description: "Ergonomic keyboard and mouse due to carpal tunnel syndrome",
    requestedBy: "John Smith",
    medicallyNecessary: true,
    documents: [
      {
        name: "Medical Documentation.pdf",
        url: "/documents/medical-doc-001.pdf",
        uploadDate: "2024-09-15"
      }
    ],
    implementationDetails: "Provided Microsoft Ergonomic Keyboard and Logitech MX Vertical Mouse",
    timeline: [
      {
        date: "2024-09-15T10:30:00Z",
        action: "Accommodation request submitted",
        by: "John Smith"
      },
      {
        date: "2024-09-16T14:15:00Z",
        action: "Request reviewed",
        by: "HR Department"
      },
      {
        date: "2024-09-18T09:30:00Z",
        action: "Accommodation approved",
        by: "Sarah Johnson",
        comment: "Medical documentation supports the need for ergonomic equipment."
      },
      {
        date: "2024-09-25T13:45:00Z",
        action: "Equipment ordered",
        by: "IT Department"
      },
      {
        date: "2024-10-02T10:00:00Z",
        action: "Equipment delivered and installed",
        by: "IT Department",
        comment: "Employee trained on proper ergonomic setup."
      }
    ]
  },
  {
    id: "acc-002",
    employeeId: "emp-002",
    employeeName: "Emily Davis",
    type: "schedule",
    status: "approved",
    requestDate: "2024-10-05",
    description: "Flexible work schedule for medical appointments",
    requestedBy: "Emily Davis",
    medicallyNecessary: true,
    documents: [
      {
        name: "Doctor's Note.pdf",
        url: "/documents/doctors-note-002.pdf",
        uploadDate: "2024-10-05"
      }
    ],
    notes: "Employee requires regular medical appointments twice a week for the next 3 months.",
    timeline: [
      {
        date: "2024-10-05T09:15:00Z",
        action: "Accommodation request submitted",
        by: "Emily Davis"
      },
      {
        date: "2024-10-06T11:30:00Z",
        action: "Request reviewed",
        by: "HR Department"
      },
      {
        date: "2024-10-08T14:45:00Z",
        action: "Accommodation approved",
        by: "Michael Brown",
        comment: "Approved flexible schedule on Tuesdays and Thursdays."
      }
    ]
  },
  {
    id: "acc-003",
    employeeId: "emp-003",
    employeeName: "Michael Johnson",
    type: "remote work",
    status: "pending",
    requestDate: "2024-10-20",
    description: "Remote work accommodation due to immunocompromised condition",
    requestedBy: "Michael Johnson",
    medicallyNecessary: true,
    documents: [
      {
        name: "Medical Certificate.pdf",
        url: "/documents/medical-certificate-003.pdf",
        uploadDate: "2024-10-20"
      }
    ],
    timeline: [
      {
        date: "2024-10-20T13:45:00Z",
        action: "Accommodation request submitted",
        by: "Michael Johnson"
      },
      {
        date: "2024-10-21T10:20:00Z",
        action: "Initial review completed",
        by: "HR Department",
        comment: "Additional information requested from department manager regarding essential job functions."
      }
    ]
  },
  {
    id: "acc-004",
    employeeId: "emp-004",
    employeeName: "David Wilson",
    type: "environmental",
    status: "implemented",
    requestDate: "2024-08-10",
    description: "Air purifier and fragrance-free zone due to severe allergies",
    requestedBy: "David Wilson",
    medicallyNecessary: true,
    documents: [
      {
        name: "Allergy Test Results.pdf",
        url: "/documents/allergy-results-004.pdf",
        uploadDate: "2024-08-10"
      }
    ],
    implementationDetails: "Installed HEPA air purifier and designated a 20-foot radius as fragrance-free zone",
    timeline: [
      {
        date: "2024-08-10T09:30:00Z",
        action: "Accommodation request submitted",
        by: "David Wilson"
      },
      {
        date: "2024-08-12T14:15:00Z",
        action: "Request reviewed",
        by: "HR Department"
      },
      {
        date: "2024-08-15T11:30:00Z",
        action: "Accommodation approved",
        by: "Sarah Johnson"
      },
      {
        date: "2024-08-20T15:45:00Z",
        action: "Air purifier installed",
        by: "Facilities Management"
      },
      {
        date: "2024-08-21T09:00:00Z",
        action: "Notification sent to nearby employees",
        by: "HR Department",
        comment: "Email sent to employees within the designated zone explaining the fragrance-free policy."
      }
    ]
  },
  {
    id: "acc-005",
    employeeId: "emp-005",
    employeeName: "Jennifer Martinez",
    type: "service animal",
    status: "approved",
    requestDate: "2024-09-25",
    description: "Service dog for anxiety disorder",
    requestedBy: "Jennifer Martinez",
    medicallyNecessary: true,
    documents: [
      {
        name: "Medical Documentation.pdf",
        url: "/documents/medical-doc-005.pdf",
        uploadDate: "2024-09-25"
      },
      {
        name: "Service Animal Certification.pdf",
        url: "/documents/service-animal-cert-005.pdf",
        uploadDate: "2024-09-25"
      }
    ],
    notes: "Service animal is a trained golden retriever named Max.",
    timeline: [
      {
        date: "2024-09-25T10:15:00Z",
        action: "Accommodation request submitted",
        by: "Jennifer Martinez"
      },
      {
        date: "2024-09-26T13:30:00Z",
        action: "Request reviewed",
        by: "HR Department"
      },
      {
        date: "2024-09-30T11:45:00Z",
        action: "Accommodation approved",
        by: "Michael Brown",
        comment: "Service animal meets all requirements. Facilities notified to prepare appropriate space."
      }
    ]
  },
  {
    id: "acc-006",
    employeeId: "emp-006",
    employeeName: "Robert Brown",
    type: "physical",
    status: "denied",
    requestDate: "2024-10-01",
    description: "Private office due to ADHD",
    requestedBy: "Robert Brown",
    medicallyNecessary: false,
    notes: "Request denied as medical documentation did not support the specific accommodation. Alternative accommodations offered: noise-cancelling headphones and privacy screen.",
    timeline: [
      {
        date: "2024-10-01T14:45:00Z",
        action: "Accommodation request submitted",
        by: "Robert Brown"
      },
      {
        date: "2024-10-02T10:10:00Z",
        action: "Request reviewed",
        by: "HR Department"
      },
      {
        date: "2024-10-05T16:30:00Z",
        action: "Accommodation denied",
        by: "Sarah Johnson",
        comment: "Medical documentation does not support need for private office. Alternative accommodations offered."
      }
    ]
  },
  {
    id: "acc-007",
    employeeId: "emp-007",
    employeeName: "Lisa Garcia",
    type: "communication",
    status: "implemented",
    requestDate: "2024-08-15",
    description: "ASL interpreter for meetings",
    requestedBy: "Lisa Garcia",
    medicallyNecessary: true,
    implementationDetails: "Contracted with SignTalk LLC to provide ASL interpreters for all company meetings",
    timeline: [
      {
        date: "2024-08-15T11:20:00Z",
        action: "Accommodation request submitted",
        by: "Lisa Garcia"
      },
      {
        date: "2024-08-16T09:45:00Z",
        action: "Request reviewed",
        by: "HR Department"
      },
      {
        date: "2024-08-18T14:30:00Z",
        action: "Accommodation approved",
        by: "Michael Brown"
      },
      {
        date: "2024-08-25T10:00:00Z",
        action: "ASL service contracted",
        by: "HR Department",
        comment: "Contract signed with SignTalk LLC for ongoing interpreter services."
      }
    ]
  },
  {
    id: "acc-008",
    employeeId: "emp-008",
    employeeName: "Thomas Anderson",
    type: "equipment",
    status: "under review",
    requestDate: "2024-10-15",
    description: "Standing desk and anti-fatigue mat due to back issues",
    requestedBy: "Thomas Anderson",
    medicallyNecessary: true,
    documents: [
      {
        name: "Chiropractor Note.pdf",
        url: "/documents/chiro-note-008.pdf",
        uploadDate: "2024-10-15"
      }
    ],
    timeline: [
      {
        date: "2024-10-15T15:30:00Z",
        action: "Accommodation request submitted",
        by: "Thomas Anderson"
      },
      {
        date: "2024-10-16T10:15:00Z",
        action: "Initial review completed",
        by: "HR Department"
      },
      {
        date: "2024-10-18T13:45:00Z",
        action: "Additional medical documentation requested",
        by: "Sarah Johnson",
        comment: "Need clarification from physician on specific requirements for standing desk height and usage duration."
      }
    ],
    reviewDate: "2024-10-25"
  },
  {
    id: "acc-009",
    employeeId: "emp-009",
    employeeName: "Sarah Johnson",
    type: "schedule",
    status: "implemented",
    requestDate: "2024-07-10",
    description: "Modified work schedule for childcare needs",
    requestedBy: "Sarah Johnson",
    medicallyNecessary: false,
    implementationDetails: "Approved work schedule of 7:00 AM - 3:30 PM to accommodate school pickup",
    timeline: [
      {
        date: "2024-07-10T13:45:00Z",
        action: "Accommodation request submitted",
        by: "Sarah Johnson"
      },
      {
        date: "2024-07-11T09:30:00Z",
        action: "Request reviewed",
        by: "HR Department"
      },
      {
        date: "2024-07-15T14:20:00Z",
        action: "Accommodation approved",
        by: "Michael Brown",
        comment: "Approved as a workplace flexibility accommodation rather than ADA accommodation."
      }
    ]
  },
  {
    id: "acc-010",
    employeeId: "emp-010",
    employeeName: "James Williams",
    type: "other",
    status: "pending",
    requestDate: "2024-10-18",
    description: "Designated quiet space for prayer/meditation",
    requestedBy: "James Williams",
    medicallyNecessary: false,
    timeline: [
      {
        date: "2024-10-18T09:30:00Z",
        action: "Accommodation request submitted",
        by: "James Williams"
      },
      {
        date: "2024-10-19T11:15:00Z",
        action: "Request received",
        by: "HR Department",
        comment: "Consulting with facilities management on available spaces."
      }
    ]
  }
] 