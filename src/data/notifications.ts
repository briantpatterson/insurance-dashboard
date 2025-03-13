export type NotificationType = 'info' | 'warning' | 'success' | 'error';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  date: string; // ISO string
  link?: string; // Optional link to navigate to
}

// Sample notifications data
export const notifications: Notification[] = [
  {
    id: "1",
    title: "New Leave Request",
    message: "Sarah Johnson has submitted a new leave request that requires your approval.",
    type: "info",
    read: false,
    date: "2023-01-15T09:30:00Z",
    link: "/leaves/2"
  },
  {
    id: "2",
    title: "Billing Payment Due",
    message: "Your monthly premium payment of $4,732.43 is due in 3 days.",
    type: "warning",
    read: false,
    date: "2023-01-14T14:45:00Z",
    link: "/billing"
  },
  {
    id: "3",
    title: "ADA Accommodation Request",
    message: "New accommodation request from Michael Brown requires your review.",
    type: "info",
    read: false,
    date: "2023-01-13T11:20:00Z",
    link: "/accommodations/3"
  },
  {
    id: "4",
    title: "Open Enrollment Starting Soon",
    message: "Annual benefits enrollment period begins in 14 days. Prepare your selections.",
    type: "info",
    read: false,
    date: "2023-01-10T08:15:00Z",
    link: "/benefits"
  },
  {
    id: "5",
    title: "Document Uploaded",
    message: "Emily Davis has uploaded a new medical certificate for her leave request.",
    type: "success",
    read: false,
    date: "2023-01-09T16:50:00Z",
    link: "/documents"
  }
]; 