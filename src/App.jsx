import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Assignments } from "./pages/Assignments";
import { Reflections } from "./pages/Reflections";
import { Conclusion } from "./pages/Conclusion";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { DayInMyLife } from "./pages/DayInMyLifeVideo";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="index" element={<Home />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="reflections" element={<Reflections />} />
          <Route path="conclusion" element={<Conclusion />} />
          <Route path="video" element={<DayInMyLife />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
