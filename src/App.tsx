import Vendor from "./vendor-management/Vendor";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/*" element={<Vendor />} />
    </Routes>
  );
}

export default App;
