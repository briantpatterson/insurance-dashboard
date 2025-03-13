"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { employees } from "@/data/employees"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"

interface EmployeeSearchProps {
  className?: string
}

export function EmployeeSearch({ className }: EmployeeSearchProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [open, setOpen] = React.useState(false)

  // Filter employees based on search query
  const filteredEmployees = React.useMemo(() => {
    if (!searchQuery.trim()) return []
    
    // Convert search query to lowercase for case-insensitive comparison
    const query = searchQuery.toLowerCase().trim();
    
    return employees.filter((employee) => 
      employee.name.toLowerCase().includes(query)
    ).slice(0, 10) // Limit to 10 results
  }, [searchQuery])

  // Handle employee selection
  const handleSelect = (employeeId: string) => {
    const employee = employees.find((e) => e.id === employeeId)
    if (employee) {
      setSearchQuery("")
      router.push(`/employees/${employeeId}`)
    }
  }

  // Show dropdown when search has content
  React.useEffect(() => {
    setOpen(searchQuery.trim().length > 0)
  }, [searchQuery])

  return (
    <div className={cn("relative w-full max-w-xl", className)}>
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search employee name..."
            className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        
        {open && filteredEmployees.length > 0 && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover shadow-md">
            <div className="max-h-[300px] overflow-y-auto p-1">
              <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                Employees
              </div>
              <div className="overflow-hidden p-1">
                {filteredEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    onClick={() => handleSelect(employee.id)}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="flex flex-col">
                      <span>{employee.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ID: {employee.memberId}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {open && filteredEmployees.length === 0 && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border bg-popover shadow-md">
            <div className="py-6 text-center text-sm">
              No employees found.
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 