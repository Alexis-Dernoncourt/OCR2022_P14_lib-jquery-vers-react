import { testEmployeesData } from "@/lib/data"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type EmployeeStateType = {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: string
  startDate: string
  department: string
  street: string
  city: string
  state: string
  zipCode: number
}
// const initialState: EmployeeStateType[] = []
const initialState: EmployeeStateType[] = testEmployeesData

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<EmployeeStateType>) => {
      // TODO: prevent duplication
      state.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmployee } = employeeSlice.actions

export default employeeSlice.reducer
