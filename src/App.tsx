import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home.tsx";
import Favorite from "./pages/Favorites.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
