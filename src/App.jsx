

// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import SubPage from "./pages/SubPage.jsx";
import GemstoneDetailPage from "./pages/GemstoneDetailPage.jsx";
import GemstoneFinalPage from "./pages/GemstoneFinalPage.jsx";



export default function App() {
  return (
   
      <Routes>
        <Route path="/GemsStone" element={<LandingPage />} />
        <Route path="/GemsStone/subpage" element={<SubPage />} />
      <Route path="/GemsStone/gemstone-detail/:gemName" element={<GemstoneDetailPage />} />
        <Route path="/GemsStone/gemstone-detail/:gemName/:id" element={<GemstoneFinalPage />} />

  
      </Routes>

  );
}



