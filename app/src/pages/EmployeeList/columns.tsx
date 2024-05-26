import { EmployeeStateType } from "@/redux/features/employee/employeeSlice"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our header.
// You can use a Zod schema here if you want.
// type Employees = {}

export const columns: ColumnDef<EmployeeStateType>[] = [
  {
    accessorKey: "firstName",
    header: () => <div className="text-center font-bold">First Name</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "lastName",
    header: () => <div className="text-center font-bold">Last Name</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "startDate",
    header: () => <div className="text-center font-bold">Start Date</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "department",
    header: () => <div className="text-center font-bold">Department</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: () => <div className="text-center font-bold">Date of birth</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "street",
    header: () => <div className="text-center font-bold">Street</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "city",
    header: () => <div className="text-center font-bold">City</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "state",
    header: () => <div className="text-center font-bold">State</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
  {
    accessorKey: "zipCode",
    header: () => <div className="text-center font-bold">Zip Code</div>,
    cell: ({ column, row }) => {
      return (
        <div className="text-center font-medium">{row.getValue(column.id)}</div>
      )
    },
  },
]
