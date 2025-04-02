import { format, addDays, subDays } from "date-fns"

export type LeaveStatus = "approved" | "pending" | "denied" | "completed" | "cancelled";

export type LeaveType = "vacation" | "sick" | "personal" | "bereavement" | "maternity" | "paternity" | "medical" | "jury duty" | "military" | "unpaid";

export interface LeaveDocument {
  name: string;
  url: string;
  uploadDate: string;
}

export interface TimelineEvent {
  date: string;
  action: string;
  by?: string;
  comment?: string;
}

export interface Leave {
  id: string;
  employeeId: string;
  employeeName: string;
  type: LeaveType;
  status: LeaveStatus;
  startDate: string;
  endDate: string;
  reason: string;
  isFmla: boolean;
  documents?: LeaveDocument[];
  notes?: string;
  timeline?: TimelineEvent[];
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return `${format(start, "MMM d, yyyy")} - ${format(end, "MMM d, yyyy")}`;
}

export function calculateLeaveDuration(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}

// Helper function to get status badge styling
export const getLeaveStatusColor = (status: LeaveStatus): string => {
  switch (status) {
    case "pending":
      return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800";
    case "approved":
      return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800";
    case "denied":
      return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800";
    case "completed":
      return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800";
    case "cancelled":
      return "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
    default:
      return "text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700";
  }
};

// Helper function to get formatted status display
export const getLeaveStatusDisplay = (status: LeaveStatus): string => {
  switch (status) {
    case "pending":
      return "Pending";
    case "approved":
      return "Approved";
    case "denied":
      return "Denied";
    case "completed":
      return "Completed";
    case "cancelled":
      return "Cancelled";
    default:
      return status;
  }
};

export const leaves: Leave[] = [
  {
    id: "leave-001",
    employeeId: "emp-001",
    employeeName: "John Smith",
    type: "vacation",
    status: "approved",
    startDate: "2025-01-15",
    endDate: "2025-01-22",
    reason: "Annual family vacation",
    isFmla: false,
    documents: [
      {
        name: "Vacation Request Form.pdf",
        url: "/documents/vacation-request-001.pdf",
        uploadDate: "2024-12-01"
      }
    ],
    timeline: [
      {
        date: "2024-12-01T10:30:00Z",
        action: "Leave request submitted",
        by: "John Smith"
      },
      {
        date: "2024-12-02T14:15:00Z",
        action: "Leave request approved",
        by: "Sarah Johnson",
        comment: "Approved as requested. Please ensure your projects are covered during your absence."
      }
    ]
  },
  {
    id: "leave-002",
    employeeId: "emp-002",
    employeeName: "Emily Davis",
    type: "sick",
    status: "completed",
    startDate: "2024-11-10",
    endDate: "2024-11-12",
    reason: "Flu",
    isFmla: false,
    timeline: [
      {
        date: "2024-11-10T08:15:00Z",
        action: "Sick leave notification submitted",
        by: "Emily Davis"
      },
      {
        date: "2024-11-10T09:30:00Z",
        action: "Sick leave approved",
        by: "Michael Brown"
      },
      {
        date: "2024-11-13T08:00:00Z",
        action: "Return to work confirmed",
        by: "Emily Davis"
      }
    ]
  },
  {
    id: "leave-003",
    employeeId: "emp-003",
    employeeName: "Michael Johnson",
    type: "maternity",
    status: "pending",
    startDate: "2025-03-01",
    endDate: "2025-06-01",
    reason: "Maternity leave",
    isFmla: true,
    documents: [
      {
        name: "FMLA Request Form.pdf",
        url: "/documents/fmla-request-003.pdf",
        uploadDate: "2025-01-15"
      },
      {
        name: "Medical Certificate.pdf",
        url: "/documents/medical-certificate-003.pdf",
        uploadDate: "2025-01-15"
      }
    ],
    notes: "Requesting the full 12 weeks of FMLA leave. Planning to use 2 weeks of vacation time first, then 10 weeks of FMLA.",
    timeline: [
      {
        date: "2025-01-15T11:45:00Z",
        action: "FMLA leave request submitted",
        by: "Michael Johnson"
      },
      {
        date: "2025-01-16T10:20:00Z",
        action: "HR review initiated",
        by: "HR Department"
      },
      {
        date: "2025-01-18T14:30:00Z",
        action: "Additional documentation requested",
        by: "Sarah Johnson",
        comment: "Please provide doctor's note with expected delivery date."
      }
    ]
  },
  {
    id: "leave-004",
    employeeId: "emp-004",
    employeeName: "David Wilson",
    type: "bereavement",
    status: "approved",
    startDate: "2024-12-05",
    endDate: "2024-12-09",
    reason: "Family funeral",
    isFmla: false,
    timeline: [
      {
        date: "2024-12-04T16:20:00Z",
        action: "Bereavement leave request submitted",
        by: "David Wilson"
      },
      {
        date: "2024-12-04T17:05:00Z",
        action: "Bereavement leave approved",
        by: "Sarah Johnson",
        comment: "Our condolences for your loss. Take the time you need."
      }
    ]
  },
  {
    id: "leave-005",
    employeeId: "emp-005",
    employeeName: "Jennifer Martinez",
    type: "medical",
    status: "denied",
    startDate: "2025-02-10",
    endDate: "2025-02-28",
    reason: "Elective surgery recovery",
    isFmla: false,
    documents: [
      {
        name: "Medical Leave Request.pdf",
        url: "/documents/medical-leave-005.pdf",
        uploadDate: "2025-01-20"
      }
    ],
    notes: "Request denied due to insufficient medical documentation. Please resubmit with detailed doctor's note.",
    timeline: [
      {
        date: "2025-01-20T09:15:00Z",
        action: "Medical leave request submitted",
        by: "Jennifer Martinez"
      },
      {
        date: "2025-01-22T11:30:00Z",
        action: "Leave request denied",
        by: "HR Department",
        comment: "Insufficient medical documentation provided. Please resubmit with detailed doctor's note including recovery timeline."
      }
    ]
  },
  {
    id: "leave-006",
    employeeId: "emp-006",
    employeeName: "Robert Brown",
    type: "personal",
    status: "cancelled",
    startDate: "2025-01-05",
    endDate: "2025-01-07",
    reason: "Personal matters",
    isFmla: false,
    timeline: [
      {
        date: "2024-12-20T14:45:00Z",
        action: "Personal leave request submitted",
        by: "Robert Brown"
      },
      {
        date: "2024-12-21T10:10:00Z",
        action: "Leave request approved",
        by: "Michael Brown"
      },
      {
        date: "2024-12-30T16:30:00Z",
        action: "Leave request cancelled",
        by: "Robert Brown",
        comment: "Personal matters resolved, no longer need time off."
      }
    ]
  },
  {
    id: "leave-007",
    employeeId: "emp-007",
    employeeName: "Lisa Garcia",
    type: "jury duty",
    status: "approved",
    startDate: "2025-02-03",
    endDate: "2025-02-14",
    reason: "Jury duty service",
    isFmla: false,
    documents: [
      {
        name: "Jury Duty Summons.pdf",
        url: "/documents/jury-summons-007.pdf",
        uploadDate: "2025-01-10"
      }
    ],
    timeline: [
      {
        date: "2025-01-10T11:20:00Z",
        action: "Jury duty leave request submitted",
        by: "Lisa Garcia"
      },
      {
        date: "2025-01-11T09:45:00Z",
        action: "Leave request approved",
        by: "Sarah Johnson"
      }
    ]
  },
  {
    id: "leave-008",
    employeeId: "emp-008",
    employeeName: "Thomas Anderson",
    type: "military",
    status: "approved",
    startDate: "2025-03-15",
    endDate: "2025-04-15",
    reason: "Annual military training",
    isFmla: false,
    documents: [
      {
        name: "Military Orders.pdf",
        url: "/documents/military-orders-008.pdf",
        uploadDate: "2025-02-01"
      }
    ],
    timeline: [
      {
        date: "2025-02-01T15:30:00Z",
        action: "Military leave request submitted",
        by: "Thomas Anderson"
      },
      {
        date: "2025-02-03T10:15:00Z",
        action: "Leave request approved",
        by: "HR Department",
        comment: "Approved as required by USERRA."
      }
    ]
  },
  {
    id: "leave-009",
    employeeId: "emp-009",
    employeeName: "Sarah Johnson",
    type: "vacation",
    status: "pending",
    startDate: "2025-04-10",
    endDate: "2025-04-17",
    reason: "Spring break with family",
    isFmla: false,
    timeline: [
      {
        date: "2025-03-01T13:45:00Z",
        action: "Vacation request submitted",
        by: "Sarah Johnson"
      }
    ]
  },
  {
    id: "leave-010",
    employeeId: "emp-010",
    employeeName: "James Williams",
    type: "paternity",
    status: "approved",
    startDate: "2025-05-01",
    endDate: "2025-05-15",
    reason: "Paternity leave for newborn",
    isFmla: true,
    documents: [
      {
        name: "FMLA Request Form.pdf",
        url: "/documents/fmla-request-010.pdf",
        uploadDate: "2025-03-15"
      },
      {
        name: "Birth Certificate.pdf",
        url: "/documents/birth-certificate-010.pdf",
        uploadDate: "2025-05-02"
      }
    ],
    timeline: [
      {
        date: "2025-03-15T09:30:00Z",
        action: "Paternity leave request submitted",
        by: "James Williams"
      },
      {
        date: "2025-03-17T14:20:00Z",
        action: "Leave request approved",
        by: "HR Department"
      }
    ]
  },
  {
    id: "leave-011",
    employeeId: "emp-011",
    employeeName: "Maria Rodriguez",
    type: "sick",
    status: "completed",
    startDate: "2024-11-20",
    endDate: "2024-11-21",
    reason: "Migraine",
    isFmla: false,
    timeline: [
      {
        date: "2024-11-20T07:30:00Z",
        action: "Sick leave notification submitted",
        by: "Maria Rodriguez"
      },
      {
        date: "2024-11-20T08:15:00Z",
        action: "Sick leave approved",
        by: "David Wilson"
      },
      {
        date: "2024-11-22T08:00:00Z",
        action: "Return to work confirmed",
        by: "Maria Rodriguez"
      }
    ]
  },
  {
    id: "leave-012",
    employeeId: "emp-012",
    employeeName: "Kevin Lee",
    type: "unpaid",
    status: "approved",
    startDate: "2025-06-01",
    endDate: "2025-06-30",
    reason: "Personal sabbatical",
    isFmla: false,
    notes: "Approved unpaid leave for personal development. Position will be held.",
    timeline: [
      {
        date: "2025-04-01T10:00:00Z",
        action: "Unpaid leave request submitted",
        by: "Kevin Lee",
        comment: "Requesting 30 days unpaid leave for personal sabbatical and development opportunity."
      },
      {
        date: "2025-04-05T15:45:00Z",
        action: "Manager review completed",
        by: "Sarah Johnson",
        comment: "Recommend approval based on employee performance and coverage plan."
      },
      {
        date: "2025-04-10T11:30:00Z",
        action: "Leave request approved",
        by: "HR Department",
        comment: "Approved as unpaid leave. Benefits will continue but employee must pay their portion."
      }
    ]
  }
]; 