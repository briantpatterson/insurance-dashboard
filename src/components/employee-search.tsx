"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
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

  // Filter employees based on search query
  const filteredEmployees = React.useMemo(() => {
    if (!searchQuery.trim()) return []
    
    return employees.filter((employee) => 
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10) // Limit to 10 results
  }, [searchQuery])

  // Handle employee selection
  const handleSelect = (employeeId: string) => {
    const employee = employees.find((e) => e.id === employeeId)
    if (employee) {
      router.push(`/employees/${employeeId}`)
    }
  }

  return (
    <div className={cn("relative w-full max-w-xl", className)}>
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          value={searchQuery}
          onValueChange={setSearchQuery}
          placeholder="Search employee name..."
          className="h-9"
        />
        {searchQuery.trim().length > 0 && (
          <CommandList className="max-h-[300px] overflow-y-auto p-1">
            {filteredEmployees.length > 0 ? (
              <CommandGroup heading="Employees">
                {filteredEmployees.map((employee) => (
                  <CommandItem
                    key={employee.id}
                    value={employee.id}
                    onSelect={handleSelect}
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <span>{employee.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ID: {employee.memberId}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>No employees found.</CommandEmpty>
            )}
          </CommandList>
        )}
      </Command>
    </div>
  )
} 