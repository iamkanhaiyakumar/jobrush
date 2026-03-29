import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/admin-secret-123" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;