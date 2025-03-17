"use client"

import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, CreditCard, Calendar, CheckCircle2, AlertCircle } from "lucide-react"
import { billingHistory } from "@/data/billing"
import Link from "next/link"

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
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        {/* Breadcrumb navigation */}
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Button variant="outline" size="sm" asChild>
            <Link href="/billing">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Billing
            </Link>
          </Button>
        </div>
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Invoice #{billingItem.invoiceNumber}
          </h1>
          <div className="flex items-center gap-2 mt-2 text-slate-600 dark:text-slate-400">
            <span>Issued on {billingItem.date}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              {getStatusIcon()}
              {getStatusText()}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main invoice details */}
          <div className="md:col-span-2 space-y-6">
            {/* Summary card */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {formatCurrency(billingItem.amount)}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    For coverage period: {billingItem.period}
                  </p>
                </div>
                <Button className="mt-4 md:mt-0" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
              
              <div className="border-t pt-4">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Due Date</dt>
                    <dd className="text-slate-800 dark:text-slate-100">{billingItem.dueDate}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Payment Method</dt>
                    <dd className="text-slate-800 dark:text-slate-100">{billingItem.paymentMethod}</dd>
                  </div>
                  {billingItem.paymentDate && (
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Payment Date</dt>
                      <dd className="text-slate-800 dark:text-slate-100">{billingItem.paymentDate}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
            
            {/* Coverage details */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Coverage Details
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Primary Coverage</h3>
                    <p className="text-slate-800 dark:text-slate-100">Health Insurance - Family Plan</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Dependents Covered</h3>
                    <p className="text-slate-800 dark:text-slate-100">3</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Coverage Breakdown</h3>
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
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Payment status card */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Payment Status
              </h2>
              
              {billingItem.status === "paid" ? (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-950">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-300">Payment Complete</h3>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      This invoice was paid on {billingItem.paymentDate}.
                    </p>
                  </div>
                </div>
              ) : billingItem.status === "pending" ? (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950">
                  <Calendar className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-300">Payment Due</h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400">
                      Payment is due by {billingItem.dueDate}.
                    </p>
                  </div>
                </div>
              ) : billingItem.status === "overdue" ? (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-950">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-red-800 dark:text-red-300">Payment Overdue</h3>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      Payment was due on {billingItem.dueDate}.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
                  <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-300">Payment Processing</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      Your payment is being processed.
                    </p>
                  </div>
                </div>
              )}
              
              {billingItem.status !== "paid" && (
                <Button className="w-full mt-4">
                  Pay Now
                </Button>
              )}
            </div>
            
            {/* Support card */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Need Help?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                If you have any questions about this invoice, please contact our support team.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 