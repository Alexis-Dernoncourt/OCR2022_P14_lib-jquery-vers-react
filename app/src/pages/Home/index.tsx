import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold">HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list" className="underline">
          View Current Employees
        </Link>
        <h2 className="text-3xl font-bold">Create Employee</h2>
        <form
          action="#"
          id="create-employee"
          className="flex flex-col w-1/2 mb-3">
          <label htmlFor="first-name">First Name</label>
          <Input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <Input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <Input id="start-date" type="text" />

          <fieldset className="address border border-primary rounded p-2">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <Input id="street" type="text" />

            <label htmlFor="city">City</label>
            <Input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <Input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department" className="p-2">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <Button>Save</Button>
      </div>
      <div className="modal">Employee Created!</div>
    </>
  )
}

export default Home
