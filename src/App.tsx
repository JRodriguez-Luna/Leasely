import { Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Dashboard } from "./pages/Dashboard"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
