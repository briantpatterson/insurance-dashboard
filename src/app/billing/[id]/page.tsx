"use client"

import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, CreditCard, Calendar, CheckCircle2, AlertCircle, Receipt, PieChart } from "lucide-react"
import { billingHistory } from "@/data/billing"
import Link from "next/link"
import { format } from "date-fns"

interface BillingDetailsPageProps {
  params: {
    id: string
  }
}

export default function BillingDetailsPage({ params }: BillingDetailsPageProps) {
  const router = useRouter()
  const { id } = params
  
  // Find the billing item by ID
  const billingItem = billingHistory.find(item => item.id === id)
  
  // If billing item not found, show 404 page
  if (!billingItem) {
    notFound()
  }
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }
  
  // Get status icon
  const getStatusIcon = () => {
    switch (billingItem.status) {
      case "paid":
        return <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
      case "pending":
        return <Calendar className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
      case "overdue":
        return <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
      case "processing":
        return <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      default:
        return null
    }
  }
  
  // Get status text with color
  const getStatusText = () => {
    switch (billingItem.status) {
      case "paid":
        return <span className="text-green-600 dark:text-green-400 font-medium">Paid</span>
      case "pending":
        return <span className="text-yellow-600 dark:text-yellow-400 font-medium">Pending</span>
      case "overdue":
        return <span className="text-red-600 dark:text-red-400 font-medium">Overdue</span>
      case "processing":
        return <span className="text-blue-600 dark:text-blue-400 font-medium">Processing</span>
      default:
        return <span>{billingItem.status}</span>
    }
  }
  
  // Add a function to format dates consistently
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MM/dd/yyyy");
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/billing">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Billing
            </Link>
          </Button>
        </div>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Statement Date: {formatDate(billingItem.date)}
            </h1>
          </div>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
        
        {/* Content */}
        <div className="grid gap-6 md:grid-cols-1">
          {/* Main invoice details */}
          <div className="space-y-6">
            {/* Summary card */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Receipt className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Summary</h2>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {formatCurrency(billingItem.amount)}
                  </h2>
                  <div className="flex items-center gap-2">
                    <p className="text-slate-600 dark:text-slate-400">
                      For coverage period: {billingItem.period}
                    </p>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      {getStatusIcon()}
                      {getStatusText()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="grid grid-cols-2 gap-1 text-base">
                    <dt className="text-muted-foreground">Issue Date:</dt>
                    <dd className="font-medium text-slate-800 dark:text-slate-100">{formatDate(billingItem.date)}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-base">
                    <dt className="text-muted-foreground">Due Date:</dt>
                    <dd className="font-medium text-slate-800 dark:text-slate-100">{formatDate(billingItem.dueDate)}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-base">
                    <dt className="text-muted-foreground">Billing Reference Number:</dt>
                    <dd className="font-medium text-slate-800 dark:text-slate-100">{billingItem.invoiceNumber}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-base">
                    <dt className="text-muted-foreground">Payment Method:</dt>
                    <dd className="font-medium text-slate-800 dark:text-slate-100">{billingItem.paymentMethod}</dd>
                  </div>
                  {billingItem.paymentDate && (
                    <div className="grid grid-cols-2 gap-1 text-base">
                      <dt className="text-muted-foreground">Payment Date:</dt>
                      <dd className="font-medium text-slate-800 dark:text-slate-100">{formatDate(billingItem.paymentDate)}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
            
            {/* Coverage details */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Breakdown</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid grid-cols-2 gap-1 text-base">
                    <h3 className="text-muted-foreground">Primary Coverage:</h3>
                    <p className="font-medium text-slate-800 dark:text-slate-100">Health Insurance - Family Plan</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-base">
                    <h3 className="text-muted-foreground">Dependents Covered:</h3>
                    <p className="font-medium text-slate-800 dark:text-slate-100">3</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="text-base text-muted-foreground mb-2">Coverage Breakdown:</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-medium text-muted-foreground">Coverage Type</th>
                        <th className="text-right py-2 font-medium text-muted-foreground">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-slate-800 dark:text-slate-100">Health Insurance</td>
                        <td className="py-2 text-right text-slate-800 dark:text-slate-100">{formatCurrency(billingItem.amount * 0.7)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-slate-800 dark:text-slate-100">Dental Coverage</td>
                        <td className="py-2 text-right text-slate-800 dark:text-slate-100">{formatCurrency(billingItem.amount * 0.2)}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-slate-800 dark:text-slate-100">Vision Coverage</td>
                        <td className="py-2 text-right text-slate-800 dark:text-slate-100">{formatCurrency(billingItem.amount * 0.1)}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium text-slate-800 dark:text-slate-100">Total</td>
                        <td className="py-2 text-right font-medium text-slate-800 dark:text-slate-100">{formatCurrency(billingItem.amount)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 