"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/employees"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/employees") ? "text-primary" : "text-muted-foreground"
        )}
      >
        Employees
      </Link>
      <Link
        href="/benefits"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/benefits") ? "text-primary" : "text-muted-foreground"
        )}
      >
        Benefits
      </Link>
      <Link
        href="/leaves"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/leaves") ? "text-primary" : "text-muted-foreground"
        )}
      >
        Leaves
      </Link>
      <Link
        href="/billing"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/billing") ? "text-primary" : "text-muted-foreground"
        )}
      >
        Billing
      </Link>
      <Link
        href="/reports"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname.startsWith("/reports") ? "text-primary" : "text-muted-foreground"
        )}
      >
        Reports
      </Link>
    </nav>
  )
} 