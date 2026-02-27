import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./assets/pages/Home";
import Favorites from "./assets/pages/Favorites"

function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App
