import Layout from "@/components/Layout"
import EmployeeList from "@/pages/EmployeeList"
import Home from "@/pages/Home"
import { Navigate, Route, Routes } from "react-router-dom"

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />} errorElement={<p>Error !</p>}>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
