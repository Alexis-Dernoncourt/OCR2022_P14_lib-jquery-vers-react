import { useAppSelector } from "@/redux/hooks"
import { Link } from "react-router-dom"
import { DataTable } from "./DataTable"
import { columns } from "./columns"

const EmployeeList = () => {
  const employees = useAppSelector(state => state.employees)

  return (
    <div id="employee-div" className="container">
      <h1 className="text-5xl font-bold">Current Employees</h1>
      <div className="container mx-auto py-10 w-full">
        <DataTable columns={columns} data={employees} />
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default EmployeeList
