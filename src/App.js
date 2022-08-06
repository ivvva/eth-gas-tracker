import "./App.css";
import { Routes, Route } from "react-router-dom";
import GasTracker from "./components/GasTracker";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GasTracker />} />
      </Routes>
    </div>
  );
}

export default App;
