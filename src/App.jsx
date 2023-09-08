import "./App.css";
import Index from "./Components/category/Index";
import Home from "./Components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
