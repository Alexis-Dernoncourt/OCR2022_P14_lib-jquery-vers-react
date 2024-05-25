import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type EmployeeStateType = {
  firstName: string
  lastName: string
  dateOfBirth: string
  startDate: string
  department: string
  street: string
  city: string
  state: string
  zipCode: string
}
const initialState: EmployeeStateType = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  department: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
}

export const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<EmployeeStateType>) => {
      console.log("🚀 ~ state:", state) //TODO: remove the log
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmployee } = employeeSlice.actions

export default employeeSlice.reducer
