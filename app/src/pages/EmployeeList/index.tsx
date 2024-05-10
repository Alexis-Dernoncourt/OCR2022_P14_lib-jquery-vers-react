import { Link } from "react-router-dom"
import { DataTable } from "./DataTable"
import { Employees, columns } from "./columns"

const EmployeeList = () => {
  const testEmployeesData = [
    {
      firstName: "John",
      lastName: "Doe",
      startDate: "2020-01-01",
      department: "Engineering",
      dateOfBirth: "1990-01-01",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    {
      firstName: "Jane",
      lastName: "Doah",
      startDate: "2022-02-01",
      department: "Computer Scientist",
      dateOfBirth: "1980-01-01",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "54321",
    },
  ]
  const employees: Employees[] =
    JSON.parse(localStorage.getItem("employees") as string) || testEmployeesData

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
