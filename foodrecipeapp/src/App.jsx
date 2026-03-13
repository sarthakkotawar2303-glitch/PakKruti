import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Landing from "./pages/Intro";

function App() {
  return (
    <div className="min-h-screen bg-amber-50 relative selection:bg-orange-200 selection:text-orange-900">

      {/* Global background texture */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/p6.png')`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/recipe-item/:id" element={<Details />} />
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </main>
              </>
            }
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;