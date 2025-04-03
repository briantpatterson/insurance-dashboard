"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  ClipboardList,
  Receipt,
  Heart,
  FileText,
  Calendar,
  Briefcase,
  FileIcon,
  HelpCircle,
  BarChart,
  FileCheck,
  Activity
} from "lucide-react"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon: React.ReactNode
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      <nav
        className={cn(
          "flex flex-col space-y-3",
          className
        )}
        {...props}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "text-foreground"
            )}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
      
      {/* Help section pinned to bottom */}
      <div className="mt-auto pt-6 border-t">
        <div className="flex items-start gap-3 px-3 py-3 text-sm">
          <HelpCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
          <div className="flex flex-col">
            <span className="font-medium">Need help?</span>
            <span className="text-muted-foreground">Call 800-234-5678</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const sidebarNavItems = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Employees",
    href: "/employees",
    icon: <ClipboardList className="h-5 w-5" />,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: <Receipt className="h-5 w-5" />,
  },
  {
    title: "Benefits",
    href: "/benefits",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: "Claims",
    href: "/claims",
    icon: <FileCheck className="h-5 w-5" />,
  },
  {
    title: "Leaves",
    href: "/leaves",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Accommodations",
    href: "/accommodations",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: <FileIcon className="h-5 w-5" />,
  },
  {
    title: "Insights",
    href: "/insights",
    icon: <BarChart className="h-5 w-5" />,
  },
] 