import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/header";
import Main from "./pages/main";
import { planets } from "./types";

function App() {
  const mercury = planets[0];
  const venus = planets[1];
  const earth = planets[2];
  const mars = planets[3];
  const jupiter = planets[4];
  const saturn = planets[5];
  const uranus = planets[6];
  const neptune = planets[7];
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/mercury" element={<Main planet={mercury} />} />
        <Route path="/venus" element={<Main planet={venus} />} />
        <Route path="/" element={<Main planet={earth} />} />
        <Route path="/mars" element={<Main planet={mars} />} />
        <Route path="/jupiter" element={<Main planet={jupiter} />} />
        <Route path="/saturn" element={<Main planet={saturn} />} />
        <Route path="/uranus" element={<Main planet={uranus} />} />
        <Route path="/neptune" element={<Main planet={neptune} />} />
      </Routes>
    </>
  );
}

export default App;
