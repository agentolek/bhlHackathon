import "./App.css";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router";
import MissionPage from "./components/MissionPage";
import Satellite from "./components/Satellite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mission" element={<MissionPage />} />
      <Route
        path="/test"
        element={
          <Satellite
            onSelect={() => 0}
            satellite={{ name: "BAJO-SAT", mass: 2137, designator: "fffff" }}
          />
        }
      />
    </Routes>
  );
}

export default App;
