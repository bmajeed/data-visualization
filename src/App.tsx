import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
// main components for each page
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="bg-slate-700 min-h-screen text-white text-md">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
