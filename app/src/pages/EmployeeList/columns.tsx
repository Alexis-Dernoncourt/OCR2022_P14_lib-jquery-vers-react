import { Button } from "@/components/ui/button"
import { EmployeeStateType } from "@/redux/features/employee/employeeSlice"
import { ColumnDef } from "@tanstack/react-table"
import { DisplayArrow } from "./Arrow"

// This type is used to define the shape of our header.
// You can use a Zod schema here if you want.
// type Employees = {}

export const columns: ColumnDef<EmployeeStateType>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">First Name</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">Last Name</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">Start Date</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">Department</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">Date of birth</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "street",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">Street</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">City</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "state",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">State</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "zipCode",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <div className="text-center font-bold">Zip Code</div>
        <DisplayArrow column={column} />
      </Button>
    ),
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
]
