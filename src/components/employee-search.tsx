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
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [searchQuery, setSearchQuery] = React.useState("")

  // Filter employees based on search query
  const filteredEmployees = React.useMemo(() => {
    if (!searchQuery) return []
    
    return employees.filter((employee) => 
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10) // Limit to 10 results
  }, [searchQuery])

  // Handle employee selection
  const handleSelect = (employeeId: string) => {
    const employee = employees.find((e) => e.id === employeeId)
    if (employee) {
      setValue(employee.name)
      setOpen(false)
      router.push(`/employees/${employeeId}`)
    }
  }

  return (
    <div className={cn("relative w-full max-w-xl", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Command className="overflow-visible bg-transparent">
          <CommandInput
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder="Search employee name..."
            className="w-full border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {searchQuery.length > 0 && (
            <div className="absolute top-full z-10 w-full rounded-md border bg-popover shadow-md">
              <CommandList>
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
            </div>
          )}
        </Command>
      </div>
    </div>
  )
} 