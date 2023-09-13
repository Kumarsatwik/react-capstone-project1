import "./App.css";
import Movie from "./Components/movie/Movie";
import Index from "./Components/category/Index";
import Dashboard from "./Components/dashboard/dashboard";
import Home from "./Components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
