"use client"

import { useEffect } from "react"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold text-destructive mb-4">Something went wrong!</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          An unexpected error has occurred. We've been notified and are working to fix the issue.
        </p>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </DashboardLayout>
  )
} 