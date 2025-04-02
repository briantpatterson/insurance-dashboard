import { Metadata } from "next"
import { DashboardLayout } from "@/components/dashboard-layout"
import { BenefitCard } from "@/components/benefit-card"
import { benefits } from "@/data/benefits"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Benefits | Insurance Dashboard",
  description: "View and manage your insurance benefits",
}

export default function BenefitsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-8">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Benefits</h1>
            <Button>
              Request Policy Changes
            </Button>
          </div>
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
            Enhance Your Benefits
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-2">
              <h3 className="text-base font-medium text-slate-800 dark:text-slate-100">Life Insurance</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Provide financial security for your loved ones with coverage options up to 5x your annual salary.</p>
              <Button variant="outline" size="sm" className="mt-2">
                Learn more
              </Button>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-base font-medium text-slate-800 dark:text-slate-100">Accident Insurance</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Get additional financial protection for unexpected accidents, with cash benefits paid directly to you.</p>
              <Button variant="outline" size="sm" className="mt-2">
                Learn more
              </Button>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-base font-medium text-slate-800 dark:text-slate-100">Cancer Insurance</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Specialized coverage that helps with the out-of-pocket costs of cancer treatment not covered by your primary insurance.</p>
              <Button variant="outline" size="sm" className="mt-2">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 