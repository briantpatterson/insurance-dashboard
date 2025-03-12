export type BillingStatus = "paid" | "pending" | "overdue" | "processing";

export interface BillingItem {
  id: string;
  amount: number;
  date: string;
  dueDate: string;
  status: BillingStatus;
  period: string;
  invoiceNumber: string;
  paymentMethod: string;
  paymentDate?: string;
}

export interface PaymentMethod {
  name: string;
  last4: string;
  expiryDate?: string;
}

export interface AutopaySettings {
  enabled: boolean;
  paymentMethod: PaymentMethod;
  nextPaymentDate: string;
  nextPaymentAmount: number;
}

// Mock billing history data
export const billingHistory: BillingItem[] = [
  {
    id: "bill-001",
    amount: 349.99,
    date: "2023-11-01",
    dueDate: "2023-11-15",
    status: "paid",
    period: "November 2023",
    invoiceNumber: "INV-2023-11",
    paymentMethod: "Visa ending in 4242",
    paymentDate: "2023-11-10"
  },
  {
    id: "bill-002",
    amount: 349.99,
    date: "2023-12-01",
    dueDate: "2023-12-15",
    status: "paid",
    period: "December 2023",
    invoiceNumber: "INV-2023-12",
    paymentMethod: "Visa ending in 4242",
    paymentDate: "2023-12-12"
  },
  {
    id: "bill-003",
    amount: 349.99,
    date: "2024-01-01",
    dueDate: "2024-01-15",
    status: "paid",
    period: "January 2024",
    invoiceNumber: "INV-2024-01",
    paymentMethod: "Visa ending in 4242",
    paymentDate: "2024-01-10"
  },
  {
    id: "bill-004",
    amount: 349.99,
    date: "2024-02-01",
    dueDate: "2024-02-15",
    status: "paid",
    period: "February 2024",
    invoiceNumber: "INV-2024-02",
    paymentMethod: "Visa ending in 4242",
    paymentDate: "2024-02-10"
  },
  {
    id: "bill-005",
    amount: 349.99,
    date: "2024-03-01",
    dueDate: "2024-03-15",
    status: "processing",
    period: "March 2024",
    invoiceNumber: "INV-2024-03",
    paymentMethod: "Visa ending in 4242"
  },
  {
    id: "bill-006",
    amount: 349.99,
    date: "2024-04-01",
    dueDate: "2024-04-15",
    status: "pending",
    period: "April 2024",
    invoiceNumber: "INV-2024-04",
    paymentMethod: "Visa ending in 4242"
  }
];

// Mock autopay settings
export const autopaySettings: AutopaySettings = {
  enabled: true,
  paymentMethod: {
    name: "Visa",
    last4: "4242",
    expiryDate: "04/2026"
  },
  nextPaymentDate: "2024-04-15",
  nextPaymentAmount: 349.99
}; 