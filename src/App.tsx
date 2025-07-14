import { Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Dashboard } from "./pages/Dashboard"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
