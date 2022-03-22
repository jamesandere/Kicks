import Home from "./pages/Home";
import Shoe from "./pages/Shoe";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Announcement />
            <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoe/:id" element={<Shoe />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
