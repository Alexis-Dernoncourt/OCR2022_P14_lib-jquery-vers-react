import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { states } from "@/lib/data"
import { ModalComponent } from "my-react-modal-ad62"
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
            <legend className="px-1">Address</legend>

            <label htmlFor="street">Street</label>
            <Input id="street" type="text" />

            <label htmlFor="city">City</label>
            <Input id="city" type="text" />

            <label htmlFor="state">State</label>
            <Select name="state">
              <SelectTrigger className="w-full" id="state">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {states.map(state => (
                  <SelectItem
                    key={state.abbreviation}
                    value={state.abbreviation}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <label htmlFor="zip-code">Zip Code</label>
            <Input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select name="department">
            <SelectTrigger className="w-full" id="department">
              <SelectValue placeholder="Select a department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="human-resources">Human Resources</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
            </SelectContent>
          </Select>
        </form>

        <Button>Save</Button>
      </div>
      <ModalComponent modalContainerClass="fixed top-[20%] left-[50%] translate-x-[-50%] z-9999 flex justify-center flex-col min-w-[300px] max-w-[80%] rounded pt-12 pb-4 px-4 bg-red-500">
        <h1 className="text-3xl font-bold">
          Un long titre. Un long titre. Un long titre. Un long titre.
        </h1>
        <p className="m-0 p-0 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          perferendis quia fugiat dolor magnam. Sunt recusandae odit ut maiores
          enim nemo assumenda, laudantium iste non eum? Quibusdam accusamus
          necessitatibus voluptatibus! Distinctio dolore necessitatibus
          sapiente, consequatur sint dignissimos voluptates rem excepturi
          aliquid obcaecati quo pariatur sequi accusamus illum dolorum
          voluptatum accusantium ipsa alias consequuntur dolorem fuga eos beatae
          saepe. Dolor, doloribus? Numquam officiis error doloribus harum eius!
          Architecto magni aliquam, nihil repellendus veritatis excepturi eius
          explicabo molestias a, ad hic. Voluptate necessitatibus debitis minima
          et assumenda, architecto iusto ut soluta ullam.
        </p>
        <div className="modal text-2xl">Employee Created!</div>
        <button onClick={() => console.log("fermer")}>Fermer</button>
      </ModalComponent>
    </>
  )
}

export default Home
