import "./App.css";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router";
import MissionPage from "./components/MissionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mission" element={<MissionPage />} />
    </Routes>
  );
}

export default App;
