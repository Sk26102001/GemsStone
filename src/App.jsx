

// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import SubPage from "./pages/SubPage.jsx";

export default function App() {
  return (
   
      <Routes>
        <Route path="/GemsStone" element={<LandingPage />} />
        <Route path="/GemsStone/subpage" element={<SubPage />} />
      </Routes>

  );
}
