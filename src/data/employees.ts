export type Employee = {
  id: string
  name: string
  memberId: string
  coverage: string[]
  leaveStatus: string
  dependents: number
}

export const employees: Employee[] = [
  {
    id: "1",
    name: "John Smith",
    memberId: "123456789",
    coverage: ["Dental", "Vision", "Short Term Disability"],
    leaveStatus: "Active",
    dependents: 2
  },
  {
    id: "2",
    name: "Sarah Johnson",
    memberId: "234567890",
    coverage: ["Dental", "Long Term Disability"],
    leaveStatus: "On Leave",
    dependents: 1
  },
  {
    id: "3",
    name: "Michael Brown",
    memberId: "345678901",
    coverage: ["Vision", "Short Term Disability"],
    leaveStatus: "Active",
    dependents: 0
  },
  {
    id: "4",
    name: "Emily Davis",
    memberId: "456789012",
    coverage: ["Dental", "Vision", "Long Term Disability"],
    leaveStatus: "Active",
    dependents: 3
  },
  {
    id: "5",
    name: "Robert Wilson",
    memberId: "567890123",
    coverage: ["Short Term Disability"],
    leaveStatus: "Pending Return",
    dependents: 0
  },
  {
    id: "6",
    name: "Jennifer Martinez",
    memberId: "678901234",
    coverage: ["Dental", "Vision", "Short Term Disability", "Long Term Disability"],
    leaveStatus: "Active",
    dependents: 2
  },
  {
    id: "7",
    name: "David Anderson",
    memberId: "789012345",
    coverage: ["Dental", "Long Term Disability"],
    leaveStatus: "Leave Requested",
    dependents: 1
  },
  {
    id: "8",
    name: "Lisa Thomas",
    memberId: "890123456",
    coverage: ["Vision", "Short Term Disability"],
    leaveStatus: "Active",
    dependents: 0
  },
  {
    id: "9",
    name: "James Taylor",
    memberId: "901234567",
    coverage: ["Dental", "Vision", "Long Term Disability"],
    leaveStatus: "Active",
    dependents: 4
  },
  {
    id: "10",
    name: "Patricia Moore",
    memberId: "012345678",
    coverage: ["Short Term Disability"],
    leaveStatus: "On Leave",
    dependents: 0
  },
  {
    id: "11",
    name: "Richard Jackson",
    memberId: "123789456",
    coverage: ["Dental", "Long Term Disability"],
    leaveStatus: "Active",
    dependents: 2
  },
  {
    id: "12",
    name: "Elizabeth White",
    memberId: "234890567",
    coverage: ["Dental", "Vision", "Short Term Disability"],
    leaveStatus: "Active",
    dependents: 1
  },
  {
    id: "13",
    name: "Charles Harris",
    memberId: "345901678",
    coverage: ["Vision", "Long Term Disability"],
    leaveStatus: "Leave Requested",
    dependents: 0
  },
  {
    id: "14",
    name: "Susan Clark",
    memberId: "456012789",
    coverage: ["Dental", "Short Term Disability"],
    leaveStatus: "Active",
    dependents: 2
  },
  {
    id: "15",
    name: "Joseph Lewis",
    memberId: "567123890",
    coverage: ["Dental", "Vision", "Long Term Disability"],
    leaveStatus: "On Leave",
    dependents: 3
  }
] 