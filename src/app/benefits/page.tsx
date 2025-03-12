import { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard-layout"
import { BenefitCard } from "@/components/benefit-card"
import { benefits } from "@/data/benefits"

export const metadata: Metadata = {
  title: "Benefits | Insurance Dashboard",
  description: "View and manage your insurance benefits",
}

export default function BenefitsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Benefits</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            View and manage your active insurance coverages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
            Need Help?
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            If you have questions about your benefits or need to make changes to your coverage, 
            please contact your HR representative or the benefits administrator.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">HR Contact</h3>
              <p className="text-slate-800 dark:text-slate-100">hr@company.com</p>
              <p className="text-slate-800 dark:text-slate-100">1-800-555-1234 ext. 5678</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Benefits Administrator</h3>
              <p className="text-slate-800 dark:text-slate-100">benefits@company.com</p>
              <p className="text-slate-800 dark:text-slate-100">1-800-555-9876</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 