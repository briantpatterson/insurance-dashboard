import { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard-layout"
import { BillingHistoryTable } from "@/components/billing-history-table"
import { AutopayModule } from "@/components/autopay-module"
import { billingHistory, autopaySettings } from "@/data/billing"
import { BillingFaqCard } from "@/components/billing-faq-card"

export const metadata: Metadata = {
  title: "Billing | Insurance Dashboard",
  description: "Manage your billing and payment information",
}

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Billing</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage your billing information and payment history
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <BillingHistoryTable billingHistory={billingHistory} />
          </div>
          <div>
            <AutopayModule settings={autopaySettings} />
            <BillingFaqCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 