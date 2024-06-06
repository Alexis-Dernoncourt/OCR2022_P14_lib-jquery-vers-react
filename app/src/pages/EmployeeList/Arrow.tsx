import { EmployeeStateType } from "@/redux/features/employee/employeeSlice"
import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"

export const DisplayArrow = ({
  column,
}: {
  column: Column<EmployeeStateType, unknown>
}) => {
  if (column.getIsSorted() === "asc")
    return <ArrowUp className="ml-1 h-3 w-3" />
  if (column.getIsSorted() === "desc")
    return <ArrowDown className="ml-1 h-3 w-3" />
  if (!column.getIsSorted()) return <ArrowUpDown className="ml-1 h-3 w-3" />
}
